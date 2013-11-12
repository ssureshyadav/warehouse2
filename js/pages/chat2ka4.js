$(function(){
    
    var $msg = $( "#msg" ); // поле ввода текста сообщения
    
    //копировать в буфер обмена
    function CopyInClipBoard(rid) {
       var msg = $("#"+rid).find(".txt").text()
       , $textarea = $("#TextAreaText").val(msg).show().focus()
       , textarea=$textarea.get(0); 
       textarea.select();
       var therange = textarea.createTextRange();
       therange.execCommand("Copy");
       $textarea.hide();
       alert("Данные успешно скопированы");
    }
    
    // дописывает ноль в префикс, если необходимо 
    function TwoDigits(num) { var str=""+num; return (str.length===1)?"0"+str:str; }
    
    // получили с сервера json добавленного сообщения, дорисовываем его в таблицу
    // {id:"4622",d:"26.08.2012",t:"15:13:37"
    // ,mt:"3",mtt:"Клиенту"
    // ,ms:true,mst:"Уведомление успешно отправлено"
    // ,msg:"Отрисовка добавленного сообщения 2"
    // ,a:"%25CSP.StreamServer.cls?STREAMOID=J9/HVeE0coT9c2/ahJ6diWCdOeBJKYdFsiUfle9/0fs70o2gm0gomRQAfRdp0YgEdEiw_P3G2pKulgOE9OTVGQ--"
    // ,at:"grid.base.js"
    // ,u:"Тестовый пользователь"
    // }
    function AppendMessage(obj){

        var cls,tp;
        switch(obj.mt) {
                case "0": cls="self";tp="*";  break;
                case "2": cls="from";tp="&lt;-"; break;
                case "3": cls="to";tp="-&gt;"; break;
                default: cls="";tp="&nbsp;"
        };
        var mss=(obj.ms)?"ok":"err";

        var attHtml=(obj.a)?[
            "<div class='attachment'><span>Приложение:</span>"
            ,"<a target='_blank' href='",obj.a,"'>",obj.at,"</a>"
            ,"</div>"
        ]:[];
        
        var html=["<tr id='",obj.id,"' class='",cls,"'>"
            ,"<th>",obj.d,"<br/>",obj.t,"</th>"
            ,"<th title='",obj.mtt,"'>",tp,"</th>"
            ,"<td title='",obj.mst,"'>"
                ,"<div class='eml ",mss,"'>&nbsp;</div>"
            ,"</td>"
            ,"<td><div class='txt'></div>"
                ,attHtml.join("")
            ,"</td>"
            ,"<td>",obj.u,"</td>"
            ,"<td><img class='copy' src='images/txt.gif'/></td>"
            ,"</tr>"
        ];
        
		//var firstRow = $("#ResTable tr:first");
		//firstRow.before( $( html.join("") ) );
		//var newrow = $( html.join('') ).find(".txt").text(obj.msg).end();
		//firstRow.before( newrow );
		
		var firstRow = $("#ResTable tr:first");


		var newrow = $( html.join('') ).find(".txt").text(obj.msg).end();
		firstRow.after( newrow );
		
        //$("#ResTable").append( $( html.join("") ) )
        //    .find("tr:last").find(".txt").text(obj.msg) //боремся с двойными кавычками в тексте сообщения
		
        //var newrow = $( html.join('') ).find(".txt").text(obj.msg).end();
		//firstRow.before( newrow );
    }
        
    // отправка данных нового сообщения на сервер
    function fnSend(){
        $(".dErr").hide(); //ждем новую ошибку
        if ($("#msg").val()=="") {
            alert('Не заполнен текст сообщения. Отправка невозможна');  
            return;
        }
        
        // собираем данные
        var data={
            kontr: CurrentKontrId
            ,msg: $("#msg").val()
            ,mt: $(this).attr("mt")  //какую кнопку нажали и какой тип сообщения хотим создать
            ,d: $("#d").val()
            ,t: $("#t").val()
            ,oper: 'add'
        };
        
        $("#bNote,#bMail,.dForm").hide(); //прячем кнопки и поля ввода
        $(".dAjax").show(); //показываем что начали отправку
        
        //alert("fnSend");
        
        $.ajaxFileUpload({
            url: AjaxFileUploadURL
            ,secureuri:false
            ,fileElementId:'file'
            ,data: data
            ,dataType: 'text'
            ,success: function(data){
                var arr=eval(data); //массив [результат, ошибка, новыйИд]
                if (!arr[RES]){ //не получилось
                    $(".dErr").html( arr[ERR] ).show(); return;
                } else {
                    $("#dMsgNew").dialog("close");
                    var obj=(arr[JSON]); AppendMessage(obj)
                } 
            }
            ,error: function(obj,err,httpErr){
                var msg=[];
                for (var i in httpErr){
                    msg.push(i+"="+httpErr[i])
                }
                
                $(".dErr").html("Ошибка"+": "+msg).show();
            }
            ,complete: function(){
                $(".dAjax").hide(); $(".dForm,#bNote,#bMail").show();
            }
        });
        
    }
    
    wEmailButton = SetwEmailButtonFN();
    //объявляем диалог добавления новой записи
    var $dlg=$("#dMsgNew").dialog({
        modal: true, autoOpen: false
        , title: 'Добавить новое сообщение'
        , width: 640, height: 320
        , buttons: [
            { id: 'bNote', text: 'Добавить пометку'
              , title: 'Добавляемая запись будет видна только сервис-менеджеру'
              , mt: NOTE //message type
              , click: function(){} //необходим диалогу
            }
            ,
            // { id: 'bMail', mt: MAIL }
            wEmailButton
        ]
    });
    
    
    
    //доопределяем кнопки на диалоге
    var $bNote = $("#bNote")
            .button("option", "icons", {secondary: "ui-icon-comment"})
            .click( fnSend )
      , $bMail = $("#bMail")
            .button("option", "icons", {secondary: "ui-icon-mail-closed"})
            .click( fnSend )
    ;
    
    //открываем диалог
    var $bNewMsg = $("#bMsgNew").button({icons: {primary: "ui-icon-plus"}})
        .click(function(){ $dlg.dialog('open'); });
        
    
    $dlg.bind('dialogopen', function(){ 
            $bNewMsg.hide(); // при открытии диалога прячем кнопку 'Добавить сообщение' 
            $(".dErr").hide(); //скрывает сообщение об ошибке
            $(".dAjax").hide(); //сообщение о загрузке прячем
            $("#msg").val(""); //очищаем сообщение
        })
        // при закрытии диалога возвращаем видимость кнопке 'Добавить сообщение'
        .bind('dialogclose', function(){ $bNewMsg.show(); })
    ;
            
    $("#bPrint")
        .button({icons:{secondary: "ui-icon-print"}})
        .click(function(){ window.print() });   
    
    $("#bClose")
        .button({icons:{secondary: "ui-icon-circle-close"}})
        .click(function(){ window.close() });       
     
    var $tim=$( "#t" ); 
    setInterval( function() { /*счетчик секунд*/
        var dateObj = new Date();
        var m = TwoDigits(dateObj.getMinutes()), h = TwoDigits(dateObj.getHours())
        , s = TwoDigits(dateObj.getSeconds())
        ;
        $tim.val( h + ":" + m + ":" + s);
    }, 1000);
    
    var copy=function(){
        var id=$(this).closest("tr").attr("id"); 
        CopyInClipBoard(id);
    };
    
    /*подсветка кнопки*/
    var hover=function(){
        var $this=$(this), src=$this.attr("src"); 
        src=( src.indexOf("Ontxt")>-1 )?src.replace("Ontxt","txt"):src.replace("txt","Ontxt");
        $this.attr("src",src);
    }
        
    $(".copy") //кнопки копирования в буфер
        .css("cursor","hand")
        .mouseenter(hover).mouseleave(hover)
        .click(copy)
        .parent().attr("title","Копировать текст сообщения в буфер обмена")
    ;
    
    $("form").submit(function(){
        var msg=$(this).find("textarea").val(); 
        if (msg==="") {
            alert("Не введен текст сообщения"); 
            return false;
        }
    });
    
});