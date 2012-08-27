		window.DOCGRID="#docg", window.DOCBAR="#docb";
		window.toggleDocs={}; //переключатель документов
		// добавляем тип документа
		window.toggleDocs["Docs.Act"]= function(){ //переключить грид с заголовками документами
			 	 var json="json.Docs.Act.cls"
			 	 $(DOCGRID).jqGrid({
				 	   caption: "Акты технического осмотра"
							 	,url: json, datatype: "json", jsonReader : { repeatitems: false }
							 	, colModel: [
							 		//ns,nm,sn,paid,cm,grn,dt,cst,dfd,kn,nmh,pdt,rqnt,sl,srcnm,srvfio,srvnm,usnm
											{name: "ns", label: "Номер сорт."}
											, {name: "nm", label: "Номер"}
											, {name: "sn", label: "Серийн."}
											, {name: "paid", label: "Погашен"}
											, {name: "cm", label: "Комментарий"}
											, {name: "grn", label: "Гарант. #."}
											, {name: "dt", label: "Дата"}
											, {name: "cst", label: "Потребитель"}
											, {name: "dfd", label: "Неисправность"}
											, {name: "kn", label: "Контрагент"}
											, {name: "nmh", label: "История изм. ном."}
											, {name: "pdt", label: "Дата погаш."}
											, {name: "rqnt", label: "Кол.-во рем.-тов"}
											, {name: "sl", label: "Продавец"}
											, {name: "srcnm", label: "Родитель"}
											, {name: "srvfio", label: "Дир.-р серв.центра"}
											, {name: "srvnm", label: "Cерв. центр"}
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
		}; //Docs.Act
