Sub vbAddImage(tvil,path,key)
	tvil.ListImages.Add 1,key,LoadPicture(path)
End Sub
