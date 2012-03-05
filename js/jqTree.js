///TreeView jquery plugin 
(function( $ ){ 
  ///options - (String || Object)  - название метода плагина или объект параметров инициализации
  $.fn.jqTree = function(data){
   
   var defaults={caption:'TreeCaption',width:250,height:350}; //Настройки
   
   var PLUGIN="jqTree" //Название контейнера
       ,BOX="tvBox" //Класс контейнера
       ,NODE="tvNode" //Класс узла дерева 
       ,ROOT="tvRoot" //Класс вершины
       ,LEAF="tvLeaf" //Класс листа
       ,OPENED="tvOpened" //класс раскрытой ветви
       ,sOPENED="."+OPENED //селектор раскрытых
       ,LAST="tvLast" //класс последнего узла в ветви
       ,EXPAND="tvExpand" //класс элемента раскрытия
       ,TEXT="tvText" //класс элемента с наименованием узла
       ,sTEXT="."+TEXT //селектор текстовых узлов
       ,CLOSED="tvClosed" //класс закрытой ветви
       ,sCLOSED="."+CLOSED //селектор закрых
       ,TOGGLE=CLOSED+" "+OPENED //переключение классов из раскрытого в закрытый

   function _wNodes(arr, nodes ){ //Вывод массива узлов 
        if (!nodes) return; 
        arr.push("<ul class='",BOX,"'>"); 
        for (var i in nodes){
         var node=nodes[i];  _wNode(arr,node);  //рекурсивный вызов
        }
        arr.push("</ul>");
   };

   function _wNode( arr, node ){ //Вывод одного узла 
       arr.push("<li id='",node.id,"'");
       arr.push(" class='",NODE)
       if (node.root=="1") arr.push(" ",ROOT)
       if (node.leaf=="1") {
         arr.push(" ",LEAF);
       } else { 
         arr.push(" ",OPENED);
       }
       if (node.last=="1") arr.push(" ",LAST); 
       //добавляем пользовательские классы 
       if (node.classes && (node.classes!==""))arr.push(node.classes);
       arr.push("' >");
       arr.push("<div class='",EXPAND,"'></div>");
       arr.push("<div class='",TEXT,"'>",node.name,"</div>");
       _wNodes(arr,node.nodes);
       arr.push("</li>");
   };
   
   var _$content=null;


   
   var methods = { //Public методы плагина
    init: function(params) { //Инициализация дерева

         //вернуть все, но для каждого переданного id
     return this.each( function () { 
      var $this=$(this), flag=$this.data(PLUGIN); //проверяем флаг инициализации
      if (flag) return; //элемент уже инициализировался плагином
      $this.width(defaults.width);
      if ( params ) { $.extend( defaults, params ); }
      $this.addClass("ui-widget");  
      var caption=$("<div>"+params.caption+"</div>")
	.addClass("ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix")
	.appendTo($this);

      var $bar=$("<div>Bar</div>")
	.addClass("ui-state-default")
	.appendTo($this);
	$bar[0].innerHTML="<table><tr><td></td><td></td><td></td></tr></table>";

	var $td=$bar.find("td:first");	
        var $btnToggle=$("<span class='ui-icon ui-icon-minus' title='Свернуть/Развернуть'></span>")
	 .appendTo($td)
	 .hover(function(){
		$(this).toggleClass("ui-state-hover");
	 })
	.click(function(){
          $(this).toggleClass("ui-icon-minus ui-icon-plus");
	  var data=$this.data(PLUGIN)||{}; 
	  data.expand=(!data.expand); 
	  (data.expand)?$this.jqTree("collapse"):$this.jqTree("expand");
          $this.data(PLUGIN,data);
        });
        
	$td=$td.next();
	var $search=$("<input type='text' class='search' />")
	.appendTo($td)

	.keyup(function(){ //при попытке набрать что-нить в поиске, подбираем подходящий узел
        	 $input=$(this); var match=$input.val().toUpperCase();
	         $this.find(sTEXT).each(function(){
        	 	var $elem=$(this); 
			if ($elem.html().toUpperCase().indexOf(match)!=-1){ //узел содержит поисковое слово
		        	var $li=$elem.parent(); 
				//раскрыть все родительские узлы 
				$li.parents(sCLOSED).removeClass(CLOSED).addClass(OPENED);
				$this.jqTree("select",$li);
				
				//var scroll=$this[0].scrollTop+$li.offset().top-$this.offset().top; 
                                //$this[0].scrollTop=scroll;
				$li[0].scrollIntoView();
				return false; //прекращаем просмотр остальных узлов
			}
		});
	});
 
	$td=$td.next();
	var $zoom=$("<span class='ui-icon ui-icon-search' title='Поиск по наименованию'></span>")
	.appendTo($td)
	.hover(function(){
			$(this).toggleClass("ui-state-hover");
	});


      /*СТРОИМ ДЕРЕВО*/
      var arr=new Array(); 
      _wNodes(arr,defaults.nodes); //собираем html
      var $content=$("<div class='ui-widget-content' />").appendTo($this);
      $content.height(defaults.height).width(defaults.width).css("overflow","auto");	
      $content[0].innerHTML=arr.join(""); //закинули дерево-список в элемент


      delete arr; //сбросили строку
                
      $this.data(PLUGIN, {init: true,onClick: defaults.onClick}); //выставляем флаг инициализации 
      
      
      $this.find( sTEXT ).hover( function () { $(this).toggleClass("ui-state-hover") } );
      
      $this.click(function( $e ) { ///Обработчик нажатия 
         var $obj=$($e.target), $node=$obj.parent();
         if ( $obj.hasClass( EXPAND ) ) { //щелчок на элементе раскрытия  
           if ( $node.hasClass ( LEAF ) ) return; // клик на листе 
           $node.toggleClass(TOGGLE);
           return;
         }
         
	if ( $obj.hasClass(TEXT) ) {  //щелчок на наименовании узла    
            $this.jqTree("select",$node);     
            return; 
         }
       }); //clickHandler

      }) //return
      
    


 
    }
    ,reload: function(nodes){
      var content=$(this).children(".ui-widget-content")[0];
      var arr=new Array(); 
      _wNodes(arr,nodes); //собираем html
      content.innerHTML=arr.join(""); //закинули дерево-список в элемент
      delete arr; //сбросили строку
    }
    ,select: function($node) {
       return this.each(function(){
       var $this=$(this);
       var data=$this.data(PLUGIN)||{};
       var $obj=$node.children(sTEXT); //должен быть один
       if (data.selected) { //снимаем выделение со старого узла
        if (data.selected===$obj) return; //щелкнули на тот же узел
        data.selected.toggleClass("ui-state-highlight");
       }
       $obj.toggleClass("ui-state-highlight"); //выделяем новый 
       data.selected=$obj; $this.data(PLUGIN,data); //и запоминаем его 
       if (typeof data.onClick==="function") { 
          setTimeout(function(){
              data.onClick.apply($node); //если есть обработчик - вызываем 
          },10);
       }
 
     });
    }
    ,expand: function() { //развернуть все узлы 
      return this.each(function(){
        var $this=$(this); $this.find(sCLOSED).removeClass(CLOSED).addClass(OPENED);
      });
    }
    ,collapse: function() {
      return this.each(function(){
        var $this=$(this); $this.find(sOPENED).removeClass(OPENED).addClass(CLOSED);
      });
    }
   };
   
   if ( methods[data] ) { // Вызов метода
      return methods[ data ].apply( this, Array.prototype.slice.call( arguments, 1 ));
   } else if ( typeof data === 'object' || (!data) ) { ///Все аргументы передаем методу по умолчанию
      return methods.init.apply(this,Array.prototype.slice.call( arguments, 0 ));       
   } else {
      $.error( 'Method [' +  data + '] not exists in '+PLUGIN+' plugin'  );
   }    
   
  };
})( jQuery );