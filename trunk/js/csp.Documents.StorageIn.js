// ��������� ��� ���������
window.toggleDocs["Docs.StorageIn"]= function(){ //����������� ���� � ����������� �����������
 var json="json.Docs.StorageIn.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	
	, colModel: [
		{name: "nm", label: "�����"}
		, {name: "cldt", label: "���� ��������"}
		, {name: "cltm", label: "����� ��������"}
		, {name: "clusnm", label: "������� ���������"}
		, {name: "cm", label: "�����������"}
		, {name: "dt", label: "���� ��������"}
		, {name: "ktnm", label: "����������"}
		, {name: "prtp", label: "��� �����"}
		, {name: "srcnm", label: "��������"}
		, {name: "st", label: "������"}
		, {name: "stmnm", label: "�������"}
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