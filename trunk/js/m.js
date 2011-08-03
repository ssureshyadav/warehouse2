/*Базовые функции для страничек*/
var $g=function(id){return document.getElementById(id);}
var $bind=("v"=="\v")?function(o,e,h){
	o.attachEvent("on"+e,h);
}:function(o,e,h){
	o.addEventListener(e,h,false);	
}