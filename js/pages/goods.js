function Init()
{
	LV.AllowColumnReorder=true;
	$("#tags").autocomplete({ 
		source: "JQGoods.csp?Command=Groups&Cat="+$("#Catalogues").val(),
		select: function( event, ui ) {GroupsTree.SelectedItem = ui.item.id; ShowTovars();}
	});
	LoadTree(); //инициализация дерева выбранного пункта каталога
	LoadList1();
	document.getElementById(GoodsListView).attachEvent("ItemClick",LVItemClick);
	GroupsTree.onClick="Click()";
	LV.attachEvent("DblClick",OpenCard);
	LV.attachEvent("ColumnClick",colclick);
	LV.attachEvent("KeyPress",KeyPress);
	LV.Sorted =false;
	
	$("BUTTON").button();
}


// Вывести остатки
function PrintStorageFn()
{
	var GroupCode=GroupsTree.NodeCode;
	if(GroupCode==""){alert("Выберете пожалуйста товарную группу");return;}
	var CatalogueID=Catalogues.value;
	var GroupName=GroupsTree.NodeCaption;
	window.open("screen/OstatkiExcel.csp?excel=1&GroupCode="+GroupCode+"&CatalogueID="+CatalogueID+"&GroupName="+GroupName)	
}

function KeyPress(Obj){
var KeyCode=Obj.toString();
if(KeyCode==17)editTovar2();
}

function fnMuiltipleEdit(){
var ok=window.showModalDialog("GoodsListEdit.csp?Where="+where,"","center:yes;status:no;dialogHeight:650px;dialogWidth:1000px;resizable:yes;")
if(ok!=null)ShowTovars();
}

function fnFindGood(){
var ok=window.showModalDialog("FindGood.csp","","center:yes;status:no;dialogHeight:650px;dialogWidth:800px;resizable:yes;")
}

// распечатать прайслист
function PrintPriceFunc(Suffix){
	var GroupCode=GroupsTree.NodeCode;
	if(GroupCode==""){alert("Выберете пожалуйста товарную группу");return;}
	var CatalogueID=Catalogues.value;
	var GroupName=GroupsTree.NodeCaption;
	var url = "pricelist"+Suffix+".csp?GroupCode="+GroupCode+"&CatalogueID="+CatalogueID+"&GroupName="+GroupName+"&sessionid="+sessionid;
	window.open(url);
}

// функция после полной загрузки дерева товарных групп
function GroupsTreeDnldCmpl()
{
	GroupsTree.SelectedItem=SelectedGroupCode;
}

//сохранить указанную цену товара
function SaveGoodsPrice()
{
	var goodsid=SelectedItemProperty(GoodsListView,"Tag");
	xmldoc=CreateXmlDoc();
	addnode(xmldoc,"Goods",goodsid+"@Goods.Goods");
	addnode(xmldoc,"Price",$("#GoodsPriceValue").val()+"@%Numeric");
	addnode(xmldoc,"typcen",$("#GoodsPriceType").val()+"@Common.Dictionary6");
	ok=SplitSendXml("","Store.Price",xmldoc,"",sessionid)
	if(isNaN(ok)){
		alert(ok);
		}
	else{
		alert("Новая цена успешно сохранена");
		$('#NewGoodsPriceDialog' ).hide();
	}
}

//открыть диалог ввода цены товара
function OpenGoodsPriceDialog()
{
	var goodsid=SelectedItemProperty(GoodsListView,"Tag");
	if(goodsid=="")return;

	//назначаем ENTER и ESС для этой формы
	//$(document).bind('keydown', 'enter',function (evt){SaveGoodsPrice(); return false; });
	//$(document).bind('keydown', 'esc',function (evt){CloseGoodsPriceDialog(); return false; });

	$("#NewGoodsPriceName").text(getselected(true).split(InnerSplitter)[11]);
	$("#GoodsPriceValue").val("");
	$("#GoodsPriceType").val(1);
	
	if ( $( '#NewGoodsPriceDialog' ).css('display')=='none' )
	{
		$( '#NewGoodsPriceDialog' ).show();
		$("#GoodsPriceValue").focus();
	}
	else
	{
		CloseGoodsPriceDialog();
	}
}

function CloseGoodsPriceDialog()
{
	$('#NewGoodsPriceDialog' ).hide();
	//$(document).unbind('keydown', function (evt){ alert('enter'); });
	//$(document).unbind('keydown', function (evt){ alert('esc'); });
}

//Открыть окно с ценами товара
function tovprice()
{
	var goodsid=SelectedItemProperty(GoodsListView,"Tag");
	if(goodsid=="")return
	window.showModalDialog("tovprice.csp?goodsid="+goodsid,"","center:yes;status:no;dialogHeight:520px;dialogWidth:700px;resizable:yes")
}