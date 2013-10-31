// required jquery-1.9.1.js, jquery-ui-1.10.3.custom.js
$(function(){
    
    $('#bCheckSerial').on('click', function(){
    // кнопка будет видна тогда и только тогда
    // когда выбран тип документа = ОТЧЕТ О РЕМОНТЕ
    // на это и рассчитываем.
    
    var docid ;  // идентификатор выбранного документа 
    if (( window.docums ) && ( window.docums.ItemID)){
        docid = window.docums.ItemID;    
    }
    if ( !docid ) {
        alert( 'Не выбран документ!' );     
        return;
    };
    
    var url = $( this ).data( 'url' ) + "id="+docid;
    var woo = "center:yes;status:no;dialogHeight:660px;dialogWidth:800px;resizable:yes;"
    window.open( url,"Проверка серийных", woo );
    
    
            
    });
})    