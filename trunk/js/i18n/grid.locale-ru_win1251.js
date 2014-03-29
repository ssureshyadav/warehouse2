;(function($){
/**
 * jqGrid Russian Translation v1.0 02.07.2009 (based on translation by Alexey Kanaev v1.1 21.01.2009, http://softcore.com.ru)
 * Sergey Dyagovchenko
 * http://d.sumy.ua
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "�������� {0} - {1} �� {2}",
	  emptyrecords: "��� ������� ��� ���������",
		loadtext: "��������...",
		pgtext : "���. {0} �� {1}"
	},
	search : {
    caption: "�����...",
    Find: "�����",
    Reset: "�����",
    odata : ['�����', '�� �����', '������', '������ ��� �����','������','������ ��� �����', '���������� �','�� ���������� �','��������� �','�� ��������� �','������������� ��','�� ������������� ��','��������','�� ��������'],
    groupOps: [	{ op: "AND", text: "���" },	{ op: "OR",  text: "�����" }	],
    matchText: " ���������",
    rulesText: " �������"
	},
	edit : {
    addCaption: "�������� ������",
    editCaption: "������������� ������",
    bSubmit: "���������",
    bCancel: "������",
		bClose: "�������",
		saveData: "������ ���� ���������! ��������� ���������?",
		bYes : "��",
		bNo : "���",
		bExit : "������",
	    msg: {
        required:"���� �������� ������������",
        number:"����������, ������� ���������� �����",
        minValue:"�������� ������ ���� ������ ���� �����",
        maxValue:"�������� ������ ���� ������ ���� �����",
        email: "������������ �������� e-mail",
        integer: "����������, ������� ����� �����",
        date: "����������, ������� ���������� ����",
        url: "�������� ������. ���������� ������ ������� ('http://' or 'https://')",
		nodefined : " is not defined!",
		novalue : " return value is required!",
		customarray : "Custom function should return array!",
		customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "�������� ������",
	    bClose: "�������"
	},
	del : {
	    caption: "�������",
	    msg: "������� ��������� ������(�)?",
	    bSubmit: "�������",
	    bCancel: "������"
	},
	nav : {
  		edittext: " ",
	    edittitle: "������������� ��������� ������",
  		addtext:" ",
	    addtitle: "�������� ����� ������",
	    deltext: " ",
	    deltitle: "������� ��������� ������",
	    searchtext: " ",
	    searchtitle: "����� ������",
	    refreshtext: "",
	    refreshtitle: "�������� �������",
	    alertcap: "��������",
	    alerttext: "����������, �������� ������",
  		viewtext: "",
  		viewtitle: "����������� ��������� ������"
	},
	col : {
	    caption: "��������/������ �������",
	    bSubmit: "���������",
	    bCancel: "������"	
	},
	errors : {
		errcap : "������",
		nourl : "URL �� ����������",
		norecords: "��� ������� ��� ���������",
    model : "����� ����� �� ������������� ����� �������� �������!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"��", "��", "��", "��", "��", "��", "��",
				"�����������", "�����������", "�������", "�����", "�������", "�������", "�������"
			],
			monthNames: [
				"���", "���", "���", "���", "���", "���", "���", "���", "���", "���", "���", "���",
				"������", "�������", "����", "������", "���", "����", "����", "������", "��������", "�������", "������", "�������"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'd.m.Y',
			masks : {
	            ISO8601Long:"Y-m-d H:i:s",
	            ISO8601Short:"Y-m-d",
	            ShortDate: "n.j.Y",
	            LongDate: "l, F d, Y",
	            FullDateTime: "l, F d, Y G:i:s",
	            MonthDay: "F d",
	            ShortTime: "G:i",
	            LongTime: "G:i:s",
	            SortableDateTime: "Y-m-d\\TH:i:s",
	            UniversalSortableDateTime: "Y-m-d H:i:sO",
	            YearMonth: "F, Y"
	        },
	        reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
	  target: '',
	  checkbox : {disabled:true},
		idName : 'id'
	}
};
})(jQuery);
