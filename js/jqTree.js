///TreeView jquery plugin 
(function( $ ){ 
  ///options - (String || Object)  - �������� ������ ������� ��� ������ ���������� �������������
  $.fn.jqTree = function(data){
   
   var defaults={caption:'TreeCaption',width:250,height:350}; //���������
   
   var PLUGIN="jqTree" //�������� ����������
       ,BOX="tvBox" //����� ����������
       ,NODE="tvNode" //����� ���� ������ 
       ,ROOT="tvRoot" //����� �������
       ,LEAF="tvLeaf" //����� �����
       ,OPENED="tvOpened" //����� ��������� �����
       ,sOPENED="."+OPENED //�������� ���������
       ,LAST="tvLast" //����� ���������� ���� � �����
       ,EXPAND="tvExpand" //����� �������� ���������
       ,TEXT="tvText" //����� �������� � ������������� ����
       ,sTEXT="."+TEXT //�������� ��������� �����
       ,CLOSED="tvClosed" //����� �������� �����
       ,sCLOSED="."+CLOSED //�������� ������
       ,TOGGLE=CLOSED+" "+OPENED //������������ ������� �� ���������� � ��������

   function _wNodes(arr, nodes ){ //����� ������� ����� 
        if (!nodes) return; 
        arr.push("<ul class='",BOX,"'>"); 
        for (var i in nodes){
         var node=nodes[i];  _wNode(arr,node);  //����������� �����
        }
        arr.push("</ul>");
   };

   function _wNode( arr, node ){ //����� ������ ���� 
       arr.push("<li id='",node.id,"'");
       arr.push(" class='",NODE)
       if (node.root=="1") arr.push(" ",ROOT)
       if (node.leaf=="1") {
         arr.push(" ",LEAF);
       } else { 
         arr.push(" ",OPENED);
       }
       if (node.last=="1") arr.push(" ",LAST); 
       //��������� ���������������� ������ 
       if (node.classes && (node.classes!==""))arr.push(node.classes);
       arr.push("' >");
       arr.push("<div class='",EXPAND,"'></div>");
       arr.push("<div class='",TEXT,"'>",node.name,"</div>");
       _wNodes(arr,node.nodes);
       arr.push("</li>");
   };
   
   var _$content=null;


   
   var methods = { //Public ������ �������
    init: function(params) { //������������� ������

         //������� ���, �� ��� ������� ����������� id
     return this.each( function () { 
      var $this=$(this), flag=$this.data(PLUGIN); //��������� ���� �������������
      if (flag) return; //������� ��� ����������������� ��������
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
        var $btnToggle=$("<span class='ui-icon ui-icon-minus' title='��������/����������'></span>")
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

	.keyup(function(){ //��� ������� ������� ���-���� � ������, ��������� ���������� ����
        	 $input=$(this); var match=$input.val().toUpperCase();
	         $this.find(sTEXT).each(function(){
        	 	var $elem=$(this); 
			if ($elem.html().toUpperCase().indexOf(match)!=-1){ //���� �������� ��������� �����
		        	var $li=$elem.parent(); 
				//�������� ��� ������������ ���� 
				$li.parents(sCLOSED).removeClass(CLOSED).addClass(OPENED);
				$this.jqTree("select",$li);
				
				//var scroll=$this[0].scrollTop+$li.offset().top-$this.offset().top; 
                                //$this[0].scrollTop=scroll;
				$li[0].scrollIntoView();
				return false; //���������� �������� ��������� �����
			}
		});
	});
 
	$td=$td.next();
	var $zoom=$("<span class='ui-icon ui-icon-search' title='����� �� ������������'></span>")
	.appendTo($td)
	.hover(function(){
			$(this).toggleClass("ui-state-hover");
	});


      /*������ ������*/
      var arr=new Array(); 
      _wNodes(arr,defaults.nodes); //�������� html
      var $content=$("<div class='ui-widget-content' />").appendTo($this);
      $content.height(defaults.height).width(defaults.width).css("overflow","auto");	
      $content[0].innerHTML=arr.join(""); //�������� ������-������ � �������


      delete arr; //�������� ������
                
      $this.data(PLUGIN, {init: true,onClick: defaults.onClick}); //���������� ���� ������������� 
      
      
      $this.find( sTEXT ).hover( function () { $(this).toggleClass("ui-state-hover") } );
      
      $this.click(function( $e ) { ///���������� ������� 
         var $obj=$($e.target), $node=$obj.parent();
         if ( $obj.hasClass( EXPAND ) ) { //������ �� �������� ���������  
           if ( $node.hasClass ( LEAF ) ) return; // ���� �� ����� 
           $node.toggleClass(TOGGLE);
           return;
         }
         
	if ( $obj.hasClass(TEXT) ) {  //������ �� ������������ ����    
            $this.jqTree("select",$node);     
            return; 
         }
       }); //clickHandler

      }) //return
      
    


 
    }
    ,reload: function(nodes){
      var content=$(this).children(".ui-widget-content")[0];
      var arr=new Array(); 
      _wNodes(arr,nodes); //�������� html
      content.innerHTML=arr.join(""); //�������� ������-������ � �������
      delete arr; //�������� ������
    }
    ,select: function($node) {
       return this.each(function(){
       var $this=$(this);
       var data=$this.data(PLUGIN)||{};
       var $obj=$node.children(sTEXT); //������ ���� ����
       if (data.selected) { //������� ��������� �� ������� ����
        if (data.selected===$obj) return; //�������� �� ��� �� ����
        data.selected.toggleClass("ui-state-highlight");
       }
       $obj.toggleClass("ui-state-highlight"); //�������� ����� 
       data.selected=$obj; $this.data(PLUGIN,data); //� ���������� ��� 
       if (typeof data.onClick==="function") { 
          setTimeout(function(){
              data.onClick.apply($node); //���� ���� ���������� - �������� 
          },10);
       }
 
     });
    }
    ,expand: function() { //���������� ��� ���� 
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
   
   if ( methods[data] ) { // ����� ������
      return methods[ data ].apply( this, Array.prototype.slice.call( arguments, 1 ));
   } else if ( typeof data === 'object' || (!data) ) { ///��� ��������� �������� ������ �� ���������
      return methods.init.apply(this,Array.prototype.slice.call( arguments, 0 ));       
   } else {
      $.error( 'Method [' +  data + '] not exists in '+PLUGIN+' plugin'  );
   }    
   
  };
})( jQuery );