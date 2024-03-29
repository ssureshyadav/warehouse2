/*���������� ���������, ������������ �� ��������  */
function axtv(/*ActiveX TreeView*/tv,/*ActiveX Tree View Image List*/tvil){
	//�������� ������
	tv.Style=7;tv.Appearance=0;tv.BorderStyle=1;tv.Indetation=10;tv.Padding=5;tv.Indentation=5;
	tv.LabelEdit=1;
	
	//������� ������
	var imgPath="C:\\SKLAD\\"; //��-��
	tvil.ImageWidth=16; tvil.ImageHeight=16;tvil.ListImages.Clear();
	vbAddImage(tvil,imgPath + "fopen.bmp","open"); ///������� LoadPicture ����������� ������ � ����� VBScript
	vbAddImage(tvil,imgPath + "fclose.bmp","close");
	vbAddImage(tvil,imgPath + "fopen2.bmp","open2");
	vbAddImage(tvil,imgPath + "fclose2.bmp","close2");
	tv.ImageList=tvil; //��������� ��� ��������
	var _node=null ; //������� ����
	var _onChange=null; //���������� ���������
	var _PREFIX="n" ;
	
	var _fnOnClick=function(){
		var node=tv.SelectedItem;
		if (_node===node) return; //��������� �� ���������
		_node=node; //��������� ����
		var nodeKey=node.Key; var nodeId=nodeKey.substring(1,nodeKey.length);
		if (typeof _onChange=="function") { _onChange(nodeId); };
	};
	tv.attachEvent("NodeClick",_fnOnClick); //���� ���������
	
	//������ 
	var _fnExtract=function(nodeKey){
		return nodeKey.substring(1,nodeKey.length);	
	}
	var _fnLoad=function (/*������������ ����*/ parent,/*������ � ������*/ nodes,/*������� ���������� ������*/ expand) {
			var pre="n"; //������� ��� ��������
			for (var id in nodes) {
				var obj=nodes[id],name=obj[0],childs=obj[1];
				var nid=pre+id; //ActiveX ������ �� ����� ����� ��������������
				var node=(parent==="")?tv.Nodes.Add(null,null,nid,name)
									  :tv.Nodes.Add(parent,4,nid,name)
				/*node.sorted=true;*/
				node.Image="close2"; 
				node.SelectedImage="open2"; 
				node.expanded=expand;
				arguments.callee(nid,childs,expand); //����������� ��������
		}
	};
	
	//��������/���������� ����
	var _fnExpand=function(/*Boolean*/ expand){
		tv.Visible=false;
		var count=tv.Nodes.Count;
		for(var i=1;i<count;i++){
			tv.Nodes.Item(i).Expanded=expand;
		}
		tv.Visible=true;
	};
	
	//������� ���������� ��������� ������ ����� ����
	var _fnOnChange=function(handler){
		_onChange=handler;
	}
	/*������� �������� ������ �� ���������� ����*/
	var _fnGetPath=function(id){
		var path=new Array();
		var start=tv.SelectedItem;
		if (id){ start=tv.Nodes.Item(_PREFIX+id);};
		for (var node=start;node;node=node.Parent) {
			var nodeId=_fnExtract(node.Key);
			path.push({id:nodeId,name:node.Text});
		}
		return path;
	}
	
	var _fnIsLeaf=function(id){
		var node=tv.SelectedItem; 
		if (id) node=tv.Nodes.Item(_PREFIX+id);
		
		var count=node.Children;
		return (!count);
	}
	
	/*�������� ����������� ����*/
	var _fnSelect=function(nodeId){
		var nodeKey=_PREFIX+nodeId;
		var node=tv.Nodes.Item(nodeKey);
		if (tv.SelectedItem) tv.SelectedItem.Selected=false;
		node.Selected=true;
		tv.focus();
		_fnOnClick();
	}
		
	return {
		load: function(parent,data,expand){tv.Nodes.Clear(); _fnLoad(parent,data,expand)}
	    ,expand: _fnExpand
	    ,onChange: _fnOnChange  //����������� �������� �����������
	    ,getPath: _fnGetPath
	    ,select: _fnSelect
	    ,isLeaf: _fnIsLeaf
	    ,getData: function(){
		    var node=tv.SelectedItem;
		    var id=null,text=null;
		    if (node){id=_fnExtract(node.Key);text=node.Text;}
			return [id,text]    
		}
	};	
}
