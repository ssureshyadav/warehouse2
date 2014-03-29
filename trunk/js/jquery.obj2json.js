(function($){ // 
 $.obj2json=function ( o, name , ind, wellform ){ //
		/// Спорная строчка, но а контексте самой функции нужна
		if ((o===null) || (o === undefined)) return "{}";
 		if (!name) name = ""; if (!ind) ind=""; if (wellform === undefined) wellform = false;
		var tab = "\t", newline = "\n";  if (!wellform) { tab= ""; newline= ""; }
		var json = name ? ("\"" + name + "\"") : "";
		var otype=typeof(o); 
		if (o === "[]") { json += (name ? ":[]" : "[]"); return json; }
		
		if (o instanceof Array) { var n, i, ar=[];
			for (i = 0, n = o.length; i < n; i += 1) {
				ar[i] = arguments.callee(o[i], "", ind + tab, wellform);
			}
			json += (name ? ":[" : "[") + (ar.length > 1 ? (newline + ind + tab + ar.join(","+newline + ind + tab) + newline + ind) : ar.join("")) + "]";
			return json;
		} 
		if (o === null) { json += (name && ":") + "null"; return json; } 
		if (otype === "object") { var arr = [], m;
			for (m in o) {
				if (o.hasOwnProperty(m)) arr[arr.length] = arguments.callee(o[m], m, ind + tab, wellform);
			}
			json += (name ? ":{" : "{") + (arr.length > 1 ? (newline + ind + tab + arr.join(","+newline + ind + tab) + newline + ind) : arr.join("")) + "}";
			return json;
		} 
		if (otype === "string")  { json += (name && ":") + "\"" + o.replace(/\\/g,'\\\\').replace(/\"/g,'\\"') + "\""; return json; }
		//if (otype === "boolean") { json += (name && ":") + o.toString(); return json; }
		//if (otype === "number")  { json += (name && ":") + o.toString(); return json; }
		json += (name && ":") +  "\"" + o.toString()+ "\""; return json;
 };
})(jQuery)