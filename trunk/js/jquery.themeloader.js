/* jQuery plugin themeloader
 cookie.js plug-in required
---------------------------------------------------------------------*/
$(function(){
        var themeName = $.cookie('jquery-ui-theme'); if (!themeName) return;
        var url="css/" + themeName + "/jquery-ui-1.8.20.custom.css";
	var cssLink = $('<link href="' + url +'" type="text/css" rel="stylesheet" class="ui-theme" />');
	$(cssLink).insertAfter($("link.ui-theme:first"));
});


