// ��������� ��� ���������
window.toggleDocs["Docs.Platejka"]= function(){ //����������� ���� � ����������� �����������
 var json="json.Docs.Platejka.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	,colModel: [
		{name: "nm", label: "�����"}
		, {name: "cldt", label: "���� ����."}
		, {name: "cltm", label: "����� ����."}
		, {name: "clusnm", label: "������"}
		, {name: "cm", label: "����."}
		, {name: "dt", label: "������"}
		, {name: "ktnm", label: "����������"}
		, {name: "cr", label: "����"}
		, {name: "mmcsum", label: "Mastermax,���."}
		, {name: "mmsum", label: "Mastermax,���."}
		, {name: "pldt", label: "���� ��. ���."}
		, {name: "plnm", label: "����������"}
		, {name: "sumr", label: "�����,���."}
		, {name: "srcnm", label: "��������"}
		, {name: "st", label: "������"}
		, {name: "sum", label: "�����"}
		, {name: "tm", label: "�����"}
		, {name: "tcsum", label: "Tull,���."}
		, {name: "tsum", label: "Tull,���."}
		, {name: "tplnm", label: "��� ��."}
		, {name: "usnm", label: "��������"}
		, {name: "vccsum", label: "Viconte,���."}
		, {name: "vcsum", label: "Viconte, ���."}
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


