var InnerSplitter="~";
var d1=new Date();
function load(){ // ������� ���������� ������������� ������������� ���������
	var kontrArray=kontr.split("~"), instrtypeArray=instrtype.split("~");
	if((kontrArray[0]!="all")&(kontrArray[0]!="")){
		SetSelectData("ChooseKontragent",kontr);
	}
	if((instrtypeArray[0]!="all")&(instrtypeArray[0]!="")){
		SetSelectData("ChooseInstrType",instrtype);
	}
	var d2=new Date();
};

// ������ ��������� ���������� �����������
function prnt(idclass){
	var docid=idclass.split("@")[0], docclass=idclass.split("@")[1]
	window.open("print.csp?id="+docid+"&class="+docclass+"&sessionid="+sessionid)
};
 
//�������� ��������� ����������
function chstat(docid,innerdoc){
 	var newstat=window.showModalDialog("instrstates.csp","","center:yes;status:no;dialogHeight:300px;dialogWidth:300px;resizable:yes;")
	if(newstat!=null){
		 var ok=server.changeState(docid,newstat);
		 if(ok.split("@")[0]!=1){
			 alert(ok)
		 } else {
			 document.getElementById("Instr"+docid+"Stat").innerText=ok.split("@")[1];
		 }
		 //location.href="emplight.csp?instr="+docid+"&newstat="+newstat;
	 }
 }
 
 //������� ���������� ����������
function lookinnerinstr(idclass){
	var docclass=idclass.split("@")[1]
	var docid=idclass.split("@")[0]
	var ok=window.showModalDialog("InnerInstructNew.csp?DocId="+docid+"&ClassName="+docclass+"&sessionid="+sessionid,"","center:yes;status:no;dialogHeight:600px;dialogWidth:600px;resizable:yes;");
	server.killTempAddress();
}

// ������� ���������� ����������
function create(cl,docid){
	//������� �������� �������� ����������� �� �������
	var ok=server.createChildDoc(docid,cl)
	if(!isNaN(ok)){
		window.location.reload();
	} else{
		alert(ok)
	}
}

// ������� ��������� ��������� ���������
function post(docid){
	var ok=window.showModalDialog("DictItem.csp?skip=InstDate,Name,Comment,Depot1,State,Oper,Operation,innerinstr,dostavka,imp,showcolor,Kontr,Dat,Tim,User1,Summa,Stat,Source,CloseDate,CloseTime,CloseUser&show=postnumber,postdata",docid+";Operation.Instructions","cener:yes;status:no;dialogHeight:350px;dialogWidth:400px;resizable:yes;")
}

// ���������� ���������� ����������
function savestore(InstrID,NameInner){
if(window.confirm("������� ������ ��������� "+NameInner+" � �������?")){
	ok=server.saveQuantFromInstr(InstrID);
	if(isNaN(ok)){
		alert(ok)
	} else {
		alert("������ �� �������� ������� ������� �������� � ����.");
	}
}
}

function ShowKontr(KontrID){
	ok=window.showModalDialog("kontragent.csp?KontrId="+KontrID,"","center:yes;status:no;dialogHeight:600px;dialogWidth:800px;resizable:yes;")
}

///���������� ��������� �������� � ������
function SetSelectData(selID,newData){
	var data=newData.split("~"), id=data[0], value=data[1];
	var sel=$g(selID), len=sel.options.length, find=null;
	for (var i=0;i<len;i++){
	 var opt=sel.options[i]; (opt.value!==id)?opt.removeAttribute("selected"):find=i
	}
	if (!find) { //���������� �����������?
		sel.options.length+=1; find=len; var opt=sel.options[len]; opt.value=id; opt.text=value;
	}
	if (find) sel.options[find].setAttribute("selected","selected");
}

// ������� �����������
function ChooseKontragentFunc(){
	var UsersSelection=ChooseKontragent.options(ChooseKontragent.selectedIndex).value;
	if(UsersSelection=="choose"){
		var newKontragent=window.showModalDialog("Dictionary.csp","Common.Kontragent","center:yes;status:no;dialogHeight:400px;dialogWidth:650px;resizable:yes;");
		if(newKontragent==null){
			ChooseKontragent.selectedIndex=0;
			return false;
		}
		SetSelectData("ChooseKontragent",newKontragent);
	}
	ReloadWithParams();
	

}

function ReloadWithParams(){
	var AdditionalParams="kontr="+ChooseKontragent.options(ChooseKontragent.selectedIndex).value+"~"+ChooseKontragent.options(ChooseKontragent.selectedIndex).text
	 					 +"&instrtype="+ChooseInstrType.options(ChooseInstrType.selectedIndex).value+"~"+ChooseInstrType.options(ChooseInstrType.selectedIndex).text
	window.location.href="?"+AdditionalParams;
}

function ChangeFn(DocId){
	if(DocId=="")return
	var answer=window.showModalDialog("ChangeGoods.csp?DocId="+DocId,"","center:yes;status:no;dialogHeight:550px;dialogWidth:800px;resizable:yes;");
}

///�������� �������� �� ����� ������
function position(obj){
	var top=0;
	for (var i=obj;i;i=i.offsetParent){
		top+=obj.offsetTop;
	}
	return {top:top};
}

$bind(window,"load",function(){
	load(); //�������� ������� ������������� ��������
	
	var fr=function(o){ //���� ������ Find Row
		var tr=null;
		for (;o.tagName!=="TABLE";o=o.parentElement){
			if (o.parentElement.tagName==="THEAD") break;
			if (o.tagName==="TR"){ tr=o; break; }
		}
		return tr;
	}
	
	var titles={
		stateDoc: '�������� ���������'
		,printDoc: '����������� ���������'
		,'new': "������� ���������� ����������"
		,edit: "������������� ���������� ����������"
		,print: "����������� ���������� ����������"
		,state: "���������� ��������"
		,out: "�������� ��� ���������"
		,post: "������� ��������� ��������� ���������"
	};
	
	var addTitle=function(obj,title){
		if (!obj) return; if (obj.title) return;
		var oclass=obj.className; if(!oclass) return;
		var title=titles[oclass];  obj.title=title; 	
	}
	
	$bind($g("TIB"),"mouseover",function(e){
		if (!e) e=window.event; var obj=e.srcElement;
		var tr=fr(obj); if (tr) { tr.className="hover"; }
		var tagName=obj.tagName; if (tagName==="BUTTON") { addTitle(obj); obj.style.border="1px solid #777"; }
		
		
	});
	
	$bind($g("TIB"),"mouseout",function(e){
		if (!e) e=window.event; var obj=e.srcElement;
		var tr=fr(obj); if (tr) tr.className="";
		var tagName=obj.tagName; if (tagName==="BUTTON") { obj.style.border=""; }
	});
	
	/// ������������� ����������� ��� ������ ��������
	$bind($g("TIB"),"click",function(e){
		if (!e) e=window.event; var obj=e.srcElement;
		
	});
	
	var boxResize=function(){
		var screenHeight=window.screen.availHeight; //��� ��������� ������
		var box=$g("TIBbox"), top=position(box).top; //�������� �� ����� ������
		var height=box.offsetHeight; //������ ������ ��������
		var free=screenHeight-(top+height); //�������� �� ����� ������
		box.style.height=(height+free)+"px"; //
	};
	boxResize();
	
	
	
});
