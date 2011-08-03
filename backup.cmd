If Not Exist \\fileserver\DISTRIB\BackupCache\log.txt (
	echo ^ > "\\fileserver\DISTRIB\BackupCache\log.txt"
)

echo ^--резервное копирование начато в %Date% %Time% --^ >> "\\fileserver\DISTRIB\BackupCache\log.txt"
c:\CacheSys\bin\ccontrol stop cache
md "\\fileserver\DISTRIB\BackupCache\%Date%"
c:\progra~1\winrar\winrar.exe a "\\fileserver\DISTRIB\BackupCache\%Date%\Sklad_cache" c:\CacheSys\mgr\Sklad2\CACHE.DAT

If Exist \\fileserver\DISTRIB\BackupCache\%Date%\Sklad_cache.rar (
	echo ^Sklad saved: ok!^ >> "\\fileserver\DISTRIB\BackupCache\log.txt"
)
c:\CacheSys\bin\ccontrol start cache
echo ^--резервное копирование закончено в %Date% %Time% --^ >> "\\fileserver\DISTRIB\BackupCache\log.txt"
echo ^_^ >> "\\fileserver\DISTRIB\BackupCache\log.txt"
