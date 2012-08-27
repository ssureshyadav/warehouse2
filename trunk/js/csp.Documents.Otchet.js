// добавляем тип документа
window.toggleDocs["Docs.Otchet"]= function(){ //переключить грид с заголовками документами
 var json="json.Docs.Otchet.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	
	,colModel: [
		{name: "nms", label: "Ном. сорт."}
		, {name: "nm", label: "Ном."}
		, {name: "dt", label: "Дата"}
		, {name: "sum", label: "Сумма"}
		, {name: "st", label: "Статус"}
		, {name: "erd", label: "Ответ"}
		, {name: "gpp", label: "Пров."}
		, {name: "cldt", label: "Дата закр."}
		, {name: "cltm", label: "Время закр."}
		, {name: "clusnm", label: "Закрыл"}
		, {name: "cm", label: "Комм."}
		, {name: "dtpp", label: "Дата пров."}
		, {name: "err", label: "Ошибки"}
		, {name: "ktnm", label: "Контрагент"}
		, {name: "cr", label: "Курс"}
		, {name: "rnm", label: "Заявка"}
		, {name: "srcnm", label: "Родитель"}
		, {name: "sumc", label: "Сумма вал."}
		, {name: "tm", label: "Время"}
		, {name: "usnm", label: "Оператор"}
		, {name: "usnmpp", label: "Оператор пров."}
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


