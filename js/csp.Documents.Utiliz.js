// добавляем тип документа
window.toggleDocs["Docs.Utiliz"]= function(){ //переключить грид с заголовками документами
 var json="json.Docs.Utiliz.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	, colModel: [
		{name: "nm", label: "Номер"}
		, {name: "cldt", label: "Дата закр."}
		, {name: "cltm", label: "Время закр."}
		, {name: "clusnm", label: "Закрыл"}
		, {name: "cm", label: "Комментарий"}
		, {name: "dt", label: "Дата созд."}
		, {name: "kms", label: "Комиссия"}
		, {name: "ktnm", label: "Контрагент"}
		, {name: "srcnm", label: "Родитель"}
		, {name: "srct", label: "Утилиз. из"}
		, {name: "st", label: "Статус"}
		, {name: "sum", label: "Сумма"}
		, {name: "tm", label: "Время"}
		, {name: "usnm", label: "Оператор"}
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