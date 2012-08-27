// добавляем тип документа
window.toggleDocs["Operation.Instructions"]= function(){ //переключить грид с заголовками документами
 var json="json.Operation.Instructions.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	
	,colModel: [
	{name: "nm", label: "Краткое описание"}
	, {name: "cldt", label: "Дата закрытия"}
	, {name: "cltm", label: "Время закрытия"}
	, {name: "clusnm", label: "Человек закрывший"}
	, {name: "cm", label: "Комментарий"}
	, {name: "dpnm", label: "Склад"}
	, {name: "dsnm", label: "Способ доставки"}
	, {name: "hbs", label: "Инструкция отправлена"}
	, {name: "dt", label: "Дата"}
	, {name: "ktnm", label: "Контрагент"}
	, {name: "opnm", label: "Шаблон операции"}
	, {name: "rr", label: "Причина отклонения заявки"}
	, {name: "srcnm", label: "Родитель"}
	, {name: "st", label: "Состояние"}
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