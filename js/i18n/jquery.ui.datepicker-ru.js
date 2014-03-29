/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ru'] = {
		closeText: 'เ?เภเสแ?แ?แ?แ?',
		prevText: '&#x3c;เ?แ?เลเฤ',
		nextText: 'เจเหเลเฤ&#x3e;',
		currentText: 'เจเลเรเฮเฤเอแ?',
		monthNames: ['เเอเยเภแ?แ?','เชเลเยแ?เภเหแ?','เ?เภแ?แ?','เ?เฯแ?เลเหแ?','เ?เภเษ','เแ?เอแ?',
		'เแ?เหแ?','เ?เยเรแ?แ?แ?','เจเลเอแ?แ?เมแ?แ?','เ?เสแ?แ?เมแ?แ?','เ?เฮแ?เมแ?แ?','เ?เลเสเภเมแ?แ?'],
		monthNamesShort: ['เเอเย','เชเลเย','เ?เภแ?','เ?เฯแ?','เ?เภเษ','เแ?เอ',
		'เแ?เห','เ?เยเร','เจเลเอ','เ?เสแ?','เ?เฮแ?','เ?เลเส'],
		dayNames: ['เยเฮแ?เสแ?เลแ?เลเอแ?เล','เฯเฮเอเลเฤเลเหแ?เอเศเส','เยแ?เฮแ?เอเศเส','แ?แ?เลเฤเภ','แ?เลแ?เยเลแ?เร','เฯแ?แ?เอเศแ?เภ','แ?แ?เมเมเฮแ?เภ'],
		dayNamesShort: ['เยแ?เส','เฯเอเฤ','เยแ?แ?','แ?แ?เฤ','แ?แ?เย','เฯแ?เอ','แ?เมแ?'],
		dayNamesMin: ['เ?แ?','เ?เอ','เ?แ?','เจแ?','เฏแ?','เ?แ?','เจเม'],
		weekHeader: 'เ?เล',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});