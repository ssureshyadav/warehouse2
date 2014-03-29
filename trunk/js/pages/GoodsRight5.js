var page=window.page || {}; //�� ������ ���� ��� ���������
page.kontr=null;


function obj2str(obj){ //�������������� js ������� � ������
  var arr=new Array();
  for (var i in obj){ arr.push(i+"="+obj[i]); }
  return arr.join("&");
 }; 
 
function catSelected(){
        var id=$("#catGrid").jqGrid("getGridParam","selrow");
                if (id) {
                        var data=$("#catGrid").jqGrid("getRowData",id);
                        var old=$("#catId").val();
                        if (id!=old){
                            $("#catId").val(id);
                            $("#cat").val(data.name).attr("title",data.name);
                            
                            //��������� ������ �����
                            var postData=$("#group").jqGrid("getGridParam","postData");
                            postData.cat=id; //������ �������
                            $("#group").jqGrid("setGridParam","postData",postData);
                            $("#group").trigger("reloadGrid"); //����������� ������ �����
                            
                            //���������� ��������� ������ ��� ������
                            postData=$("#good").jqGrid("getGridParam","postData");
                            postData.group=""; 
                            $("#good").jqGrid("setGridParam","postData",postData);
                            $("#good").trigger("reloadGrid"); //����������� ������ �����
                            $("#catDlg").dialog("close");
                            
                        }
                }
    }

function kontrSelected(){
                var id=$("#kontrGrid").jqGrid("getGridParam","selrow");
                var page=window.page || {}; page.kontr=id; //�������� � js ��������� �����������, ��� � �������� 
                if (id) {
                        var data=$("#kontrGrid").jqGrid("getRowData",id);
                        var old=$("#kontrId").val();
                        if (id!=old){
                            
                            $("#kontrId").val(id);
                            $("#kontr").val(data.name).attr("title",data.name);
                            var goodGrid=$("#good");
                            var goodPostData=goodGrid.jqGrid("getGridParam","postData");
                            goodPostData.kontr=id;
                            goodGrid.jqGrid("setGridParam","postData",goodPostData)
                            .trigger("reloadGrid");
                        }
                }
                $("#kontrDlg").dialog("close");
}

$(function(){ //����� ������ ����� �������� ��������
 
 $("#btnBack").button({icons:{primary:'ui-icon-circle-arrow-w'}})
              .click(function(){
                 window.location='goods.csp'; 
              });
              
 $("#catDlg").dialog({  //������ ������ ��������
     title:"����� ��������"
     ,autoOpen: false
     ,modal: true
     ,height:460
     ,width:430
     ,position:[227,35]
     ,buttons: {
            "�������":function(){
                catSelected();
            }
            ,"������":function(){$(this).dialog("close");} 
        }
        ,hide: "slide" //������� �������� �������
        ,show: "slide" //������� �������� �������
     
    });
 
 $("#catGrid").jqGrid({ //������� � �����������
     url: 'json.Catalogue.cls'
     ,colModel: [
                    {name:'id', width:50,hidden:true}
      ,{name:'name',label:'������������', width:350,sortable:false}
  ]
  ,idPrefix:"cat"
  ,jsonReader : { repeatitems: false }
  ,datatype:function(/*������ � ����������� �������*/ p){
       $("#catGrid")[0].addJSONData(CatOpts);
     }
     ,pager:"#catBar"
  ,viewrecords:true
  ,height:300
  ,hidegrid: false
  ,gridview:true ,rownumbers:true,viewrecords:true,rowNum:100
  ,pager:"#catBar" ,/*scrollrows:true,*/hoverrows:true ,scroll:1
  ,ondblClickRow: catSelected
    }).jqGrid('navGrid',"#catBar", 
       {add:false,edit:false,del:false,view:false,search:false}
       ,{} //��������� ��������������
       ,{} //��������� ����������
       ,{}
 );
 $("#catBar_center").remove();
 
 $("#catSel").click(function(){
        $("#catDlg").dialog("open"); 
    });
 
 
 $("#group").jqGrid({
  
  caption: "������ ������� �������� "
  ,colModel: [
      {name:'n',label:'������������', width:350,sortable:false}
      ,{name:'id',label:'id', width:40,sortable:false,hidden:true,search:false}
      ,{name:'c', width:80,sortable:false,hidden:true,search:false}
  ]
  ,idPrefix:"gg"
  ,url: jsonGoodsGroup2cls
  ,datatype: "json"
  ,postData: {depot: depot,cat: cat}
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
    expanded_field: "expanded" //�� ��������, ����� ��������� ������!!!
  }
  ,onSelectRow: function(id){ 
    var postData=$("#good").jqGrid("getGridParam","postData");
    $.extend(postData,{group:id});
    $("#good").jqGrid("setGridParam","postData",postData);
    //������������� ������ � ������ ���������� �����������
    if ($("#kontr").val()) {
        $("#good").trigger("reloadGrid");
    } else {
        $("#kontrDlg").dialog("open");  
      }
    
  }
 
  ,pager:"#groupBar"
  ,viewrecords:true
  ,height:400
  ,hidegrid: false
 }).jqGrid('navGrid',"#groupBar", 
       {add:false,edit:false,del:false,view:false,search:false}
       ,{} //��������� ��������������
       ,{} //��������� ����������
       ,{}
 ).jqGrid('gridResize',{minWidth:100,minHeight:100})
  .jqGrid('filterToolbar',{searchOnEnter:false})
  .jqGrid('navButtonAdd',"#groupBar",{
    caption:""
    ,buttonicon: "ui-icon-circlesmall-plus"
    ,title: "���������� ��� ����"
    ,onClickButton : function (){
              var record=$( "#group" ).jqGrid('getRowData')[0];
          var expand = function(record){
               record._id_ = record.id; //hard hack 
                var children=$( "#group" ).jqGrid("getNodeChildren",record);
            if (!children.length) return;
            for (var child in children){
                    expand(children[child]);
               };
                $( "#group" ).jqGrid('expandRow',record);
            $( "#group" ).jqGrid('expandNode', record);
           };
           expand(record);
    }
  })
  .jqGrid('navButtonAdd',"#groupBar",{
    caption:""
    ,buttonicon: "ui-icon-circlesmall-minus"
    ,title: "�������� ��� ����"
    ,onClickButton : function (){
        var record=$( "#group" ).jqGrid('getRowData')[0];
          var collapse = function(record){
               record._id_ = record.id; //hard hack 
                var children=$( "#group" ).jqGrid("getNodeChildren",record);
                if (!children.length) return;
            for (var child in children){
                    collapse(children[child]);
               };
               
                $( "#group" ).jqGrid('collapseRow',record);
            $( "#group" ).jqGrid('collapseNode', record);
           };
           collapse(record);
 
    }
  })
  /*.jqGrid('navButtonAdd',"#groupBar",{
    caption:""
    ,title: "��������� ����������� ��������"
    ,onClickButton : function (){
        jQuery("#group").jqGrid('columnChooser');
    }
})*/;
$("#groupBar_center").remove(); //��������� ������ ���������� ������� (������� ������ ����������� �����)


$("#gs_n").unbind() //������ ��� ����������� ������� �� ������������ �������
/*.keyup(function(e){ //����������� ����
        
        setTimeout(function(){$("#debug").html($("#gs_n").val())},100);
})*/; 

//���������� 
//����� ������
$("#kontrDlg").dialog({
    
    title:"����� �����������"
     ,autoOpen: false
     ,modal: true
     ,height:480
     ,width:630
     ,position:[200,35]
     ,open: function(){
         $("#kontrGrid").trigger("reloadGrid"); //������ ���������
        }
     ,buttons: {
            "�������": kontrSelected
            ,"������":function(){$(this).dialog("close");} 
        }
        ,hide: "slide" //������� �������� �������
        ,show: "slide" //������� �������� �������
});

$("#kontrSel").click(function(){ //����� �������
    
    $("#kontrDlg").dialog("open");
    
});

//������� � �������������

$("#kontrGrid").jqGrid({
    colModel: [
        {name:"id",hidden: true}
        ,{name:"name",label:"������������",width:250}
        ,{name:"nick",label:"���������",width:200}
        ,{name:"city",label:"�����",width:100}
    ]
    ,url: "json.Kontragent.cls"
    ,datatype: "json"
    ,jsonReader : { repeatitems: false }
    ,pager: "#kontrBar" 
    ,idPrefix:"kt"
 ,viewrecords:true
 ,height:300
 ,hidegrid: false
 ,gridview:true ,rownumbers:true,viewrecords:true,rowNum:100
 ,pager:"#kontrBar" ,/*scrollrows:true,*/hoverrows:true ,scroll:1
 ,ondblClickRow: kontrSelected
 })
 .jqGrid('navGrid',"#kontrBar", 
       {add:false,edit:false,del:false,view:false,search:false}
       ,{} //��������� ��������������
       ,{} //��������� ����������
       ,{}
 )
 .jqGrid('filterToolbar',{searchOnEnter:false})
 .jqGrid('gridResize',{})
 ;
 $("#kontrBar_center").remove(); //���������� �� �����
 $("#kontrBar_right").css("width","70%"); //������� � ���������� ������� �� ������� ����� ������




//������� � ��������
$("#good").jqGrid({
    caption: "������ ������"
    ,colModel: [
        {name:"id",hidden:true}
        ,{name:"name",label:"������������", width:350}
        ,{name:"kban",label:"������",width:60
          ,align: "left" 
                ,formatter: 'checkbox', formatoptions: {disabled:false}
                ,search:false
            }
    ]
    ,url: "json.GoodsRights.cls"
    ,datatype: "json"
    ,jsonReader : { repeatitems: false }
    ,postData:{group:'',kontr:''}
    ,idPrefix:"g"
    ,pager:"#goodBar"
    ,height:400
 ,hidegrid: false
 ,rownumbers:true,viewrecords:true,rowNum:100
 ,scroll:1 /*,scrollrows:true,hoverrows:true,gridview:true */ 
 
 /// ��� ���������� �������� �����, ���������� �������������� �������
 ,gridComplete: function(){ 
     $("#good").trigger("goodGridComplete",{})
 }
 /// ����� ������ �������� ������
 ,loadComplete: function(){
     $("#good").trigger("goodLoadComplete",{})
 }
 ,afterInsertRow: function(rowid,rowdata,rowelem){
        var gg=rowid;
        //������������� � �������� checkbox
        $("#"+rowid,"#good").find("input[type='checkbox']").change(function(e){
            var unban=0;
            if ($(this).val()==1){
                $(this).val(0).removeAttr("checked");
                unban=1
            } else {
                $(this).val(1).attr("checked","checked");
            }
            var kontr=$("#kontrId").val();
            var result=false;
            $.ajax({url: 'json.GoodsRights.cls'
                    ,async: false
                    ,data: { oper: 'ban'
                        ,gg: gg
                        ,kontr: kontr
                        ,unban: unban
                    }
                    ,success: function(res){
                        result=res;
                    }
            });
            
            return result;
            
        });
    }
}).jqGrid('navGrid',"#goodBar", 
       {add:false,edit:false,del:false,view:false,search:false}
       ,{} //��������� ��������������
       ,{} //��������� ����������
       ,{}
 ).jqGrid('gridResize',{minWidth:100,minHeight:100})
  .jqGrid('filterToolbar',{searchOnEnter:false})
  ;
$("#goodBar_center").remove();

/// ������� ���������� �� ������� �������� �����
$("#good").one("goodGridComplete", function(){
    
    var $gridBox = $(this).parents(".ui-jqgrid") //������ ������� ���������
    var $columnHeader=$gridBox.find(".ui-jqgrid-labels"); //� ��� ������ � ����������� �������
    var $filter=$gridBox.find(".ui-search-toolbar"); // ������ � ���������� �������
    //��������� ������ ������� � ������� ������
    var $td=null;
    for (var $th=$columnHeader.find("#good_kban");$th.get(0);$th=$th.prev()){   
       $td=($td)?$td.next():$filter.children(":first");
    }
    $("<input id='checkAll' type='checkbox' />")
        .appendTo($td.children(":first"))
        .attr("title","��������/����� ������� �� ���� ������������ ������� ������")
})
 //�� ������ ����� ������ ������ - ���������� ��������� "�������� ��"
.bind("goodLoadComplete", function(){ 
    $("#checkAll").removeAttr("checked");
});   

/// ��� ������ �������� "�������� ��", ���������� � �� ��������
$("#checkAll").live("change", function(){ 
    /// ��������� �������� "��"
    var check=$(this).prop("checked")
    var $cbxs=$("#good").find("input:checkbox")
    /// ������ ��������������� ����� (� ������� ��������)
    var ids=[]; $cbxs.each(function(){ ids.push($(this).parents("tr").attr("id"))})
    var ban=(check)?1:0;
    /// � ����������� ������� �� ���� �������� ������������ ������, ����� ��� ����� ������������ ��������
    var page = window.page || {};
    var url=(page.goodjson)? page.goodjson : ""; 
    var kontr=(page.kontr)? page.kontr : "";
    alert(url + "\n"
		+ ids + "\n"
		+ kontr "\n"
		+ ban);
		
	$.ajax({url: url, data: {oper:"banlist",ids: ids+'',kontr: kontr, ban: ban}
       ,async: false, dataType: 'text'
    }).done(function(sdata){
        if (sdata!="true"){
            alert("�� ��� �������� ���� �����������");
        }
    });
    
    /// ������ ���������
    $cbxs.prop("checked",check);
    
});




 });