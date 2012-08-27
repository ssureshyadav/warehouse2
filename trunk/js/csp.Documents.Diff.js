// добавляем тип документа
window.toggleDocs["Docs.Diff"]= function(){ //переключить грид с заголовками документами
 var json="json.Docs.Diff.cls"
 $(DOCGRID).jqGrid({
 	   caption: "Передача брака на ремонт"
			 	,url: json, datatype: "json", jsonReader : { repeatitems: false }
				//"nm,cldt,cltm,clusnm,cm,dt,ktnm,srcnm,stat,sum,tm,usnm";
		 	,colModel: [
				{name: "nm", label: "Номер"}
				, {name: "cd", label: "Дата закр."}
				, {name: "ct", label: "Время закр."}
				, {name: "clusnm", label: "Закрыл"}
				, {name: "cm", label: "Коммент."}
				, {name: "dt", label: "Дата созд."}
				, {name: "ktnm", label: "Контрагент"}
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


