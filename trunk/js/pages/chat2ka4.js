$(function(){
    
    var $msg = $( "#msg" ); // ���� ����� ������ ���������
    
    //���������� � ����� ������
    function CopyInClipBoard(rid) {
       var msg = $("#"+rid).find(".txt").text()
       , $textarea = $("#TextAreaText").val(msg).show().focus()
       , textarea=$textarea.get(0); 
       textarea.select();
       var therange = textarea.createTextRange();
       therange.execCommand("Copy");
       $textarea.hide();
       alert("������ ������� �����������");
    }
    
    // ���������� ���� � �������, ���� ���������� 
    function TwoDigits(num) { var str=""+num; return (str.length===1)?"0"+str:str; }
    
    // �������� � ������� json ������������ ���������, ������������ ��� � �������
    // {id:"4622",d:"26.08.2012",t:"15:13:37"
    // ,mt:"3",mtt:"�������"
    // ,ms:true,mst:"����������� ������� ����������"
    // ,msg:"��������� ������������ ��������� 2"
    // ,a:"%25CSP.StreamServer.cls?STREAMOID=J9/HVeE0coT9c2/ahJ6diWCdOeBJKYdFsiUfle9/0fs70o2gm0gomRQAfRdp0YgEdEiw_P3G2pKulgOE9OTVGQ--"
    // ,at:"grid.base.js"
    // ,u:"�������� ������������"
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
            "<div class='attachment'><span>����������:</span>"
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
        //    .find("tr:last").find(".txt").text(obj.msg) //������� � �������� ��������� � ������ ���������
		
        //var newrow = $( html.join('') ).find(".txt").text(obj.msg).end();
		//firstRow.before( newrow );
    }
        
    // �������� ������ ������ ��������� �� ������
    function fnSend(){
        $(".dErr").hide(); //���� ����� ������
        if ($("#msg").val()=="") {
            alert('�� �������� ����� ���������. �������� ����������');  
            return;
        }
        
        // �������� ������
        var data={
            kontr: CurrentKontrId
            ,msg: $("#msg").val()
            ,mt: $(this).attr("mt")  //����� ������ ������ � ����� ��� ��������� ����� �������
            ,d: $("#d").val()
            ,t: $("#t").val()
            ,oper: 'add'
        };
        
        $("#bNote,#bMail,.dForm").hide(); //������ ������ � ���� �����
        $(".dAjax").show(); //���������� ��� ������ ��������
        
        //alert("fnSend");
        
        $.ajaxFileUpload({
            url: AjaxFileUploadURL
            ,secureuri:false
            ,fileElementId:'file'
            ,data: data
            ,dataType: 'text'
            ,success: function(data){
                var arr=eval(data); //������ [���������, ������, �������]
                if (!arr[RES]){ //�� ����������
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
                
                $(".dErr").html("������"+": "+msg).show();
            }
            ,complete: function(){
                $(".dAjax").hide(); $(".dForm,#bNote,#bMail").show();
            }
        });
        
    }
    
    wEmailButton = SetwEmailButtonFN();
    //��������� ������ ���������� ����� ������
    var $dlg=$("#dMsgNew").dialog({
        modal: true, autoOpen: false
        , title: '�������� ����� ���������'
        , width: 640, height: 320
        , buttons: [
            { id: 'bNote', text: '�������� �������'
              , title: '����������� ������ ����� ����� ������ ������-���������'
              , mt: NOTE //message type
              , click: function(){} //��������� �������
            }
            ,
            // { id: 'bMail', mt: MAIL }
            wEmailButton
        ]
    });
    
    
    
    //������������ ������ �� �������
    var $bNote = $("#bNote")
            .button("option", "icons", {secondary: "ui-icon-comment"})
            .click( fnSend )
      , $bMail = $("#bMail")
            .button("option", "icons", {secondary: "ui-icon-mail-closed"})
            .click( fnSend )
    ;
    
    //��������� ������
    var $bNewMsg = $("#bMsgNew").button({icons: {primary: "ui-icon-plus"}})
        .click(function(){ $dlg.dialog('open'); });
        
    
    $dlg.bind('dialogopen', function(){ 
            $bNewMsg.hide(); // ��� �������� ������� ������ ������ '�������� ���������' 
            $(".dErr").hide(); //�������� ��������� �� ������
            $(".dAjax").hide(); //��������� � �������� ������
            $("#msg").val(""); //������� ���������
        })
        // ��� �������� ������� ���������� ��������� ������ '�������� ���������'
        .bind('dialogclose', function(){ $bNewMsg.show(); })
    ;
            
    $("#bPrint")
        .button({icons:{secondary: "ui-icon-print"}})
        .click(function(){ window.print() });   
    
    $("#bClose")
        .button({icons:{secondary: "ui-icon-circle-close"}})
        .click(function(){ window.close() });       
     
    var $tim=$( "#t" ); 
    setInterval( function() { /*������� ������*/
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
    
    /*��������� ������*/
    var hover=function(){
        var $this=$(this), src=$this.attr("src"); 
        src=( src.indexOf("Ontxt")>-1 )?src.replace("Ontxt","txt"):src.replace("txt","Ontxt");
        $this.attr("src",src);
    }
        
    $(".copy") //������ ����������� � �����
        .css("cursor","hand")
        .mouseenter(hover).mouseleave(hover)
        .click(copy)
        .parent().attr("title","���������� ����� ��������� � ����� ������")
    ;
    
    $("form").submit(function(){
        var msg=$(this).find("textarea").val(); 
        if (msg==="") {
            alert("�� ������ ����� ���������"); 
            return false;
        }
    });
    
});