// ��������� ��� ���������
window.toggleDocs["Operation.Plan"]= function(){ //����������� ���� � ����������� �����������
 var json="json.Operation.Plan.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	
	,colModel: [
		{name: "nm", label: "�����"}
		, {name: "cldt", label: "���� ����."}
		, {name: "cltm", label: "����� ����."}
		, {name: "clusnm", label: "������"}
		, {name: "dt", label: "���� ����."}
		, {name: "lng", label: "����"}
		, {name: "ktnm", label: "����������"}
		, {name: "pldt", label: "������"}
		, {name: "pldt2", label: "�����"}
		, {name: "srcnm", label: "��������"}
		, {name: "st", label: "������"}
		, {name: "sum", label: "�����"}
		, {name: "tm", label: "�����"}
		, {name: "usnm", label: "��������"}
	]
	
  	, pager: DOCBAR
  	, viewrecords:true
  	, height:300, width:900
  	, hidegrid: false
	, gridview:true ,rownumbers:true,viewrecords:true,rowNum:100
	, hoverrows:true ,scroll:1 		 	 
 	}).jqGrid('navGrid',DOCBAR, 
       {add:false,edit:false,del:false,view:false,search:false}
	)
};