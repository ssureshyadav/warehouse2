// подсчитать и вывести итог таблицы
function Itog() {
	var summ = 0, RowsCount = $('#MainTable TR').length;
	$('#MainTable tr').each( function(index) {
		if ((index==0) || (index==(RowsCount-1))) return;
		if(this.cells.length>5)
		{
			var OthcetSumm = this.cells[4].innerHTML;
			summ=summ + parseFloat(OthcetSumm);
		}
	});
	$("#ItogTD").text(summ);
}


 //сохранить документ
function Save() {
	var Rows=[], RowsCount = $('#MainTable TR').length;
	var DocKontrId = $("#KontrHref").attr("Tag");
	$('#MainTable TR').each( function(index) {
			if ((index==0) || (index==(RowsCount-1))) return;
			if (this.cells.length<=5) return;
			var OtchetSumm = this.cells[4].innerHTML
			,	SchetNum = this.cells[3].innerHTML
			,	KontrId = $(this).attr("KontrId")
			,	OtchId = $(this).attr("OtchId")
			;
			Rows.push(KontrId+"&"+OtchId+"&"+OtchetSumm+"&"+SchetNum);
		}
	);
	var itogsumm = $("#ItogTD").text();
	$.post("sluzapResults.csp"
		,{ "docsumm": itogsumm ,  "strs": Rows, "Save": "1", "docid": docid, "DocKontrId": DocKontrId}
		,function(data){
			var di = data.split("||")[0];
			if (isNaN(di)) {
				alert(data);
			} else {
				docid = data.split("||")[0];
				$("#docnumber").text(data.split("||")[1]);
				alert("Документ успешно сохранён"); 				
			}
		}
	);
}

// Удалить строку
function delrow(rowid) {
	if(!window.confirm("Удалить строку?")) return;
	$('#' + rowid).remove(); Itog();
}

function ChooseKonragent2(obj)
{
	var KontrData = ChooseKonragent(obj);
	alert(KontrData);
}