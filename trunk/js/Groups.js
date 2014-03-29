
;$(function(){
	var _first=true; //приватная переменная для обработчика beforeRequest
	var $grid=jQuery("#grid").jqGrid( 
		{ url:'json.Groups.cls',mtype: "POST", datatype: "json", jsonReader: {repeatitems:false}
			 , colModel:[ 
			 	{name:'id', label:'№ партии', width:60}
			 	, {name:'ftn', label:'Марка ГСМ',width:120}  //FuelType->Name
			 	, {name:'tanks', label:'№ резервуаров',width:120}  //FuelType->Name
			 	, {name:'dd', label:"Дата поступления",width:120,search:false} //DeliveryDate
				, {name:'rc', label:'Объём заливок (л)', width:130,search:false} //RealCapacity
				, {name:'sc', label:'Объём продаж (л)', width:130,search:false} //SalesCapacity
				, {name:'ost', label:'Остаток партии (л)', width:130,search:false} //SalesCapacity
			 	, {name:'pf',label:'Стоимость партии', width:140,search:false} //PriceFact
			 	, {name:'lpf', label:'Стоимость литра', width:100,search:false} //LiterPriceFact
				, {name:'Ste', label:'Статус', width:100,stype: 'select'
					,searchoptions:{value:"0:Активные;%:Все"}
				}
			 ]
			 /// Обработчик перед запросом 
			 , loadBeforeSend: function(xhr,settings){
				/// Делаем так чтобы первый запрос выводил партии со статусом активные
				/// а в остальные запросы обработчик не вмешивался
				if (!_first) return; //только первый вызов
				_first=false; //выключаем флаг 
				///Включаем режим поиска (при первом запросе он отключен)
				settings.data=settings.data.replace("_search=false","_search=true");
				///В параметры поиска добавляем поиск со статусом активный
				///Смотри опции поиска поля Ste
				settings.data+="&Ste=0";
			 }
			 , pager: '#bar'
			 , rowNum:50, rownumbers: true
			 , viewrecords: true
			 , caption: "Партии: "  
			 , height:500
			 , mtype:"POST"
			, gridview:true, scroll:1
			, sortable: true //разрешаем перемещать колонки
			, hidegrid: false //отключаем свертывание
			, viewrecords:true, hoverrows:true 
	})
	.jqGrid('navGrid','#bar',{view:false,edit:false,add:false,del:false,search:false})			 
	.jqGrid('filterToolbar',{searchOnEnter:false}) //включаем фильтр на все колонки
	.jqGrid('gridResize',{})
	.jqGrid('navButtonAdd',"#bar",
		{
			caption:"Просмотр",title:"Просмотреть выбранную партию"
	 		,buttonicon:"ui-icon-document"
	 		,onClickButton: function(){
				var id=$("#grid").jqGrid('getGridParam','selrow');
				if (!id) {
					$.jgrid.info_dialog("Внимание!","Пожалуйста, выберите партию");
					return;
				}
				var data=$("#grid").jqGrid('getRowData',id); //берем из таблицы
				var ext=getExt(id);
				var add=eval("("+ext+")");
				$.extend(data,add);
				for (var i in data)
				{
					if (i==='sales') continue;
					$("#"+i).val(data[i]);
				}

				var table=CreateTable(data["payments"],"");
				var SalesTable=CreateTable(data["sales"],"csp.Sale.cls");
				var LoadsTable=CreateTable(data["loads"],"csp.Load.cls");

				$("#payments").html(table.join(""));
				$("#sales").html(SalesTable.join(""));
				$("#loads").html(LoadsTable.join(""));
				$("#group").dialog("open");
	 		}
		}
    )
	;


	$("#group").dialog(
		{
			title:"Партия",
			modal:true,
			autoOpen:false,
			minWidth:900,
			buttons:
			{
				"Закрыть":function()
				{
					$(this).dialog("close");
				}
			}
		}
		);

	
});

function CreateTable(payments,PrintPage)
{
	var table=new Array();
	table.push("<table><tr><th>№<th>Дата</th><th>Сумма</th></tr>");
	for (var i in payments){
		var payment=payments[i]; 
		if ((PrintPage!="") && (payment["pn"]!=""))
		{
			var trString = "<tr onmouseover='this.style.background=\"#ceeeee\"' onmouseout='this.style.background=\"#ffffff\"' onclick=\"window.open('"+PrintPage+"?id="+payment["pn"]+"')\">";
		}
		else
		{
			var trString = "<tr>"
		}
		
		table.push(trString);
		table.push("<td>"+payment["pn"]+"</td>");
		table.push("<td>"+payment["pd"]+"</td>");
		table.push("<td>"+payment["ps"]+"</td>");
		table.push("</tr>");

	}
	table.push("</table>");
	
	return table;
}