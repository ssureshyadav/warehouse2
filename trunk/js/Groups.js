
;$(function(){
	var _first=true; //��������� ���������� ��� ����������� beforeRequest
	var $grid=jQuery("#grid").jqGrid( 
		{ url:'json.Groups.cls',mtype: "POST", datatype: "json", jsonReader: {repeatitems:false}
			 , colModel:[ 
			 	{name:'id', label:'� ������', width:60}
			 	, {name:'ftn', label:'����� ���',width:120}  //FuelType->Name
			 	, {name:'tanks', label:'� �����������',width:120}  //FuelType->Name
			 	, {name:'dd', label:"���� �����������",width:120,search:false} //DeliveryDate
				, {name:'rc', label:'����� ������� (�)', width:130,search:false} //RealCapacity
				, {name:'sc', label:'����� ������ (�)', width:130,search:false} //SalesCapacity
				, {name:'ost', label:'������� ������ (�)', width:130,search:false} //SalesCapacity
			 	, {name:'pf',label:'��������� ������', width:140,search:false} //PriceFact
			 	, {name:'lpf', label:'��������� �����', width:100,search:false} //LiterPriceFact
				, {name:'Ste', label:'������', width:100,stype: 'select'
					,searchoptions:{value:"0:��������;%:���"}
				}
			 ]
			 /// ���������� ����� �������� 
			 , loadBeforeSend: function(xhr,settings){
				/// ������ ��� ����� ������ ������ ������� ������ �� �������� ��������
				/// � � ��������� ������� ���������� �� ����������
				if (!_first) return; //������ ������ �����
				_first=false; //��������� ���� 
				///�������� ����� ������ (��� ������ ������� �� ��������)
				settings.data=settings.data.replace("_search=false","_search=true");
				///� ��������� ������ ��������� ����� �� �������� ��������
				///������ ����� ������ ���� Ste
				settings.data+="&Ste=0";
			 }
			 , pager: '#bar'
			 , rowNum:50, rownumbers: true
			 , viewrecords: true
			 , caption: "������: "  
			 , height:500
			 , mtype:"POST"
			, gridview:true, scroll:1
			, sortable: true //��������� ���������� �������
			, hidegrid: false //��������� �����������
			, viewrecords:true, hoverrows:true 
	})
	.jqGrid('navGrid','#bar',{view:false,edit:false,add:false,del:false,search:false})			 
	.jqGrid('filterToolbar',{searchOnEnter:false}) //�������� ������ �� ��� �������
	.jqGrid('gridResize',{})
	.jqGrid('navButtonAdd',"#bar",
		{
			caption:"��������",title:"����������� ��������� ������"
	 		,buttonicon:"ui-icon-document"
	 		,onClickButton: function(){
				var id=$("#grid").jqGrid('getGridParam','selrow');
				if (!id) {
					$.jgrid.info_dialog("��������!","����������, �������� ������");
					return;
				}
				var data=$("#grid").jqGrid('getRowData',id); //����� �� �������
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
			title:"������",
			modal:true,
			autoOpen:false,
			minWidth:900,
			buttons:
			{
				"�������":function()
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
	table.push("<table><tr><th>�<th>����</th><th>�����</th></tr>");
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