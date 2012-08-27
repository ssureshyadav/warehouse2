// добавляем тип документа
window.toggleDocs["Docs.Prih"]= function(){ //переключить грид с заголовками документами
 var json="json.Docs.Prih.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	
	,colModel: [
	{name: "nm", label: "Номер"}
	, {name: "cldt", label: "Дата закр."}
	, {name: "cltm", label: "Время закр."}
	, {name: "clusnm", label: "Закрыл"}
	, {name: "cm", label: "Комм."}
	, {name: "dt", label: "Создан"}
	, {name: "ktnm", label: "Контрагент"}
	, {name: "srcnm", label: "Родитель"}
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


