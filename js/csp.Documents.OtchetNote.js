// добавляем тип документа
window.toggleDocs["Docs.OtchetNote"]= function(){ //переключить грид с заголовками документами
 var json="json.Docs.OtchetNote.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	,colModel: [
		{name: "nm", label: "Номер"}
		, {name: "cldt", label: "Дата закрытия"}
		, {name: "cltm", label: "Время закрытия"}
		, {name: "clusnm", label: "Человек закрывший"}
		, {name: "cm", label: "Комментарий"}
		, {name: "dt", label: "Дата создания"}
		, {name: "ktnm", label: "Контрагент"}
		, {name: "mng", label: "Менеджер"}
		, {name: "otnm", label: "Отчёт"}
		, {name: "ocnm", label: "Наше юр лицо"}
		, {name: "srcnm", label: "Родитель"}
		, {name: "st", label: "Статус"}
		, {name: "sum", label: "Сумма"}
		, {name: "tm", label: "Время"}
		, {name: "usnm", label: "Оператор"}]	
		
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


