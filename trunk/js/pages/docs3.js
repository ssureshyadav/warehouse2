// required jquery-1.9.1.js, jquery-ui-1.10.3.custom.js
$(function(){
    
    
    var fnGetId=function(){
        var docid ;  // ������������� ���������� ��������� 
        if (( window.docums ) && ( window.docums.ItemID)){
            docid = window.docums.ItemID;    
        }
        return docid
    };
    
    
    
    //��� ����� ������ �������� ��������
    $('.bCheckSerial').on('click', function(){
    
    var docid = fnGetId();  if ( !docid ) { alert( '�� ������ ��������!' );  return; };
    
    var url = $( this ).data( 'url' ) + "id="+docid; window.open( url );
    
    });
    
    //��� ����� ������ ��������� ���������
    $('.bOpenSerial').on('click', function(){
        
        var docid = fnGetId();  if ( !docid ) { alert( '�� ������ ��������!' );  return; };
        // ������ ��� ��������� [ doc ] !!!
        var url = $( this ).data( 'url' ) + "doc="+docid; window.open( url );
        
    })
    
    
});    