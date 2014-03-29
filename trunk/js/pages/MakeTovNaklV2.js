
$(function(){
 
 /// обертка для учета кодировки
 function fnCookie( key, val ){
     if (val === undefined){
        return unescape( GetCookie( key ) || "" );
     } else {
        SetCookie( key, escape( val ) )  
     }
 }
 
 
 $('#permitter').val( fnCookie('permitter') ); //отпуск разрешил
  $('#executor').val( fnCookie('executor') ); //отпуск произвел
 
 alert("MakeTovNakl2_ShowDV = " + fnCookie("MakeTovNakl2_ShowDV") + "\n" +
 	"MakeTovNakl2_ShowBase = " + fnCookie("MakeTovNakl2_ShowBase"));
	
 if (fnCookie("MakeTovNakl2_ShowDV")=="checked") { $('#ShowDV').attr("checked", true); }
 else { $('#ShowDV').attr("checked", false); }
 if (fnCookie("MakeTovNakl2_ShowBase")=="checked") { $('#ShowBase').attr("checked", true); }
 else { $('#ShowBase').attr("checked", false); }
 
 $('#dv').val( GetCookie('dv') ); //номер доверенности
 $('#dvdt').val( GetCookie('dvdt') ); //дата доверенности 

 $('#tabs').tabs({}) //две закладки
 $('input').addClass('ui-widget-content'); //плоская граница
 $('.datepicker').datepicker( $.datepicker.regional[ 'ru' ]); //календарик
 $('#open,#excel,#word,#close,#debug').button({}); //кнопки 
 
 $('#debug').on('click', function(){
    $('#send').attr('action','csp.screen.torg12v2Debug.cls') 
 });
 
 $('#close').on('click', function(){ window.close(); });
  
 $('#send').on('submit', function(){ 
   
    var gzo=$('#gzo'); if ( !gzo.val() ) { alert( "Не заполнено поле Грузоотправитель" ); return false; }
    var gzp=$('#gzp'); if ( !gzp.val() ) { alert( "Не заполнено поле Грузополучатель" ); return false; }
    var pst=$('#pst'); if ( !pst.val() ) { alert( "Не заполнено поле Поставщик" ); return false; }
    var plt=$('#plt'); if ( !plt.val() ) { alert("Не заполнено поле Плательщик"); return false; }
    var nm=$('#nm'); if ( !nm.val() ) { alert( "Не заполнен номер накладной" ); return false; }
    
    /// это передаем через куки
    SetCookie("GruzootpravitelID", gzo.data('id')); SetCookie("PostavchikID",pst.data('id'));
    SetCookie("dv", $('#dv').val());  SetCookie("dvdt", $('#dvdt').val()); //номер и дата доверенности 
    
	SetCookie("MakeTovNakl2_ShowDV", $('#ShowDV').attr("checked"));
	SetCookie("MakeTovNakl2_ShowBase", $('#ShowBase').attr("checked"));
	
	alert('ShowDV = ' + $('#ShowDV').attr("checked") + "\n" + 
		'ShowBase = ' + $('#ShowBase').attr("checked") );
	
    //отпуск груза разрешил и произвел
    fnCookie("permitter", $('#permitter').val() ); 
    fnCookie("executor", $('#executor').val() ); 
    
    /// это через запрос
    $( "#kontr").val( gzo.data('id') ); $("#kontr2").val( gzp.data('id') );
    $( "#kontr3" ).val( pst.data('id') ); $("#kontr4").val(plt.data('id'));
    $( "#nomernakl").val( nm.val() ); $( "#DocDate" ).val( $('#dt').val().split('.').join('/') );
    $( "#NDSinside" ).val( $('#ndsi').prop('checked') );
    $( "#otpr" ).val( $('#permitter').val() )
    $( "#otpp" ).val( $('#executor').val() ) 
	
	$( "#ShowDVHidden" ).val( $('#ShowDV').attr("checked") ) 
	$( "#ShowBaseHidden" ).val( $('#ShowBase').attr("checked") ) 
   
 })
 
 /// ********* Диалог выбора контрагента ************
 
 /// грид 
 var kgrid = $('#kgrid').jqGrid({
     url: '#(..Link("json.Kontragent.cls"))#'
     ,datatype: "json", jsonReader : { repeatitems: false }
     ,colModel: [
        {name:'name', label:'Наименование', width: 300}
        ,{name:'city', label:'Город'}
     ]
     , scroll:1, gridview: true
     , rows: 100
     , height: 280, pager: '#kbar'
 })
 .jqGrid('navGrid','#kbar', { add: false, edit:false, del:false, view: false, search:false })
 .jqGrid('filterToolbar',{searchOnEnter:false}) 
 

 //диалог выбора контрагента
 var kdlg = $('#kdlg');
 kdlg.dialog({ 
    title: 'Выбор контрагента'
    , modal: true, autoOpen: false
    , width: 580, height: 420
    , buttons: [
        { text:'Выбрать', click: OnSelectRow }
        , { text:'Отмена', click: function(){ $(this).dialog('close') }}
    ]
 });
 
 /// обработчик при выборе строки
 var OnSelectRow = function(){ 
     var id = kgrid.jqGrid('getGridParam','selrow')
     , data = kgrid.jqGrid('getRowData',id);
     kdlg.trigger('dialogselect', [id, data["name"] ]);
 } 
 
 /// двойной клик на строке 
 kgrid.on('jqGridDblClickRow', OnSelectRow)
 
 ///При изменении размеров диалога меняем размер грида
 kdlg.on('dialogresize', function(){
    var dlg = $(this), width = dlg.width(), height = dlg.height(); 
    kgrid
     .jqGrid('setGridWidth', width-20 )
     .jqGrid('setGridHeight', height-80 )
    ;
 })
 
 ///При открытии диалога, обновляем грид и его размеры
 kdlg.on('dialogopen', function(){
    kgrid.trigger('reloadGrid');
    kdlg.trigger('dialogresize');
 });
 
///дополняем инпуты кнопками для выбора контрагента
 $('.refinp').each(function ( ){
     
    var inp=$( this ), box = inp.parent()
    , select = $( '<button type="button"></button>' )
      .appendTo( box )
      .button({text:false, icons: {primary: 'ui-icon-newwin' }})
    ;
    
    /// обработчик выбора
    var onselect = function(e, id, name ){
       inp.data( 'id', id ).val( name );
       $(this).dialog('close');
    }
    
    select.on('click', function(){
        kdlg.dialog('option','title', inp.data('dlgtitle'))
            .on('dialogselect', onselect)
            .one('dialogclose', function(){ $(this).off('dialogselect')}) //закроется - отключимся и концы в воду
            .dialog('open');    
    });
    
    inp.attr('readonly', 'readonly').on('click', function(){ select.click(); })
    
 }); 
 
 $("body").bind('keypress', ManageWindow ); //esc - close, enter - submit
 
 /*$('#debug').on('click', function(){
    $('#send').attr('action','csp.screen.torg12v4.cls');
    return false;
 })*/
     
})

function ShowHideDV(obj)
{	
	if($("#"+obj).is(":checked"))
	{
		$("#dv").attr("disabled",false);
		$("#dvdt").attr("disabled",false);
	}
	else
	{
		$("#dv").attr("disabled",true);
		$("#dvdt").attr("disabled",true);
	}
}