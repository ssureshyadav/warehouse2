// добавляем тип документа
window.toggleDocs["Docs.ActNote"]= function(){ //переключить грид с заголовками документами
 var json="json.Docs.ActNote.cls"

 $(DOCGRID).jqGrid({
 	   caption: "Служебные записки на погашение актов"
		 	,url: json, datatype: "json", jsonReader : { repeatitems: false }
		 	, colModel: [
				{name: "nm", label: "Номер"}
				, {name: "chnm", label: "Начальник"}
				, {name: "cldt", label: "Дата закр."}
				, {name: "cltm", label: "Время закр."}
				, {name: "clusnm", label: "Закрыл"}
				, {name: "cm", label: "Комментарий"}
				, {name: "dt", label: "Дата созд."}
				, {name: "ktnm", label: "Контрагент"}
				, {name: "mng", label: "Менеджер"}
				, {name: "pplnm", label: "Получатель платежа"}
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