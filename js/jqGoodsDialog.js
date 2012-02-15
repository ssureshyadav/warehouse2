(function( $ ){ //регистрация плагина

	/* Константы */
	var PLUGIN='jqGoodsDialog' //"уникальное" имя плагина
	,GROUPURL="json.GoodsGroup2.cls" //адрес с которого забираем данные по дереву групп
	,GOODURL="json.Goods.cls" //адрес с данными по товарам
	/*Языковые ресурсы*/
	
	/* Методы */
	var methods = {
	///Функция инициализации 
	init: function(/*Объект(ы) */ params){	
		var defaults=$.extend({onSelectGood: null},params);
		var TXT={
		 catInputLbl: 'Catalogue'
		 ,catBtnTitle: 'Select catalogue'
		 ,catGrdColNameLbl: 'Name'
		 ,catDlgTitle: 'Select Catalogue'
		 ,groupGrdCaption: 'Good groups'
		};
	
	return this.each( function(){
		
		/*Исключение повторной инициализации*/	
		var $this=$(this), flag=$this.data(PLUGIN); if (flag) return; //элемент уже инициализировался плагином
		
		/* Для уникальности на странице потребуется идентификатор */
		var id=$this.attr("id"); if (!id) {alert("element without id"); return;}
		var catid=id+"_cat" //селектор инпута с выбранным каталогом
			,catBtn=catid+"Btn" // кнопка после инпута
			,catDlg=catid+"Dlg" // диалог выбора каталога
			,catGrd=catid+"Grd" // грид с каталогами
			,catBar=catid+"Bar" // панель грида с каталогами
			,groupid=id+"_Grp" //селектор дерева групп
			,groupGrd=groupid+"Grd"
			,groupBar=groupid+"Bar"
			,goodid=id+"_Good" //селектор таблицы с товарами
			,goodGrd=goodid+"Grd"
			,goodBar=goodid+"Bar"
			,warning=catid+"Warn"
		
		var warn=[
		"<div id='",warning,"' style='margin-top: 20px; padding: 0 .7em;' class='ui-state-highlight ui-corner-all'>"
		,"<p><span style='float: left; margin-right: .3em;' class='ui-icon ui-icon-info'></span>"
		,"Please, select good item!</p>"
		,"</div>"
		];

		$(warn.join("")).appendTo($this).dialog({title:'Warning!',autoOpen:false,modal:true});
		
		var html=["<table><tr><td valign='top'>" //левая ячейка
		//размещаем элементы, необходимые для создания дерева групп
		,"<table id='",groupGrd,"'><tr><td></td></tr></table><div id='",groupBar,"'></div>"
		,"</td><td valign='top'>" 
		,"<table id='",goodGrd,"'><tr><td></td></tr></table><div id='",goodBar,"'></div>"
		,"</td></tr></table>"];

		
		//добавляем структуру в указанный элемент
		var content=$(html.join("")).appendTo($this);
		var catsOpts=new Array(); //собрать опции выбора каталога
		$.ajax({url: 'json.Catalogue.cls'
			,async: false //ЛАГ !!!
			,data: { sidx:'nm', sord:''}
			,dataType: 'json'
			,success: function(data){ //из ответа собираем список
				var len=0;  if (data.rows) len=data.rows.length;
				for (var i=0;i<len;i++){
					var obj=data.rows[i]; if (!obj) contniue;
					catsOpts.push(obj.id+":"+obj.nm);
				}
			}
		});

  
 //Дерево групп
 $("#"+groupGrd).jqGrid({
  caption: TXT["groupGrdCaption"]
  ,colModel: [
      {name:'id',hidden:true}
      ,{name:'n',label:'Name', width:350,sortable:false
		,search: true
		,stype: 'select'
		,searchoptions: {
			value: catsOpts.join(";") //список групп, полученный ранее
		}
	  }
  ]
  ,idPrefix:"gg"
  ,url: GROUPURL
  ,datatype: "json"
  ,postData: {depot: 1,cat: $("#"+catid).val()}
  ,treeGrid: true
  ,treeGridModel: "adjacency"
  ,treeIcons: {plus:'ui-icon-circlesmall-plus',minus:'ui-icon-circlesmall-minus',leaf:'ui-icon-arrowstop-1-e'} 
  ,ExpandColumn: "n"
  ,ExpandColClick: true
  ,jsonReader : { repeatitems: false }
  ,treeReader : {
   	level_field: "level",
   	parent_id_field: "parent", // then why does your table use "parent_id"?
   	leaf_field: "leaf",
   	expanded_field: "expanded" //не изменять, иначе компонент глючит!!!
  }
  ,onSelectRow: function(id){  /// Выбрана группа в дереве групп
	var $gdg=$("#"+goodGrd), postData=$gdg.jqGrid("getGridParam","postData");
  	postData["gp"]=id;
	$gdg.jqGrid("setGridParam","postData",postData)
		.trigger("reloadGrid");
	
  }
  ,pager:"#"+groupBar
  ,viewrecords:true
  ,height:400
  ,hidegrid: false
 }).jqGrid('navGrid',"#"+groupBar, 
       {add:false,edit:false,del:false,view:false,search:false}
       ,{} //Параметры редактирования
       ,{} //Параметры добавления
       ,{}
 ).jqGrid('gridResize',{minWidth:100,minHeight:100})
  .jqGrid('filterToolbar',{searchOnEnter:false})
  .jqGrid('navButtonAdd',"#"+groupBar,{
    caption:""
    ,buttonicon: "ui-icon-circlesmall-plus"
    ,title: "Expand"
    ,onClickButton : function (){
		  var $gp=$( "#"+groupGrd )
	      , record=$gp.jqGrid('getRowData')[0]
     	  , expand = function(record){
		       record._id_ = record.id; //hard hack 
		      	var children=$gp.jqGrid("getNodeChildren",record);
				if (!children.length) return;
				for (var child in children){
		       		expand(children[child]);
				};
		      	$gp.jqGrid('expandRow',record);
	       	$gp.jqGrid('expandNode', record);
	       };
	       expand(record);
	}
  })
  .jqGrid('navButtonAdd',"#"+groupBar,{
    caption:""
    ,buttonicon: "ui-icon-circlesmall-minus"
    ,title: "Collapse"
    ,onClickButton : function (){
	    var $gp=$( "#"+ groupGrd)
       	, record=$gp.jqGrid('getRowData')[0]
     	, collapse = function(record){
		       record._id_ = record.id; //hard hack 
		      	var children=$gp.jqGrid("getNodeChildren",record);
		      	if (!children.length) return;
				for (var child in children){
		       		collapse(children[child]);
				};
		       	$gp.jqGrid('collapseRow', record);
				$gp.jqGrid('collapseNode', record);
	    };
	    collapse(record);
 	}
  });
  $("#"+groupBar+"_center").remove(); //упростили панель управления деревом (удалили пустую центральную часть)

//Таблица с товарами
$("#"+goodGrd).jqGrid({
	caption: "Goods"
	,colModel: [
		{name:"id",hidden:true}
		,{name:"gd",hidden:true}
		,{name:"nm",label:"Name", width:350}
	]
	,url: GOODURL
	,datatype: "json"
	,jsonReader : { repeatitems: false }
	,postData:{gp:''}
	,idPrefix:"g"
	,pager:"#"+goodBar
	,height:400
	,hidegrid: false
	,rownumbers:true,viewrecords:true,rowNum:100
	,scroll:1 /*,scrollrows:true */
	,hoverrows:true
	,gridview:true 
	,ondblClickRow: function(id){
		var rowData=$(this).jqGrid("getRowData",id);
		var handler=defaults.onSelect;
		if (typeof(handler)=='function') {
			handler({id:rowData.gd,nm:rowData.nm});
		}
		$this.jqGoodsDialog("close");
	}
})
.jqGrid('navGrid',"#"+goodBar, 
       {add:false,edit:false,del:false,view:false,search:false}
       ,{} //Параметры редактирования
       ,{} //Параметры добавления
       ,{}
 )	
 .jqGrid('gridResize',{minWidth:100,minHeight:100})
 .jqGrid('filterToolbar',{searchOnEnter:false});
 $("#"+goodBar+"_center").remove();

	// убрали все обработчики событий от селекта с каталогами
	// так как изначально он создан компонетом 
	// и предназначен для фильтрации по наименованию
	$("#gs_n","#gview_"+groupGrd).unbind().change(function(){ //смена каталога
	var cat=$(this).val();
	// код каталога передаем в качестве параметра гриду с группами
	var $gpGrd=$("#"+groupGrd);
	var postData=$gpGrd.jqGrid("getGridParam","postData");
	postData.cat=cat; //изменили
	$gpGrd.jqGrid("setGridParam","postData",postData);
	$gpGrd.trigger("reloadGrid");
	
	var $gdg=$("#"+goodGrd), postData=$gdg.jqGrid("getGridParam","postData");
  	postData["gp"]='';
	$gdg.jqGrid("setGridParam","postData",postData)
		.trigger("reloadGrid");
	
	});
	
	// А теперь все это счастье прячем в диалог
	$this.dialog({title:'Select good', modal: true
		, width: 820, height: 630
		, autoOpen: false 
		, buttons:[
			{ text: 'Select',click: function(){
				var selrow=$("#"+goodGrd).jqGrid("getGridParam","selrow");
				if (!selrow){
					$("#"+warning).dialog("open");
					return;
				};
				var handler=defaults.onSelect;
				if (typeof(handler)=="function"){
					var rowData=$("#"+goodGrd).jqGrid("getRowData",selrow);
					handler({id:rowData.gd,nm:rowData.nm});
				}
				$(this).dialog("close");
			}}
			,{ text: 'Cancel',click: function(){$(this).dialog("close");}}
		]
	});
	
	// выставляем флаг инициализации
	$this.data(PLUGIN, { target : $this });	
	
		});	//end of return	
	} //end init
	,open: function(){ return this.each( function(){
			var $this=$(this); $this.dialog("open");
		})
	} //end of open
	,close: function(){
		return this.each( function(){
			var $this=$(this); $this.dialog("close");
		})
	}
	};//end of methods	
	
/*Собственно сам плагин - Диалог выбора товара */
$.fn[PLUGIN] = function(method){
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.'+PLUGIN );
    }    
 };
	
 //end of $.fn.jqGoodsDialog 
})(jQuery) //end of registration