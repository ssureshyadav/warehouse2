function ru_convert_moneyvalue(str) {
	SNUM_FEM = 0;
	SNUM_MAL = 1;
	CTYPE_RUB = 0;
	CTYPE_KOP = 1;
	function split(str, separator) {
		var out = new Array();
		var j = 0;
		var buf = new String();
		for (i=0; i<str.length; i++) 
		if (str.charAt(i) == separator) { out[j] = buf; j++; buf = new String(); }
		else buf += str.charAt(i);
		out[j] = buf;
		return out;
	}
	// ru_remove_invalid очищает строку @str от недопустимых символов
	function ru_remove_invalid(str) {
		var buf = new String;
		var nums = new Array(1,2,3,4,5,6,7,8,9,0);
		for (i=0; i<str.length; i++) 
		if (str.charAt(i) in nums) buf += str.charAt(i);
		return buf; 
	}
	// ru_prepare_number разбивает @str на сегменты
	function ru_prepare_number(str) {
		function c_segment(source, a, b, c) {
			return Number(source.charAt(source.length-a))+""+
				   Number(source.charAt(source.length-b))+""+
				   Number(source.charAt(source.length-c));
		}
		var ru_prepared_number = new Object();
		var num = ru_remove_invalid(str);
		if (num.length > -1) ru_prepared_number.hundreds = c_segment(num,3,2,1);
		if (num.length > 3) ru_prepared_number.thousands = c_segment(num,6,5,4);
		if (num.length > 6) ru_prepared_number.millions = c_segment(num,9,8,7);
		if (num.length > 9) ru_prepared_number.milliards = c_segment(num,12,11,10);
		return ru_prepared_number;		
	}
	// ru_convert_segment превращает числовой сегмент @segment в русские слова. @sort род слов (SNUM_FEM - женский, SNUM_MAL - мужской).
	function ru_convert_segment(segment, sort) {
		ru_digs = new Array("ноль","один","два","три","четыре","пять","шесть","семь","восемь","девять","десять","одиннадцать","двенадцать","тринадцать","четырнадцать","пятнадцать","шестнадцать","семнадцать","восемнадцать","девятнадцать");
		ru_groupsoften = new Array("","","двадцать","дридцать","сорок","пятьдесят","шестьдесят","семьдесят","восемьдесят","девяносто");
		ru_hundreds = new Array("","сто","двести","триста","четыреста","пятьсот","шестьсот","семьсот","восемьсот","девятьсот");
		if (sort == 0) {
			ru_digs[1] = "одна";
			ru_digs[2] = "две";
		}
		var buf = new String();
		if (segment.charAt(0)) buf += ru_hundreds[Number(segment.charAt(0))]+" ";
		if (segment.charAt(1) == "1") buf += ru_digs[Number(segment.charAt(1)+""+segment.charAt(2))]+" "; else {
		 	buf += ru_groupsoften[Number(segment.charAt(1))]+" ";
		 	buf += ru_digs[Number(segment.charAt(2))]+" ";
		}
		return buf;
	}
	//
	function ru_finish(str) {
		function c_declension_currency(num, type) {
			if (type == CTYPE_RUB) {
				if (num.charAt(1) == "1") arg = Number(num.charAt(1)+""+num.charAt(2));
				else arg = Number(num.charAt(2));
				if (arg==0) return "рублей";
				if (arg==1) return "рубль";
				if (arg>1&&arg<5) return "рубля";
				if (arg>=5) return "рублей";			
			}
			if (type == CTYPE_KOP) {
				if (num.length == 1) num = "0"+num;
				if (num.charAt(0) == "1") arg = Number(num.charAt(0)+""+num.charAt(1));
				else arg = Number(num.charAt(1));
				if (arg==0) return "копеек";
				if (arg==1) return "копейка";
				if (arg>1&&arg<5) return "копейки";
				if (arg>=5) return "копеек";		
			}
		}
		function c_declension_thousand(num) {
			if (Number(num) == 0) return "";
			if (num.charAt(1) == "1") arg = Number(num.charAt(1)+""+num.charAt(2));
			else arg = Number(num.charAt(2));
			if (arg==0) return "тысяч";
			if (arg==1) return "тысяча";
			if (arg>1&&arg<5) return "тысячи";
			if (arg>=5) return "тысяч";
		}		
		function c_declension_after_thousand(num, word) {
			if (Number(num) == 0) return "";
			if (num.charAt(1) == "1") arg = Number(num.charAt(1)+""+num.charAt(2));
			else arg = Number(num.charAt(2));
			if (arg==0) return word+"ов";
			if (arg==1) return word;
			if (arg>1&&arg<5) return word+"а";
			if (arg>=5) return word+"ов";
		}		
		var str = split(str, ".");
		if (str[1] == undefined) str[1] = "00"; 
		var ru_prepared_number = ru_prepare_number(str[0]);
		var buf = new String();
		if (ru_prepared_number.milliards) buf += ru_convert_segment(ru_prepared_number.milliards, SNUM_MAL)+c_declension_after_thousand(ru_prepared_number.milliards, "миллиард")+" ";
		if (ru_prepared_number.millions) buf += ru_convert_segment(ru_prepared_number.millions, SNUM_MAL)+c_declension_after_thousand(ru_prepared_number.millions, "миллион")+" ";
		if (ru_prepared_number.thousands) buf += ru_convert_segment(ru_prepared_number.thousands, SNUM_FEM)+c_declension_thousand(ru_prepared_number.thousands)+" ";
		if (ru_prepared_number.hundreds) buf += ru_convert_segment(ru_prepared_number.hundreds, SNUM_MAL)+c_declension_currency(ru_prepared_number.hundreds, CTYPE_RUB);
		if (str[1] != undefined) buf += ", "+ru_remove_invalid(str[1])+" "+c_declension_currency(ru_remove_invalid(str[1]), CTYPE_KOP);	
		return buf;
	}
	return ru_finish(str);
}