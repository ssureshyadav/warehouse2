
function copyclip(){
if(ReturnSpace(sessionid)==""){alert("Ќа этой странице url="+window.location.href+" не определена переменна€ сессии. Ёкспорт в Excel невозможен");}
var xmlDoc = new ActiveXObject("Msxml2.DOMDocument.3.0");
var RootElement = xmlDoc.createElement("RootElement");
xmlDoc.documentElement=RootElement;
var AllHeaders = xmlDoc.createElement("AllHeaders");
for (var y = 1; y <= ListViewID.ColumnHeaders.Count; y++){
	var OneObject = xmlDoc.createElement("OneObject");
	//newAtt = xmlDoc.createAttribute("id");
	//namedNodeMap = OneObject.attributes;
   	//newAtt.text=y;
   	//namedNodeMap.setNamedItem(newAtt);
	var k=ListViewID.ColumnHeaders.Item(y).Key;
	re = /->/g;
    var k = k.replace(re, "--");
	var txt=ListViewID.ColumnHeaders.Item(y).Text;
	var Field = xmlDoc.createElement(k);
	var Fieldtext = xmlDoc.createElement("text");
	Fieldtext.text=txt;
	var Fieldnum = xmlDoc.createElement("number");
	Fieldnum.text=y;
	Field.appendChild(Fieldnum);
	Field.appendChild(Fieldtext);
	OneObject.appendChild(Field);
	AllHeaders.appendChild(OneObject);
}
var AllObjects = xmlDoc.createElement("AllObjects");
for (var y = 1; y <= ListViewID.ListItems.Count; y++){
	var OneObject = xmlDoc.createElement("OneObject");
	var k=ListViewID.ColumnHeaders.Item(1).Key;
	re = /->/g;
    var k = k.replace(re, "--");
	var Field = xmlDoc.createElement(k);
	var Fieldtext = xmlDoc.createElement("text");
	var txt=ListViewID.ListItems.Item(y).Text;
	Fieldtext.text=txt;
	Field.appendChild(Fieldtext);
	OneObject.appendChild(Field);
	var subitems=ListViewID.ListItems.Item(y).ListSubItems.Count
	var subitems=ListViewID.ColumnHeaders.Count
	if (subitems>0){
	  for (var z = 1; z < subitems; z++){
	  
	    var k=ListViewID.ColumnHeaders.Item(z+1).Key;
	    var k = k.replace(re, "--");
	  	try {
		 	var Field = xmlDoc.createElement(k);
		  	var Fieldtext = xmlDoc.createElement("text");
			Fieldtext.text=ListViewID.ListItems.Item(y).ListSubItems.Item(z).Text;
		}
		catch (e) {}
		Field.appendChild(Fieldtext);
		OneObject.appendChild(Field);
	   }
	  }
	AllObjects.appendChild(OneObject);
}
RootElement.appendChild(AllObjects);
RootElement.appendChild(AllHeaders);
var xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
xmlhttp.open("POST","excel.csp?act=put&sessionid="+sessionid,false);
xmlhttp.send(xmlDoc)
//alert(xmlDoc.xml)
var f = new Date();
window.open("excel.csp?act=get&sessionid="+sessionid)
}

function fullleft(){
if(currentpage<=1)return false;
currentpage=1;
strrr.innerText=currentpage;
showbuttons();
SecondRequest();
}

function moveleft(){
if(currentpage<=1)return false;
currentpage=currentpage-1;
strrr.innerText=currentpage;
showbuttons();
SecondRequest();
}

function moveright(){
if(currentpage>=allpages)return false;
currentpage=currentpage+1;
strrr.innerText=currentpage;
showbuttons();
SecondRequest();
}

function fullright(){
if(currentpage>=allpages)return false;
currentpage=allpages;
strrr.innerText=currentpage;
showbuttons();
SecondRequest();
}

function SecondRequest(){
if(loadedfrom=="Download"){DownLoad(whereZZ,kolbasaddrZZ,hiddenZZ,orderZZ);}
if(loadedfrom=="loadfrommethod"){loadfrommethod(classmethodZZ,param1ZZ,param2ZZ,param3ZZ);}
}

function showbuttons(){
if(currentpage>1){leftbut.disabled=false;fullleftbut.disabled=false;}
else{leftbut.disabled=true;fullleftbut.disabled=true;}
if(currentpage<allpages){rightbut.disabled=false;fullrightbut.disabled=false;}
else{rightbut.disabled=true;fullrightbut.disabled=true;}
}

function ReturnSpace(Txt){
if(Txt==null)return "";
return Txt;
}

// функци€ устанавливает значение строки в колоке fld
function setCellValue(StringId,fld,value){
//если не указан ID строки то правим текущую строку
if(ReturnSpace(StringId)==""){
	if(ListViewID.SelectedItem==null)return ""  //если ничего не выбрано, то выходим
	var currentSTR=ListViewID.SelectedItem;
	}
else{
	try{var currentSTR=ListViewID.ListItems.Item("KEY~"+StringId)
		var StringFound=true;}
	catch(e){
		var StringFound=false;}
	if(!StringFound)return
	}
var pos=ListViewID.ColumnHeaders.Item(fld).Index  //позици€ колонки
if(pos>1){currentSTR.ListSubItems.Item(pos-1).Text=value}
else{currentSTR.Text=value}
}

function ChangeCell(ColumnTag,NewText){
var Index=ListViewID.ColumnHeaders.Item(ColumnTag).Index
ListViewID.SelectedItem.ListSubItems.Item(Index-1).Text=NewText
}

//«агрузить товары в соответствии с выбранными параметрами
function LoadGoods(FromTable,FromTree,Number){
fields=GetColumns();
ListViewID.startDownload("SelectGoods.csp?class=Goods.GoodsGroup&fields="+fields+"&FromTable="+FromTable+"&FromTree="+FromTree+"&Number="+Number, ListViewAddItems);
}

//”далить выбранные элементы
function DelItems(){
count=ListViewID.ListItems.Count;
KillString="";
for (z = 1; z < count+1; z++){
	if(ListViewID.ListItems.Item(z).Selected){
		key=ListViewID.ListItems.Item(z).Key;
		KillString=KillString+key+InnerSplitter;
		}
}
KillStringArray=KillString.split(InnerSplitter);
 for (z = 0; z < KillStringArray.length-1; z++){
	key=KillStringArray[z];
	ListViewID.ListItems.Remove(key);
 }
}


//¬ернуть все строки в ListView
function GetAllItems(condition){
count=ListViewID.ListItems.Count;
if(count==0)return "";
res=""
for (z = 1; z <= count; z++){
	if((ListViewID.ListItems.Item(z).selected)||(condition!="selected")){
	res=res+ListViewID.ListItems.Item(z).Tag+InnerSplitter;
	}
}
return res.substr(0,res.length-1);
}

//¬ернуть все строки в ListView
function GetAllItemsArray(nam){
count=ListViewID.ListItems.Count;
if(count==0)return "";
var res = new Array();
for (z = 1; z <= count; z++){
	i=z-1;
	if(nam=="Name"){res[i]=ListViewID.ListItems.Item(z);}
	else{res[i]=ListViewID.ListItems.Item(z).Tag;}
}
return res;
}