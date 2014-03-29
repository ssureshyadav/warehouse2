/* jQuery plugin themeswitcher
---------------------------------------------------------------------*/
$.fn.themeswitcher = function(settings){
	var options = jQuery.extend({
		loadTheme: null,
		initialText: 'Switch Theme',
		width: 150,
		height: 200,
		buttonPreText: 'Theme: ',
		closeOnSelect: true,
		buttonHeight: 14,
		cookieName: 'jquery-ui-theme',
		onOpen: function(){},
		onClose: function(){},
		onSelect: function(){}
	}, settings);

	//markup 
	/*var bHtml=[
        '<a href="#" class="ui-widget ui-widget-content jquery-ui-themeswitcher-trigger">'
        ,'<span class="jquery-ui-themeswitcher-icon"></span>'
        ,'<span class="jquery-ui-themeswitcher-title">'
        , options.initialText
        , '</span></a>'
	];

	var button = $( bHtml.join('') ).addClass('ui-state-default');
        */


	var html=[
		'<div class="ui-widget ui-widget-content jquery-ui-themeswitcher"><div id="themeGallery"><ul>'
		,'<li><a id="ui-lightness" href="#ui-lightness"><img src="css/themeswitcher/ui_light.png" alt="UI Lightness" title="UI Lightness" /><span class="themeName">UI lightness</span></a></li>'
		,'<li><a id="ui-darkness" href="#ui-darkness"><img src="css/themeswitcher/ui_dark.png" alt="UI Darkness" title="UI Darkness" /><span class="themeName">UI darkness</span></a></li>'
		,'<li><a id="smoothness" href="#ui-smoothness"><img src="css/themeswitcher/smoothness.png" alt="Smoothness" title="Smoothness" /><span class="themeName">Smoothness</span></a></li>'
		,'<li><a id="start" href="#start"><img src="css/themeswitcher/start_menu.png" alt="Start" title="Start" /><span class="themeName">Start</span></a></li>'
		,'<li><a id="redmond" href="#redmond"><img src="css/themeswitcher/windoze.png" alt="Redmond" title="Redmond" />			<span class="themeName">Redmond</span>	</a></li>'
		,'<li><a id="sunny" href="#sunny"><img src="css/themeswitcher/sunny.png" alt="Sunny" title="Sunny" />			<span class="themeName">Sunny</span>		</a></li>'
		,'<li><a id="overcast" href="overcast"><img src="css/themeswitcher/overcast.png" alt="Overcast" title="Overcast" />			<span class="themeName">Overcast</span>				</a></li>'
		,'<li><a id="le-frog" href="#le-frog"><img src="css/themeswitcher/le_frog.png" alt="Le Frog" title="Le Frog" />			<span class="themeName">Le Frog</span>		</a></li>'
		,'<li><a id="flick" href="#flick"><img src="css/themeswitcher/flick.png" alt="Flick" title="Flick" />			<span class="themeName">Flick</span>				</a></li>'
		,'<li><a id="pepper-grinder" href="#pepper-grinder"><img src="css/themeswitcher/pepper_grinder.png" alt="Pepper Grinder" title="Pepper Grinder" />			<span class="themeName">Pepper Grinder</span>				</a></li>'
		,'<li><a id="eggplant" href="#eggplant"><img src="css/themeswitcher/eggplant.png" alt="Eggplant" title="Eggplant" />			<span class="themeName">Eggplant</span>				</a></li>'
		,'<li><a id="dark-hive" href="#dark-hive"><img src="css/themeswitcher/dark_hive.png" alt="Dark Hive" title="Dark Hive" />			<span class="themeName">Dark Hive</span>		</a></li>'
		,'<li><a id="cupertino" href="#cupertino"><img src="css/themeswitcher/cupertino.png" alt="Cupertino" title="Cupertino" />			<span class="themeName">Cupertino</span>				</a></li>'
		,'<li><a id="south-street" href="#south-street"><img src="css/themeswitcher/south_street.png" alt="South St" title="South St" />			<span class="themeName">South Street</span>				</a></li>'
		,'<li><a id="blitzer" href="#blitzer"><img src="css/themeswitcher/blitzer.png" alt="Blitzer" title="Blitzer" />			<span class="themeName">Blitzer</span>		</a></li>'
		,'<li><a id="humanity" href="#humanity"><img src="css/themeswitcher/humanity.png" alt="Humanity" title="Humanity" />			<span class="themeName">Humanity</span>		</a></li>'
		,'<li><a id="hot-sneaks" href="#hotsneaks"><img src="css/themeswitcher/hot_sneaks.png" alt="Hot Sneaks" title="Hot Sneaks" />			<span class="themeName">Hot sneaks</span>		</a></li>'
		,'<li><a id="excite-bike" href="excite-bike"><img src="css/themeswitcher/excite_bike.png" alt="Excite Bike" title="Excite Bike" />			<span class="themeName">Excite Bike</span></a></li>'
		,'<li><a id="vader" href="#vader"><img src="css/themeswitcher/black_matte.png" alt="Vader" title="Vader" />			<span class="themeName">Vader</span>			</a></li>'
		,'<li><a id="dot-luv" href="#dot-luv"><img src="css/themeswitcher/dot_luv.png" alt="Dot Luv" title="Dot Luv" />			<span class="themeName">Dot Luv</span>			</a></li>'
		,'<li><a id="mint-choc" href="#mint-choc"><img src="css/themeswitcher/mint_choco.png" alt="Mint Choc" title="Mint Choc" />			<span class="themeName">Mint Choc</span>		</a></li>'
		,'<li><a id="black-tie" href="#black-tie"><img src="css/themeswitcher/black_tie.png" alt="Black Tie" title="Black Tie" />			<span class="themeName">Black Tie</span>		</a></li>'
		,'<li><a id="trontastic" href="#trontastic"><img src="css/themeswitcher/trontastic.png" alt="Trontastic" title="Trontastic" />			<span class="themeName">Trontastic</span>			</a></li>'
		,'<li><a id="swanky-purse" href="#swanky-purse"><img src="css/themeswitcher/swanky_purse.png" alt="Swanky Purse" title="Swanky Purse" />			<span class="themeName">Swanky Purse</span>			</a></li>'
		,'</ul></div></div>'];

	var switcherpane = $( html.join('') ).find('div').removeAttr('id');


      var button=$("<button>"+options.initialText+"</button>")
      .button( {icons: { secondary: 'ui-icon-triangle-1-s' }}
      )
      //button events
      .click(
		function(){
			if(switcherpane.is(':visible')){ switcherpane.spHide(); }
			else{ switcherpane.spShow(); }
					return false;
		}
	);
	
	//menu events (mouseout didn't work...)
	switcherpane.hover(
		function(){},
		function(){if(switcherpane.is(':visible')){$(this).spHide();}}
	);

	//show/hide panel functions
	$.fn.spShow = function(){ $(this).css({top: button.offset().top + options.buttonHeight + 6, left: button.offset().left}).slideDown(50); 
		button.toggleClass('ui-state-active ui-state-default');
		button.css(button_active); options.onOpen(); 
	}
	$.fn.spHide = function(){ $(this).slideUp(50, function(){options.onClose();}); 
		button.removeClass('ui-state-active').addClass('ui-state-default');
		button.css(button_default); 
	}
	
		
	/* Theme Loading
	---------------------------------------------------------------------*/
	switcherpane.find('a').click(function(){
		var themeId=$(this).attr('id');
		updateCSS( "css/" + themeId + "/jquery-ui-1.8.20.custom.css" );
		var themeName = $(this).find('span').text();
		button.find(".ui-button-text").text( options.buttonPreText + themeName );
		$.cookie(options.cookieName, themeId );
		options.onSelect();
		if(options.closeOnSelect && switcherpane.is(':visible')){ switcherpane.spHide(); }
		return false;
	});
	
	//function to append a new theme stylesheet with the new style changes
	function updateCSS(locStr){
		$('<link href="'+locStr+'" type="text/css" rel="Stylesheet" class="ui-theme" />')
		.insertAfter($("link.ui-theme:first"));
				
		if( $("link.ui-theme").size() > 2){
			$("link.ui-theme:last").remove();
		}	
	}	
	
	/* Inline CSS 
	---------------------------------------------------------------------*/
	var button_default = {
		textDecoration: 'none',                                                     
		width: options.width - 11,//minus must match left and right padding 
		display: 'block',
	
	};
	var button_hover = {
		cursor: 'pointer',
	};
	
	var button_active = {
		outline: '0'
	};
	
	
	
	//button css
	button.css(button_default)
	.hover(
		function(){ 
			$(this).css(button_hover); 
		},
		function(){ 
		 if( !switcherpane.is(':animated') && switcherpane.is(':hidden') ){	
		 	$(this).css(button_default);  
		 }
		}	
	);

	//pane css
	switcherpane.css({
		position: 'absolute',
		float: 'left',
		//fontFamily: 'Trebuchet MS, Verdana, sans-serif',
		//fontSize: '12px',
		//background: '#fff',
		//color: '#000',
		padding: '8px 3px 3px',
		border: 'none', //'1px solid #ccc',
		'-moz-border-radius-bottomleft': '6px',
		'-webkit-border-bottom-left-radius': '6px',
		'-moz-border-radius-bottomright': '6px',
		'-webkit-border-bottom-right-radius': '6px',
		borderTop: 0,
		zIndex: 999999,
		width: options.width-6 //minus must match left and right padding
	})
	.find('ul').css({
		listStyle: '0px none',
		margin: '0',
		padding: '0',
		overflow: 'auto',
		height: options.height
	}).end()
	.find('li').hover(
		function(){ 
			$(this).css({
				//'borderColor':'#000',
				//'background': 'url(css/themeswitcher/menuhoverbg.png) 50% 50% repeat-x',
				//'background': '#fff',
				cursor: 'pointer'
			}); 
		},
		function(){ 
			$(this).css({
				//'borderColor':'#000',
				//'background': '#fff',
				cursor: 'auto'
			}); 
		}
	).css({
		width: options.width-30,
		height: '',
		padding: '2px',
		margin: '1px',
		//border: 'none',  //'1px solid #ccc',
		'-moz-border-radius': '4px',
		clear: 'left',
		float: 'left'
	}).end()
	.find('a').css({
		//color: '#000',
		textDecoration: 'none',
		float: 'left',
		width: '100%',
		outline: '0'
	}).end()
	.find('img').css({
		float: 'left',
		//border: '0px none #fff',
		margin: '0px'
	}).end()
	.find('.themeName').addClass('ui-state-default').css({
		float: 'left',
		padding: '3px',
		margin: '3px 0'
		
	}).end();
	


	$(this).append(button);
	$('body').append(switcherpane);
	switcherpane.hide();
	if( $.cookie(options.cookieName) || options.loadTheme ){
		var themeId = $.cookie(options.cookieName) || options.loadTheme;
		switcherpane.find("a#"+ themeId).trigger('click');
	}

	return this;
};


