		window.DOCGRID="#docg", window.DOCBAR="#docb";
		window.toggleDocs={}; //������������� ����������
		// ��������� ��� ���������
		window.toggleDocs["Docs.Act"]= function(){ //����������� ���� � ����������� �����������
			 	 var json="json.Docs.Act.cls"
			 	 $(DOCGRID).jqGrid({
				 	   caption: "���� ������������ �������"
							 	,url: json, datatype: "json", jsonReader : { repeatitems: false }
							 	, colModel: [
							 		//ns,nm,sn,paid,cm,grn,dt,cst,dfd,kn,nmh,pdt,rqnt,sl,srcnm,srvfio,srvnm,usnm
											{name: "ns", label: "����� ����."}
											, {name: "nm", label: "�����"}
											, {name: "sn", label: "������."}
											, {name: "paid", label: "�������"}
											, {name: "cm", label: "�����������"}
											, {name: "grn", label: "������. #."}
											, {name: "dt", label: "����"}
											, {name: "cst", label: "�����������"}
											, {name: "dfd", label: "�������������"}
											, {name: "kn", label: "����������"}
											, {name: "nmh", label: "������� ���. ���."}
											, {name: "pdt", label: "���� �����."}
											, {name: "rqnt", label: "���.-�� ���.-���"}
											, {name: "sl", label: "��������"}
											, {name: "srcnm", label: "��������"}
											, {name: "srvfio", label: "���.-� ����.������"}
											, {name: "srvnm", label: "C���. �����"}
											, {name: "usnm", label: "��������"}
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
