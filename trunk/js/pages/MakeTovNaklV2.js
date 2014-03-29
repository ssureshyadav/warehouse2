
$(function(){
 
 /// ������� ��� ����� ���������
 function fnCookie( key, val ){
     if (val === undefined){
        return unescape( GetCookie( key ) || "" );
     } else {
        SetCookie( key, escape( val ) )  
     }
 }
 
 
 $('#permitter').val( fnCookie('permitter') ); //������ ��������
  $('#executor').val( fnCookie('executor') ); //������ ��������
 
 alert("MakeTovNakl2_ShowDV = " + fnCookie("MakeTovNakl2_ShowDV") + "\n" +
 	"MakeTovNakl2_ShowBase = " + fnCookie("MakeTovNakl2_ShowBase"));
	
 if (fnCookie("MakeTovNakl2_ShowDV")=="checked") { $('#ShowDV').attr("checked", true); }
 else { $('#ShowDV').attr("checked", false); }
 if (fnCookie("MakeTovNakl2_ShowBase")=="checked") { $('#ShowBase').attr("checked", true); }
 else { $('#ShowBase').attr("checked", false); }
 
 $('#dv').val( GetCookie('dv') ); //����� ������������
 $('#dvdt').val( GetCookie('dvdt') ); //���� ������������ 

 $('#tabs').tabs({}) //��� ��������
 $('input').addClass('ui-widget-content'); //������� �������
 $('.datepicker').datepicker( $.datepicker.regional[ 'ru' ]); //����������
 $('#open,#excel,#word,#close,#debug').button({}); //������ 
 
 $('#debug').on('click', function(){
    $('#send').attr('action','csp.screen.torg12v2Debug.cls') 
 });
 
 $('#close').on('click', function(){ window.close(); });
  
 $('#send').on('submit', function(){ 
   
    var gzo=$('#gzo'); if ( !gzo.val() ) { alert( "�� ��������� ���� ����������������" ); return false; }
    var gzp=$('#gzp'); if ( !gzp.val() ) { alert( "�� ��������� ���� ���������������" ); return false; }
    var pst=$('#pst'); if ( !pst.val() ) { alert( "�� ��������� ���� ���������" ); return false; }
    var plt=$('#plt'); if ( !plt.val() ) { alert("�� ��������� ���� ����������"); return false; }
    var nm=$('#nm'); if ( !nm.val() ) { alert( "�� �������� ����� ���������" ); return false; }
    
    /// ��� �������� ����� ����
    SetCookie("GruzootpravitelID", gzo.data('id')); SetCookie("PostavchikID",pst.data('id'));
    SetCookie("dv", $('#dv').val());  SetCookie("dvdt", $('#dvdt').val()); //����� � ���� ������������ 
    
	SetCookie("MakeTovNakl2_ShowDV", $('#ShowDV').attr("checked"));
	SetCookie("MakeTovNakl2_ShowBase", $('#ShowBase').attr("checked"));
	
	alert('ShowDV = ' + $('#ShowDV').attr("checked") + "\n" + 
		'ShowBase = ' + $('#ShowBase').attr("checked") );
	
    //������ ����� �������� � ��������
    fnCookie("permitter", $('#permitter').val() ); 
    fnCookie("executor", $('#executor').val() ); 
    
    /// ��� ����� ������
    $( "#kontr").val( gzo.data('id') ); $("#kontr2").val( gzp.data('id') );
    $( "#kontr3" ).val( pst.data('id') ); $("#kontr4").val(plt.data('id'));
    $( "#nomernakl").val( nm.val() ); $( "#DocDate" ).val( $('#dt').val().split('.').join('/') );
    $( "#NDSinside" ).val( $('#ndsi').prop('checked') );
    $( "#otpr" ).val( $('#permitter').val() )
    $( "#otpp" ).val( $('#executor').val() ) 
	
	$( "#ShowDVHidden" ).val( $('#ShowDV').attr("checked") ) 
	$( "#ShowBaseHidden" ).val( $('#ShowBase').attr("checked") ) 
   
 })
 
 /// ********* ������ ������ ����������� ************
 
 /// ���� 
 var kgrid = $('#kgrid').jqGrid({
     url: '#(..Link("json.Kontragent.cls"))#'
     ,datatype: "json", jsonReader : { repeatitems: false }
     ,colModel: [
        {name:'name', label:'������������', width: 300}
        ,{name:'city', label:'�����'}
     ]
     , scroll:1, gridview: true
     , rows: 100
     , height: 280, pager: '#kbar'
 })
 .jqGrid('navGrid','#kbar', { add: false, edit:false, del:false, view: false, search:false })
 .jqGrid('filterToolbar',{searchOnEnter:false}) 
 

 //������ ������ �����������
 var kdlg = $('#kdlg');
 kdlg.dialog({ 
    title: '����� �����������'
    , modal: true, autoOpen: false
    , width: 580, height: 420
    , buttons: [
        { text:'�������', click: OnSelectRow }
        , { text:'������', click: function(){ $(this).dialog('close') }}
    ]
 });
 
 /// ���������� ��� ������ ������
 var OnSelectRow = function(){ 
     var id = kgrid.jqGrid('getGridParam','selrow')
     , data = kgrid.jqGrid('getRowData',id);
     kdlg.trigger('dialogselect', [id, data["name"] ]);
 } 
 
 /// ������� ���� �� ������ 
 kgrid.on('jqGridDblClickRow', OnSelectRow)
 
 ///��� ��������� �������� ������� ������ ������ �����
 kdlg.on('dialogresize', function(){
    var dlg = $(this), width = dlg.width(), height = dlg.height(); 
    kgrid
     .jqGrid('setGridWidth', width-20 )
     .jqGrid('setGridHeight', height-80 )
    ;
 })
 
 ///��� �������� �������, ��������� ���� � ��� �������
 kdlg.on('dialogopen', function(){
    kgrid.trigger('reloadGrid');
    kdlg.trigger('dialogresize');
 });
 
///��������� ������ �������� ��� ������ �����������
 $('.refinp').each(function ( ){
     
    var inp=$( this ), box = inp.parent()
    , select = $( '<button type="button"></button>' )
      .appendTo( box )
      .button({text:false, icons: {primary: 'ui-icon-newwin' }})
    ;
    
    /// ���������� ������
    var onselect = function(e, id, name ){
       inp.data( 'id', id ).val( name );
       $(this).dialog('close');
    }
    
    select.on('click', function(){
        kdlg.dialog('option','title', inp.data('dlgtitle'))
            .on('dialogselect', onselect)
            .one('dialogclose', function(){ $(this).off('dialogselect')}) //��������� - ���������� � ����� � ����
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