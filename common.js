//разделитель строк
var StringSplitter="#@#";
//разделитель элементов внутри строки
var InnerSplitter="~";

function demo(){alert("Режим демонстрации.\nФункция не работает.р");}

//Добавляет элементы <OPTION> к элементу <SELECT> 
function addOptions(textStr,element,ShowTroma){
var strings = textStr.split(StringSplitter);
	for (i = 0; i < strings.length-1; i++){
		string = strings[i].split(InnerSplitter);
		oOption = document.createElement("OPTION");
		oOption.text=string[1];
		oOption.value=string[0];
		if(ShowTroma==string[0])oOption.selected=true;
		document.getElementById(element).add(oOption);
	}
}

//Добавляет узлы к дереву TreeView
//Если 4 и 5 элементы = "" то иконок у дерева не будет
//А если вообще они не указаны то иконки будут стандартные
function AddTreeView(textString,element){
document.getElementById(element).Nodes.Clear();
if (textString=="") return false;
var strings = textString.split(StringSplitter);
	for (i = 0; i < strings.length-1; i++){
	string = strings[i].split(InnerSplitter);
	NodeParent=string[0];
	key=string[1];
	NodeText=string[2];
	NodeTag=string[3];
	NodeImage=string[4];
	selimage=string[5];
	if (NodeImage==null){NodeImage="close";}
	if (selimage==null){selimage="open";}
	 document.getElementById(element).Nodes.Add();
	 node=document.getElementById(element).Nodes.Count;
	 if(NodeParent!=""){
			try{
	 		document.getElementById(element).Nodes.Item(node).Parent=document.getElementById(element).Nodes.Item(NodeParent);
	 		}
	 		catch(e){}
	 	}
	 document.getElementById(element).Nodes.Item(node).Key=key;
	 document.getElementById(element).Nodes.Item(node).Tag=NodeTag;
	 document.getElementById(element).Nodes.Item(node).Text=NodeText;
	 if(document.getElementById(element).ImageList!=null){
	   if((NodeImage!="")&(selimage!="")){
	     document.getElementById(element).Nodes.Item(node).Image=NodeImage;
	     document.getElementById(element).Nodes.Item(node).SelectedImage=selimage;
	     }
	   }
	 
	 }
}

//Заполняет заголовки столбцов ListView
//Key~Название~тип поля#@#Key~Название~тип поля
function LVAddColumns(textString,element){
document.getElementById(element).ColumnHeaders.Clear();
if (textString=="") return false;
var strings = textString.split(StringSplitter);
	for (i = 0; i < strings.length-1; i++){
	string = strings[i].split(InnerSplitter);
	//var t4=;
	//alert(t4);
	//Type2[fieldname]=string[4].split("@")[1];
	//Type[i]=string[4].split("@")[1];
	o1=document.getElementById(element).ColumnHeaders.Add()
	count=document.getElementById(element).ColumnHeaders.Count
	document.getElementById(element).ColumnHeaders.Item(count).Text=string[1];
	document.getElementById(element).ColumnHeaders.Item(count).Key=string[0];
	document.getElementById(element).ColumnHeaders.Item(count).Tag=string[4];
	}
}

//Вернуть Свойство выделенной строки элемента
function SelectedItemProperty(element,Property){
var item=document.getElementById(element).SelectedItem;
if(item==null){return "";}
return eval("document.getElementById(element).SelectedItem."+Property);
}

//Управление окном - по клавише ESC закрыть окно
//по клавише ENTER передать управление функции startFun()
function ManageWindow(element){
Replace126(element);
if(window.event.keyCode==13)startFun();
if(window.event.keyCode==27){
		windowclose();
	}
}

function Replace126(element){
if(window.event.keyCode==126)window.event.keyCode=45;
}

//Добавляет строки ListView
//кодСтроки~Первая колонка~...Колонки#@#кодСтроки~Первая колонка~...Колонки#@#
function ListViewAddItems(element,textString){
if (textString=="") return false;
document.getElementById(element).ListItems.Clear();
var strings = textString.split(StringSplitter);
	for (i = 0; i < strings.length-1; i++){
	string = strings[i].split(InnerSplitter);
	document.getElementById(element).ListItems.Add();
	count=document.getElementById(element).ListItems.Count;
	document.getElementById(element).ListItems.Item(count).Tag=string[0];
	document.getElementById(element).ListItems.Item(count).Text=string[1];
	//
	if (string.length>1){
	  for (z = 2; z < string.length; z++){
	   document.getElementById(element).ListItems.Item(count).ListSubItems.Add();
	   document.getElementById(element).ListItems.Item(count).ListSubItems.Item(z-1).Text=string[z];
	   }
	  }
	}
}


//Создаёт элементы скрытые элемены Select
//display список элементов option
//value соответстующий им список значений элементов option
//ElemId id элемента Select
//ElemOnchange функция вызываемая при наступлении onchange
function CreateSelect(displayz,valuez,ElemId,ElemOnchange){
if(ElemOnchange){ElemOnchange="onchange='"+ElemOnchange+"'"}
var aElement=document.createElement("<select style='display:none' id='"+ElemId+"' "+ElemOnchange+" onblur='this.style.display="+'"'+"none"+'"'+"'></select>");
disArr=displayz.split(",");
valArr=valuez.split(",");
aElement.options.length=valArr.length-1;
for (z = 0; z < disArr.length-1; z++){
  aElement.options(z).text=disArr[z+1];
  aElement.options(z).value=valArr[z+1];
  }
document.body.appendChild(aElement);
}

//Выводит коды Колонок в ListView в строке "InsBefore+код,InsBefore+код2,InsBefore+код3"
function ShowColHeads(element,InsBefore){
res=""
if(InsBefore==null){InsBefore=""}
count=document.getElementById(element).ColumnHeaders.Count;
for (z = 1; z < count+1; z++){
  str=document.getElementById(element).ColumnHeaders.Item(z).Key;
  PropType=document.getElementById(element).ColumnHeaders.Item(z).Tag;
  if(PropType.split("@")[1].substring(0,1)!="%")str=str+"->Name"  //т.е. если тип поля не начинается с % значит это поле объектная ссылка
  res=res+InsBefore+str+",";
}
res=res.substr(0,res.length-1);
return res;
}

function LoadPropTree2(element,Goods,Group,Catalogue){
str=".DownLoad('GoodsParams.csp?class=Goods.Params&fields=Parent,Code,Name,ID,Type&Goods="+Goods+"&Groups="+Group+"&Catalogue="+Catalogue+"')";
eval(element+str);
}

function ReturnSpace(Txt){
if(Txt==null)return "";
return Txt;
}

function CreateDiv(CellValue,cellID){
ElementStr="<div id="+cellID+" CONTENTEDITABLE='true'></div>";
aElement=document.createElement(ElementStr);
aElement.innerText=CellValue;
aElement.Tag="@%String"
return aElement;
}

function fnCalendar(cal){
newDate=window.showModalDialog("calendar1.htm","","center:yes;status:no;dialogHeight:350px;dialogWidth:310px;resizable:yes;");
if(ReturnSpace(newDate)!=""){cal.value=newDate;}
}

//функция сливает два xml объекта в один, и передаёт его странице xmlmethod
function SplitSendXml(DocID,ClassName,xmldoc,xmldoc2,sessionid,classmethod){
	var xmlDok = new ActiveXObject("Msxml2.DOMDocument.3.0");
	var RootElement = xmlDok.createElement("RootElement");
	xmlDok.documentElement=RootElement;
	var AllObjects = xmlDok.createElement("AllObjects");
	var AllHeaders = xmlDok.createElement("AllHeaders");
	oNodeList = xmldoc.selectNodes("//AllObjects/*");
	AllHeaders.appendChild(oNodeList.item(0));
	if(xmldoc2==null)return "Не заполнены строки документа";
	if(typeof(xmldoc2)!="string")
	{
		var oNodeList = xmldoc2.selectNodes("//AllObjects/*");
		for (var i=0; i<oNodeList.length; i++) 
		{
			AllObjects.appendChild(oNodeList.item(i))
		}
	}
	RootElement.appendChild(AllHeaders)
	RootElement.appendChild(AllObjects)
	var xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	if(ReturnSpace(classmethod)=="")var classmethod="Docs.Action.SaveStorageDoc";
	xmlhttp.open("POST","xmlmethod.csp?classmethod="+classmethod+"&id="+DocID+"&documentclass="+ClassName+"&sessionid="+sessionid, false);
	xmlhttp.send(xmlDok)
	ok=xmlhttp.responseText;
	return ok
}

function addnode(xmldoc,nodename,nodeval){
var oneobj=xmldoc.selectSingleNode("//OneObject");
var newnod = xmldoc.createElement(nodename);
var newAtt = xmldoc.createElement("type");
newAtt.text=nodeval.split("@")[1];
var newAtt2 = xmldoc.createElement("text");
newAtt2.text=nodeval.split("@")[0];
newnod.appendChild(newAtt);
newnod.appendChild(newAtt2);
oneobj.appendChild(newnod)
return xmldoc;
}


function SendXml(DocID,ClassName,xmldoc,sessionid,classmethod){
if(classmethod==null)var classmethod="Docs.Action.SaveStorageDoc";
var xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
xmlhttp.open("POST","xmlmethod.csp?classmethod="+classmethod+"&id="+DocID+"&documentclass="+ClassName+"&sessionid="+sessionid, false);
xmlhttp.send(xmldoc)
ok=xmlhttp.responseText;
return ok
}

function ConvertDateSql(dat){
var dateArr=dat.split("/");
return dateArr[2]+"-"+dateArr[1]+"-"+dateArr[0]
}

function showtovar(tovid){
window.showModalDialog("showgoodsimages.csp?GoodsId="+tovid,"","center:yes;status:no;dialogHeight:600px;dialogWidth:600px;resizable:yes;")
}

function prntdoc(){
window.print();
}

//функция выдает строчку по которой метод (Common.Common).showdata(...) отберет товарные группы либо для конкретного склада, либо все
function strForGroups(depot,commongroups){
if (commongroups==1){var str='Data.csp?class=Goods.Catalogue&fields=ID,Name';}
if (commongroups==0){var str='Data.csp?class=Goods.Catalogue&fields=ID,Name&where=Depot='+depot;}
return str;
}

// Ставит куку
function SetCookie(sName, sValue)
{
  document.cookie = sName + "=" + sValue + "; expires=Fri, 31 Dec 2020 23:59:59 GMT;";
 }

// Возвращает куку 
 function GetCookie(sName){
var re=/\S*[^ ]/i;
//что бы убрать пробелы в начале и конце имени переменной в куке, приходится глумиться с регулярными выражениями!!! козлы!!!!
 var values=document.cookie.split(";");
 for(var i=0;i<values.length;i++) {
var name=values[i].split("=")[0].match(re);
	if(name==sName){
		return values[i].split("=")[1];
		}
 }
 }
 
 function ReturnBoolean(Str){
 if(Str=="false")return false;
 if(Str=="true")return true;
 if(Str==0)return false;
 if(Str==1)return true;
 return "";
 }
 
 function windowclose(){
 if(window.confirm("Вы уверены?"))window.close();
 }
 
 //Подкрасить фон объекта
 function Paint(Obj){
 Obj.style.backgroundColor="#eeffff";
 }
 
 //Снять подкраску фона объекта
 function UnPaint(Obj){
 Obj.style.backgroundColor='transparent';
 }
 
 // Добавит в элемент AllHeaders поле ElementName
 //<xml>
 //<RootElement>
 //	<AllHeaders>
 //		<OneObject>
 //			<ElementName>
//				<text>Text</text>
//				<type>Type</type>
//			</ElementName>
//		</OneObject>
//	</AllHeaders>
function InsertXmlHeader(xmlDoc,ElementName,ElementText,ElementType){
var RootNode=xmlDoc.selectSingleNode("RootElement");
var AllHeaders=xmlDoc.selectSingleNode("//AllHeaders");
var AllHeadersCreated = false;
if(AllHeaders==null)
	{
		var AllHeadersCreated = true;
		var AllHeaders = xmlDoc.createElement("AllHeaders");
	}
var OneObject = xmlDoc.createElement("OneObject");
var FieldElement = xmlDoc.createElement(ElementName);
var Fieldtext = xmlDoc.createElement("text");
Fieldtext.text=ElementText;
FieldElement.appendChild(Fieldtext);
var Fieldtype = xmlDoc.createElement("type");
Fieldtype.text=ElementType;
FieldElement.appendChild(Fieldtype);
OneObject.appendChild(FieldElement);
AllHeaders.appendChild(OneObject);
if(AllHeadersCreated)RootNode.appendChild(AllHeaders);
}

//функция выбора контрагента (подставит выбранного в innerText переданного объекта
function ChooseKonragent(Obj)
{
	newItem=window.showModalDialog("Dictionary.csp","Common.Kontragent","center:yes;status:no;dialogHeight:400px;dialogWidth:650px;resizable:yes;");
	if(newItem==null){return false;}
	var newArr=newItem.split(InnerSplitter);
	Obj.innerText=newArr[1];
	Obj.Tag=newArr[0];
	return newArr;
}

function CreateXmlDoc()
{
	var xmlDoc = new ActiveXObject("Msxml2.DOMDocument.3.0");
	var RootElement = xmlDoc.createElement("RootElement");
	xmlDoc.documentElement=RootElement;
	var AllObjects = xmlDoc.createElement("AllObjects");
	var OneObject = xmlDoc.createElement("OneObject");
	AllObjects.appendChild(OneObject);
	RootElement.appendChild(AllObjects);
	return xmlDoc;
}