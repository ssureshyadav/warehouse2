// required jquery-1.9.1.js, jquery-ui-1.10.3.custom.js
$(function(){
    
    //��� ����� ������ �������� ��������
    $('.bCheckSerial').on('click', function(){
    
    var docid ;  // ������������� ���������� ��������� 
    if (( window.docums ) && ( window.docums.ItemID)){
        docid = window.docums.ItemID;    
    }
    
    if ( !docid ) {
        alert( '�� ������ ��������!' );     
        return;
    };
    
    var url = $( this ).data( 'url' ) + "id="+docid;
    window.open( url );
    
    });
})    