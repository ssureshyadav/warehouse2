// ��������� ��� ���������
window.toggleDocs["Docs.Otchet"]= function(){ //����������� ���� � ����������� �����������
 var json="json.Docs.Otchet.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	
	,colModel: [
		{name: "nms", label: "���. ����."}
		, {name: "nm", label: "���."}
		, {name: "dt", label: "����"}
		, {name: "sum", label: "�����"}
		, {name: "st", label: "������"}
		, {name: "erd", label: "�����"}
		, {name: "gpp", label: "����."}
		, {name: "cldt", label: "���� ����."}
		, {name: "cltm", label: "����� ����."}
		, {name: "clusnm", label: "������"}
		, {name: "cm", label: "����."}
		, {name: "dtpp", label: "���� ����."}
		, {name: "err", label: "������"}
		, {name: "ktnm", label: "����������"}
		, {name: "cr", label: "����"}
		, {name: "rnm", label: "������"}
		, {name: "srcnm", label: "��������"}
		, {name: "sumc", label: "����� ���."}
		, {name: "tm", label: "�����"}
		, {name: "usnm", label: "��������"}
		, {name: "usnmpp", label: "�������� ����."}
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


