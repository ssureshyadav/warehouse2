
var InnerSplitter="~";
var sessionid="#(%session.SessionId)#";
var kontr='#($G(kontr))#';
var instrtype='#($G(instrtype))#';
var d1=new Date();

// функция вызываемся автоматически послезагрузки документа
function load(){
var kontrArray=kontr.split("~");
var instrtypeArray=instrtype.split("~");
if((kontrArray[0]!="all")&(kontrArray[0]!="")){SetSelectData("ChooseKontragent",kontr)}
if((instrtypeArray[0]!="all")&(instrtypeArray[0]!="")){SetSelectData("ChooseInstrType",instrtype)}
var d2=new Date();

}

// печать документа созданного инструкцией
function prnt(idclass){
var docid=idclass.split("@")[0]
var docclass=idclass.split("@")[1]
window.open("print.csp?id="+docid+"&class="+docclass+"&sessionid="+sessionid)
 }
 
//изменить состояние инструкции
function chstat(docid,innerdoc){
 var newstat=window.showModalDialog("instrstates.csp","","center:yes;status:no;dialogHeight:300px;dialogWidth:300px;resizable:yes;")
 if(newstat!=null){
	 var ok=#server(Operation.InstrActions.changestat(docid,newstat))#
	 if(ok.split("@")[0]!=1){alert(ok)}
	 else{
		 document.getElementById("Instr"+docid+"Stat").innerText=ok.split("@")[1];
		 }
	 //location.href="emplight.csp?instr="+docid+"&newstat="+newstat;
	 }
 }
 
 //открыть внутреннюю инструкцию
function lookinnerinstr(idclass){
var docclass=idclass.split("@")[1]
var docid=idclass.split("@")[0]
var ok=window.showModalDialog("InnerInstructNew.csp?DocId="+docid+"&ClassName="+docclass+"&sessionid="+sessionid,"","center:yes;status:no;dialogHeight:600px;dialogWidth:600px;resizable:yes;");
#server(Store.Action.KillTempAddress())#
}

// создать внутреннюю инструкцию
function create(cl,docid){
	//создать дочерний документ основываясь на текущем
	var ok=#server(Docs.Action.CreateChildDoc(docid,cl))#
	if(!isNaN(ok)){window.location.reload();}
	else{alert(ok)}
}

// указать реквизиты почтового документа
function post(docid){
var ok=window.showModalDialog("DictItem.csp?skip=InstDate,Name,Comment,Depot1,State,Oper,Operation,innerinstr,dostavka,imp,showcolor,Kontr,Dat,Tim,User1,Summa,Stat,Source,CloseDate,CloseTime,CloseUser&show=postnumber,postdata",docid+";Operation.Instructions","cener:yes;status:no;dialogHeight:350px;dialogWidth:400px;resizable:yes;")
}

// обработать внутреннюю инструкцию
function savestore(InstrID,NameInner){
if(window.confirm("Занести данные документа "+NameInner+" в остатки?")){
ok=#server(Store.Action.SaveQuantFromInstr(InstrID))#
if(isNaN(ok)){alert(ok)}
else{alert("Запись об остатках товаров успешно занесена в базу.");}
}
}

function ShowKontr(KontrID){
	ok=window.showModalDialog("kontragent.csp?KontrId="+KontrID,"","center:yes;status:no;dialogHeight:600px;dialogWidth:800px;resizable:yes;")
}

function SetSelectData(SelectObjID,newData){
	if($g(SelectObjID).options.length==2){
		$g(SelectObjID).options.length=3
	}
	$g(SelectObjID).options(2).value=newData.split("~")[0];
	$g(SelectObjID).options(2).text=newData.split("~")[1];
	$g(SelectObjID).selectedIndex=2;
}

// Выбрать контрагента
function ChooseKontragentFunc(){
var UsersSelection=ChooseKontragent.options(ChooseKontragent.selectedIndex).value;
if(UsersSelection=="choose"){
	var newKontragent=window.showModalDialog("Dictionary.csp","Common.Kontragent","center:yes;status:no;dialogHeight:400px;dialogWidth:650px;resizable:yes;");
	if(newKontragent==null){
		ChooseKontragent.selectedIndex=0;
		return false;}
	SetSelectData("ChooseKontragent",newKontragent);
	ReloadWithParams();
}
if(UsersSelection=="all"){
	ReloadWithParams();
}
}

function ReloadWithParams(){
	var AdditionalParams="";
	var AdditionalParams=AdditionalParams+"kontr="+ChooseKontragent.options(ChooseKontragent.selectedIndex).value+"~"+ChooseKontragent.options(ChooseKontragent.selectedIndex).text
	var AdditionalParams=AdditionalParams+"&instrtype="+ChooseInstrType.options(ChooseInstrType.selectedIndex).value+"~"+ChooseInstrType.options(ChooseInstrType.selectedIndex).text
	window.location.href="emplight.csp?"+AdditionalParams;
}

function ChangeFn(DocId){
if(DocId=="")return
var answer=window.showModalDialog("ChangeGoods.csp?DocId="+DocId,"","center:yes;status:no;dialogHeight:550px;dialogWidth:800px;resizable:yes;");
}




	$bind(window,"load",function(){
		var fr=function(o){ //ищем строку Find Row
			var tr=null;
			for (;o.tagName!=="TABLE";o=o.parentElement){
				if (o.parentElement.tagName==="THEAD") break;
				if (o.tagName==="TR"){ tr=o; break; }
			}
			return tr;
		}
		$bind($g("tblInstructions"),"mouseover",function(e){
			if (!e) e=window.event; var tr=fr(e.srcElement); if (tr) tr.className="hover";
		});
		$bind($g("tblInstructions"),"mouseout",function(e){
			if (!e) e=window.event; var tr=fr(e.srcElement); if (tr) tr.className="";
		});
	});
