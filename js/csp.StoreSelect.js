/*Клиенсткая логика страницы csp.StoreSelect */
page.init=function(){
	page.axtv=axtv($g("tv"),$g("tvil")); ///инициализация
	page.axtv.load("",DepotData,false); /// начальная загрузка
	page.axtv.onChange(page.TreeSelectChange);  ///при смене выделения в дереве
	
	$bind($g("depotSelect"),"change",function(e){ //смена склада
	    depot=$g("depotSelect").value; ///устанавливаем глобальную переменную
	    page.scDepotChange(depot);
	});
	
	$bind($g("btnSelect"),"click",function(){ //выбор ячейки
		var data=page.axtv.getData();
		returnValue=data[0]+InnerSplitter+data[1];
		alert(returnValue);
		//window.close();
	}); //кнопка выбора
	
	$bind($g("btnCancel"),"click",function(){window.close()}); //отказ от выбора 
	
	$bind(document.body,"keydown", function(e){
		var key=e.keyCode; 
		if (key===13) {$g("btnSelect").click(); return;}
		if (key===27) {$g("btnCancel").click(); return;}
	}); //управление клавишами
	
	
	$bind($g("addrBar"),"click",function(e){var id=e.srcElement.id;	setTimeout(function(){page.axtv.select(id);},10);});
	
	$bind($g("MoveField"),"click",function(e){
		var id=null;
		for (var obj=e.srcElement;obj;obj=obj.parentElement){
			if (obj.id==="MoveField") break;
			if (obj.className.indexOf('block')==0){
				id=obj.id; break;
			}
		}
		if (!id) return;
		page.axtv.select(id);
		page.setAddressBar(id);
	});
	$bind($g("tvToggle"),"click",function(e){
			var expand=e.srcElement.checked; 
			page.axtv.expand(!expand);
	});
	
}

/*Функция показа дочерних мест выбранной ветки */
/*вызывается с сервера */
page.ShowChilds=function(html){
	$g("MoveField").innerHTML=html;
}

///Обработчик выбора узла дерева
page.TreeSelectChange=function(nodeId){ //выделили узел, основная задача выделить код объекта и выполнить действие
    if (page.toChange){
		clearTimeout(page.toChange);    
	}
	page.toChange=setTimeout(function(){page.scShowChilds(nodeId)},300);
    page.setAddressBar();
}

//Формирование адресной строки
page.setAddressBar=function(id){
	//разрешаем или запрещаем выбор
	var btn=$g("btnSelect"); var leaf=page.axtv.isLeaf(id);
	(leaf)?btn.removeAttribute("disabled"):btn.setAttribute("disabled","disabled");
	
	var path=page.axtv.getPath(id); var html=new Array();
	for (var i in path) {
		var obj=path[i]; html.push("<a id='"+obj.id+"'>"+obj.name+"</a>");		
	}
	$g("addrBar").innerHTML=html.reverse().join("&gt;");
}
///Асинхронная загрузка склада
page.depotChange=function(arr){
	DepotData=arr;
	page.axtv.load("",DepotData,false);
	page.TreeSelectChange("");
}

$bind(window,"load",page.init); //запуск логики страницы

