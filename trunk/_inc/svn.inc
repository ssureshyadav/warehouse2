^INC^Save for Subversion^^~Format=Cache.S~
%RO
svn^INC^^^0
 #; ������� ��� �������
#define gSVN ^SVN
 #; ������� � ����������� ��� �������
#define gSVNcfg ^SVN.CFG
 #; ����� ����������
#define svnCompileFlags ($g($$$gSVN(1,2),"ck"))
 #; ����� � ������� ������� �����
#define cSvnFileTS 1
 #; ����� � ������� ������� �������� ��
#define cSvnItemTS 2
 #; ��������� ������ ������� ����� !!!���������� 
#define svnFileTS(%1) $zdt(##class(%File).GetFileDateModified(%1),3)
 #; ��������� ������ ������� ��������� (������)
#define svnItemTS(%1) ##class(%RoutineMgr).TS(%1)
 #; ��������� ������������ ������ ������� �����
#define svnFileTSstored(%1) $lg($g($$$gSVN(2,%1)),$$$cSvnFileTS)
 #; ��������� ������������ ������ ������� ��������� (������)
#define svnItemTSstored(%1) $lg($g($$$gSVN(2,%1)),$$$cSvnItemTS)
 #; ������ � ���
#define svnLog(%1,%2) s %1($i(%1))=%2 w:$d(%1("D")) !,%2
 #; ��������� �������
#define svnFileList ^CacheTemp.svnFile
#define svnErrList ^CacheTemp.svnErr
#define svnLoadedList ^CacheTemp.svnLoaded
#define svnItemList ^CacheTemp.svnItem
 #; ���������-�������� ��� �� ������� ����
#define svn "%svn"
#define svnContext "%svnContext"
#; ��� ������ ��� ������� svn\
#define svnPackage "svn"
#; ���������� �� ��� � ����������
#define svnSplit(%fullname,%name,%ext) ##class(utils).GetParts(%fullname,.%name,.%ext)  
 
#; ��������� �� ���������� ������
#def1arg projectionDeleteGlobal(%1) ^NLM.DELETEREF(%1) 


