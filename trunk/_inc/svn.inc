^INC^Save for Subversion^^~Format=Cache.S~
%RO
svn^INC^^^0
 #; глобаль СВН плагина
#define gSVN ^SVN
 #; глобаль с настройками СВН плагина
#define gSVNcfg ^SVN.CFG
 #; флаги компиляции
#define svnCompileFlags ($g($$$gSVN(1,2),"ck"))
 #; ветка с штампом времени файла
#define cSvnFileTS 1
 #; ветка с штампом времени элемента БД
#define cSvnItemTS 2
 #; получение штампа времени файла !!!Локального 
#define svnFileTS(%1) $zdt(##class(%File).GetFileDateModified(%1),3)
 #; получение штампа времени программы (класса)
#define svnItemTS(%1) ##class(%RoutineMgr).TS(%1)
 #; получение сохраненного штампа времени файла
#define svnFileTSstored(%1) $lg($g($$$gSVN(2,%1)),$$$cSvnFileTS)
 #; получение сохраненного штампа времени программы (класса)
#define svnItemTSstored(%1) $lg($g($$$gSVN(2,%1)),$$$cSvnItemTS)
 #; запись в лог
#define svnLog(%1,%2) s %1($i(%1))=%2 w:$d(%1("D")) !,%2
 #; временные глобали
#define svnFileList ^CacheTemp.svnFile
#define svnErrList ^CacheTemp.svnErr
#define svnLoadedList ^CacheTemp.svnLoaded
#define svnItemList ^CacheTemp.svnItem
 #; константы-префиксы для ид пунктов меню
#define svn "%svn"
#define svnContext "%svnContext"
#; имя пакета для плагина svn\
#define svnPackage "svn"
#; разделение на имя и расширение
#define svnSplit(%fullname,%name,%ext) ##class(utils).GetParts(%fullname,.%name,.%ext)  
 
#; обращение по нескольким ключам
#def1arg projectionDeleteGlobal(%1) ^NLM.DELETEREF(%1) 



