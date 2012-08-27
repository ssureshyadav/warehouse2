// добавляем тип документа
window.toggleDocs["Docs.DocBrak"]= function(){ //переключить грид с заголовками документами
 var json="json.Docs.DocBrak.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	//nm,cldt,cltm,clusnm,cm,dt,de,dp,ktnm,srcnm,stat,sum,tm,usnm"
	,colModel: [
		{name: "nm", label: "Номер"}
		, {name: "cldt", label: "Дата закрытия"}
		, {name: "cltm", label: "Время закрытия"}
		, {name: "clusnm", label: "Человек закрывший"}
		, {name: "cm", label: "Комментарий"}
		, {name: "dt", label: "Дата создания"}
		, {name: "de", label: "Дата завершения"}
		, {name: "dp", label: "Дата приема"}
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


