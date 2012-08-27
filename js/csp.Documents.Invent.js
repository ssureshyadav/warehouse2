// добавляем тип документа
window.toggleDocs["Docs.Invent"]= function(){ //переключить грид с заголовками документами
 var json="json.Docs.Invent.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	
	,colModel: [
		{name: "nm", label: "Номер"}
		, {name: "adrnm", label: "Блокировка адреса"}
		, {name: "cldt", label: "Дата закрытия"}
		, {name: "cltm", label: "Время закрытия"}
		, {name: "clusnm", label: "Человек закрывший"}
		, {name: "cm", label: "Комментарий"}
		, {name: "dt", label: "Дата создания"}
		, {name: "flnm", label: "Блокировка адреса"}
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


