// добавляем тип документа
window.toggleDocs["Docs.Platejka"]= function(){ //переключить грид с заголовками документами
 var json="json.Docs.Platejka.cls"
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
		, {name: "cr", label: "Курс"}
		, {name: "mmcsum", label: "Mastermax,вал."}
		, {name: "mmsum", label: "Mastermax,руб."}
		, {name: "pldt", label: "Дата пл. пор."}
		, {name: "plnm", label: "Получатель"}
		, {name: "sumr", label: "Сумма,руб."}
		, {name: "srcnm", label: "Родитель"}
		, {name: "st", label: "Статус"}
		, {name: "sum", label: "Сумма"}
		, {name: "tm", label: "Время"}
		, {name: "tcsum", label: "Tull,вал."}
		, {name: "tsum", label: "Tull,руб."}
		, {name: "tplnm", label: "Тип пл."}
		, {name: "usnm", label: "Оператор"}
		, {name: "vccsum", label: "Viconte,вал."}
		, {name: "vcsum", label: "Viconte, руб."}
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


