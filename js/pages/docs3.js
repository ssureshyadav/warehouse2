// required jquery-1.9.1.js, jquery-ui-1.10.3.custom.js
$(function(){
    
    
    var fnGetId=function(){
        var docid ;  // идентификатор выбранного документа 
        if (( window.docums ) && ( window.docums.ItemID)){
            docid = window.docums.ItemID;    
        }
        return docid
    };
    
    
    
    //для любой кнопки проверки серийных
    $('.bCheckSerial').on('click', function(){
    
    var docid = fnGetId();  if ( !docid ) { alert( 'Не выбран документ!' );  return; };
    
    var url = $( this ).data( 'url' ) + "id="+docid; window.open( url );
    
    });
    
    //для любой кнопки Просмотра серийного
    $('.bOpenSerial').on('click', function(){
        
        var docid = fnGetId();  if ( !docid ) { alert( 'Не выбран документ!' );  return; };
        // другое имя аргумента [ doc ] !!!
        var url = $( this ).data( 'url' ) + "doc="+docid; window.open( url );
        
    })
    
    
});    