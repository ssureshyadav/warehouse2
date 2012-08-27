// добавляем тип документа
window.toggleDocs["Docs.Rash"]= function(){ //переключить грид с заголовками документами
 var json="json.Docs.Rash.cls"
 $(DOCGRID).jqGrid({
 	caption: ""
	,url: json, datatype: "json", jsonReader : { repeatitems: false }
	, colModel: [
		{name: "nm", label: "Номер"}
		, {name: "cldt", label: "Дата закрытия"}
		, {name: "cltm", label: "Время закрытия"}
		, {name: "clusnm", label: "Человек закрывший"}
		, {name: "cm", label: "Комментарий"}
		, {name: "dt", label: "Дата создания"}
		, {name: "ktnm", label: "Контрагент"}
		, {name: "cr", label: "Курс"}
		, {name: "oplnm", label: "Оплата"}
		, {name: "oplst", label: "Статус оплаты"}
		, {name: "oplsum", label: "Оплаченная сумма"}
		, {name: "plnm", label: "Платёжный документ"}
		, {name: "sumr", label: "Рублёвая сумма"}
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