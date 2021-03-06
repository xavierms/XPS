USE [RegistroCasos]
GO
/****** Object:  Table [dbo].[Sistemas_Parametros_Config]    Script Date: 1/25/2022 1:59:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sistemas_Parametros_Config](
	[Parametro_Secuencia] [int] IDENTITY(1,1) NOT NULL,
	[Parametro_Codigo] [varchar](100) NOT NULL,
	[Parametro_Valor] [varchar](4000) NOT NULL,
	[Parametro_Tipo] [varchar](100) NOT NULL,
	[Parametro_Explicacion] [varchar](800) NOT NULL,
	[Registro_Estado] [varchar](1) NOT NULL,
	[Registro_Usuario] [varchar](20) NOT NULL,
	[Registro_Fecha] [datetime] NOT NULL,
 CONSTRAINT [PK_Sistemas_Parametros_Config] PRIMARY KEY CLUSTERED 
(
	[Parametro_Secuencia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios_Roles_Cata]    Script Date: 1/25/2022 1:59:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios_Roles_Cata](
	[Usuario_Rol_Numero] [int] IDENTITY(1,1) NOT NULL,
	[Usuario_Rol_Nombre] [varchar](50) NOT NULL,
	[Registro_Estado] [char](1) NOT NULL,
	[Registro_Usuario] [varchar](50) NOT NULL,
	[Registro_Fecha] [datetime] NOT NULL,
	[Registro_Usuario_Creacion] [varchar](50) NOT NULL,
	[Registro_Fecha_Creacion] [datetime] NOT NULL,
 CONSTRAINT [PK_Usuarios_Roles_Cata] PRIMARY KEY CLUSTERED 
(
	[Usuario_Rol_Numero] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios_Trans]    Script Date: 1/25/2022 1:59:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios_Trans](
	[Usuario_Numero] [tinyint] IDENTITY(1,1) NOT NULL,
	[Usuario_Nickname] [varchar](50) NOT NULL,
	[Usuario_Nombre] [varchar](50) NOT NULL,
	[Usuario_Apellido] [varchar](50) NOT NULL,
	[Usuario_Email] [varchar](50) NOT NULL,
	[Usuario_Password] [varchar](100) NULL,
	[Usuario_Rol_Numero] [int] NOT NULL,
	[Registro_Estado] [char](1) NOT NULL,
	[Registro_Usuario] [varchar](50) NOT NULL,
	[Registro_Fecha] [datetime] NOT NULL,
	[Registro_Usuario_Creacion] [varchar](50) NOT NULL,
	[Registro_Fecha_Creacion] [datetime] NOT NULL,
 CONSTRAINT [PK_Usuarios_Trans] PRIMARY KEY CLUSTERED 
(
	[Usuario_Numero] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[XPS_Registros_Casos_Trans]    Script Date: 1/25/2022 1:59:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[XPS_Registros_Casos_Trans](
	[Registro_Caso_Numero] [int] IDENTITY(1,1) NOT NULL,
	[Registro_Caso_Nombre] [varchar](50) NOT NULL,
	[Registro_Caso_Apellido] [varchar](50) NOT NULL,
	[Registro_Caso_Telefono] [varchar](50) NOT NULL,
	[Registro_Caso_Correo] [varchar](50) NOT NULL,
	[Registro_Documento_Nombre] [varchar](50) NULL,
	[Registro_Documento_Ruta] [varchar](100) NULL,
	[Registro_Documento_Tamano] [varchar](10) NULL,
	[Registro_Caso_Motivo] [varchar](100) NOT NULL,
	[Usuario_Numero] [tinyint] NOT NULL,
	[Registro_Caso_Comentario] [varchar](100) NOT NULL,
	[Registro_Estado] [char](1) NOT NULL,
	[Registro_Usuario] [varchar](50) NOT NULL,
	[Registro_Fecha] [datetime] NOT NULL,
	[Registro_Usuario_Creacion] [varchar](50) NOT NULL,
	[Registro_Fecha_Creacion] [datetime] NOT NULL,
 CONSTRAINT [PK_XPS_Registros_Casos_Trans] PRIMARY KEY CLUSTERED 
(
	[Registro_Caso_Numero] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Sistemas_Parametros_Config] ON 

INSERT [dbo].[Sistemas_Parametros_Config] ([Parametro_Secuencia], [Parametro_Codigo], [Parametro_Valor], [Parametro_Tipo], [Parametro_Explicacion], [Registro_Estado], [Registro_Usuario], [Registro_Fecha]) VALUES (2, N'Ruta_Documentos', N'\\desarrollosrv\Data\XPSDOCS', N'Parametros_Sistema', N'Es una tabla de configuración donde se registran los parámetros y sus especificaciones  para  los sistemas de información, su fuente de datos son los sistemas internos de la SISALRIL en el proceso de desarrollo.', N'A', N'SSRL\x.mejia', CAST(N'2022-01-13T14:40:20.460' AS DateTime))
SET IDENTITY_INSERT [dbo].[Sistemas_Parametros_Config] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuarios_Roles_Cata] ON 

INSERT [dbo].[Usuarios_Roles_Cata] ([Usuario_Rol_Numero], [Usuario_Rol_Nombre], [Registro_Estado], [Registro_Usuario], [Registro_Fecha], [Registro_Usuario_Creacion], [Registro_Fecha_Creacion]) VALUES (1, N'Usuario', N'A', N'SSRL\x.mejia', CAST(N'2022-01-11T11:21:29.560' AS DateTime), N'SSRL\x.mejia', CAST(N'2022-01-11T11:21:29.560' AS DateTime))
INSERT [dbo].[Usuarios_Roles_Cata] ([Usuario_Rol_Numero], [Usuario_Rol_Nombre], [Registro_Estado], [Registro_Usuario], [Registro_Fecha], [Registro_Usuario_Creacion], [Registro_Fecha_Creacion]) VALUES (2, N'Evaluador', N'A', N'SSRL\x.mejia', CAST(N'2022-01-11T11:21:40.940' AS DateTime), N'SSRL\x.mejia', CAST(N'2022-01-11T11:21:40.940' AS DateTime))
SET IDENTITY_INSERT [dbo].[Usuarios_Roles_Cata] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuarios_Trans] ON 

INSERT [dbo].[Usuarios_Trans] ([Usuario_Numero], [Usuario_Nickname], [Usuario_Nombre], [Usuario_Apellido], [Usuario_Email], [Usuario_Password], [Usuario_Rol_Numero], [Registro_Estado], [Registro_Usuario], [Registro_Fecha], [Registro_Usuario_Creacion], [Registro_Fecha_Creacion]) VALUES (1, N'xavier08  ', N'Xavier', N'Mejia', N'x.mejia@xps.es', NULL, 2, N'A', N'SSRL\x.mejia', CAST(N'2022-01-19T14:04:19.930' AS DateTime), N'SSRL\x.mejia', CAST(N'2022-01-19T14:04:19.930' AS DateTime))
INSERT [dbo].[Usuarios_Trans] ([Usuario_Numero], [Usuario_Nickname], [Usuario_Nombre], [Usuario_Apellido], [Usuario_Email], [Usuario_Password], [Usuario_Rol_Numero], [Registro_Estado], [Registro_Usuario], [Registro_Fecha], [Registro_Usuario_Creacion], [Registro_Fecha_Creacion]) VALUES (3, N'Ironman', N'Tony', N'Stark', N'avengers.stark@usa.es', NULL, 1, N'A', N'SSRL\x.mejia', CAST(N'2022-01-25T09:38:57.533' AS DateTime), N'SSRL\x.mejia', CAST(N'2022-01-25T09:38:57.533' AS DateTime))
INSERT [dbo].[Usuarios_Trans] ([Usuario_Numero], [Usuario_Nickname], [Usuario_Nombre], [Usuario_Apellido], [Usuario_Email], [Usuario_Password], [Usuario_Rol_Numero], [Registro_Estado], [Registro_Usuario], [Registro_Fecha], [Registro_Usuario_Creacion], [Registro_Fecha_Creacion]) VALUES (4, N'ElonAmaz1', N'Elon', N'Bezos', N'E.bezos@spacex.es', N'123456789', 1, N'A', N'SSRL\x.mejia', CAST(N'2022-01-25T10:13:36.553' AS DateTime), N'SSRL\x.mejia', CAST(N'2022-01-25T10:13:36.553' AS DateTime))
INSERT [dbo].[Usuarios_Trans] ([Usuario_Numero], [Usuario_Nickname], [Usuario_Nombre], [Usuario_Apellido], [Usuario_Email], [Usuario_Password], [Usuario_Rol_Numero], [Registro_Estado], [Registro_Usuario], [Registro_Fecha], [Registro_Usuario_Creacion], [Registro_Fecha_Creacion]) VALUES (5, N'Test1', N'test', N'testtt', N'tses@.es', N'123', 1, N'A', N'SSRL\x.mejia', CAST(N'2022-01-25T11:06:22.630' AS DateTime), N'SSRL\x.mejia', CAST(N'2022-01-25T11:06:22.630' AS DateTime))
INSERT [dbo].[Usuarios_Trans] ([Usuario_Numero], [Usuario_Nickname], [Usuario_Nombre], [Usuario_Apellido], [Usuario_Email], [Usuario_Password], [Usuario_Rol_Numero], [Registro_Estado], [Registro_Usuario], [Registro_Fecha], [Registro_Usuario_Creacion], [Registro_Fecha_Creacion]) VALUES (7, N'testpostman', N'post', N'man', N'postman@l.es', N'123', 1, N'A', N'SSRL\x.mejia', CAST(N'2022-01-25T11:07:46.480' AS DateTime), N'SSRL\x.mejia', CAST(N'2022-01-25T11:07:46.480' AS DateTime))
SET IDENTITY_INSERT [dbo].[Usuarios_Trans] OFF
GO
SET IDENTITY_INSERT [dbo].[XPS_Registros_Casos_Trans] ON 

INSERT [dbo].[XPS_Registros_Casos_Trans] ([Registro_Caso_Numero], [Registro_Caso_Nombre], [Registro_Caso_Apellido], [Registro_Caso_Telefono], [Registro_Caso_Correo], [Registro_Documento_Nombre], [Registro_Documento_Ruta], [Registro_Documento_Tamano], [Registro_Caso_Motivo], [Usuario_Numero], [Registro_Caso_Comentario], [Registro_Estado], [Registro_Usuario], [Registro_Fecha], [Registro_Usuario_Creacion], [Registro_Fecha_Creacion]) VALUES (6, N'John', N'Wick', N'4015552020', N'w@re.es', N'John', N'XPSCASOS-637781982513245481.jpg', N'0.03mb', N'Movie Action', 1, N'N/A', N'A', N'SSRL\x.mejia', CAST(N'2022-01-19T14:11:18.897' AS DateTime), N'SSRL\x.mejia', CAST(N'2022-01-19T14:11:18.897' AS DateTime))
SET IDENTITY_INSERT [dbo].[XPS_Registros_Casos_Trans] OFF
GO
ALTER TABLE [dbo].[Sistemas_Parametros_Config] ADD  CONSTRAINT [DF_Sistemas_Parametros_Config_Parametro_Tipo]  DEFAULT ('N/A') FOR [Parametro_Tipo]
GO
ALTER TABLE [dbo].[Sistemas_Parametros_Config] ADD  CONSTRAINT [DF_Sistemas_Parametros_Config_Parametro_Explicacion]  DEFAULT ('N/A') FOR [Parametro_Explicacion]
GO
ALTER TABLE [dbo].[Sistemas_Parametros_Config] ADD  CONSTRAINT [DF_Sistemas_Parametros_Config_Registro_Estado]  DEFAULT ('A') FOR [Registro_Estado]
GO
ALTER TABLE [dbo].[Sistemas_Parametros_Config] ADD  CONSTRAINT [DF_Sistemas_Parametros_Config_Registro_Usuario]  DEFAULT (suser_sname()) FOR [Registro_Usuario]
GO
ALTER TABLE [dbo].[Sistemas_Parametros_Config] ADD  CONSTRAINT [DF_Sistemas_Parametros_Config_Registro_Fecha]  DEFAULT (getdate()) FOR [Registro_Fecha]
GO
ALTER TABLE [dbo].[Usuarios_Roles_Cata] ADD  CONSTRAINT [DF_Usuarios_Roles_Cata_Registro_Estado]  DEFAULT ('A') FOR [Registro_Estado]
GO
ALTER TABLE [dbo].[Usuarios_Roles_Cata] ADD  CONSTRAINT [DF_Usuarios_Roles_Cata_Registro_Usuario]  DEFAULT (suser_sname()) FOR [Registro_Usuario]
GO
ALTER TABLE [dbo].[Usuarios_Roles_Cata] ADD  CONSTRAINT [DF_Usuarios_Roles_Cata_Registro_Fecha]  DEFAULT (getdate()) FOR [Registro_Fecha]
GO
ALTER TABLE [dbo].[Usuarios_Roles_Cata] ADD  CONSTRAINT [DF_Usuarios_Roles_Cata_Registro_Usuario_Creacion]  DEFAULT (suser_sname()) FOR [Registro_Usuario_Creacion]
GO
ALTER TABLE [dbo].[Usuarios_Roles_Cata] ADD  CONSTRAINT [DF_Usuarios_Roles_Cata_Registro_Fecha_Creacion]  DEFAULT (getdate()) FOR [Registro_Fecha_Creacion]
GO
ALTER TABLE [dbo].[Usuarios_Trans] ADD  CONSTRAINT [DF_Usuarios_Trans_Registro_Estado]  DEFAULT ('A') FOR [Registro_Estado]
GO
ALTER TABLE [dbo].[Usuarios_Trans] ADD  CONSTRAINT [DF_Usuarios_Trans_Registro_Usuario]  DEFAULT (suser_sname()) FOR [Registro_Usuario]
GO
ALTER TABLE [dbo].[Usuarios_Trans] ADD  CONSTRAINT [DF_Usuarios_Trans_Registro_Fecha]  DEFAULT (getdate()) FOR [Registro_Fecha]
GO
ALTER TABLE [dbo].[Usuarios_Trans] ADD  CONSTRAINT [DF_Usuarios_Trans_Registro_Usuario_Creacion]  DEFAULT (suser_sname()) FOR [Registro_Usuario_Creacion]
GO
ALTER TABLE [dbo].[Usuarios_Trans] ADD  CONSTRAINT [DF_Usuarios_Trans_Registro_Fecha_Creacion]  DEFAULT (getdate()) FOR [Registro_Fecha_Creacion]
GO
ALTER TABLE [dbo].[XPS_Registros_Casos_Trans] ADD  CONSTRAINT [DF_XPS_Registros_Casos_Trans_Registro_Estado]  DEFAULT ('A') FOR [Registro_Estado]
GO
ALTER TABLE [dbo].[XPS_Registros_Casos_Trans] ADD  CONSTRAINT [DF_XPS_Registros_Casos_Trans_Registro_Usuario]  DEFAULT (suser_sname()) FOR [Registro_Usuario]
GO
ALTER TABLE [dbo].[XPS_Registros_Casos_Trans] ADD  CONSTRAINT [DF_XPS_Registros_Casos_Trans_Registro_Fecha]  DEFAULT (getdate()) FOR [Registro_Fecha]
GO
ALTER TABLE [dbo].[XPS_Registros_Casos_Trans] ADD  CONSTRAINT [DF_XPS_Registros_Casos_Trans_Registro_Usuario_Creacion]  DEFAULT (suser_sname()) FOR [Registro_Usuario_Creacion]
GO
ALTER TABLE [dbo].[XPS_Registros_Casos_Trans] ADD  CONSTRAINT [DF_XPS_Registros_Casos_Trans_Registro_Fecha_Creacion]  DEFAULT (getdate()) FOR [Registro_Fecha_Creacion]
GO
ALTER TABLE [dbo].[Usuarios_Trans]  WITH CHECK ADD  CONSTRAINT [FK_Usuarios_Trans_Usuarios_Roles_Cata] FOREIGN KEY([Usuario_Rol_Numero])
REFERENCES [dbo].[Usuarios_Roles_Cata] ([Usuario_Rol_Numero])
GO
ALTER TABLE [dbo].[Usuarios_Trans] CHECK CONSTRAINT [FK_Usuarios_Trans_Usuarios_Roles_Cata]
GO
ALTER TABLE [dbo].[XPS_Registros_Casos_Trans]  WITH CHECK ADD  CONSTRAINT [FK_XPS_Registros_Casos_Trans_Usuarios_Trans] FOREIGN KEY([Usuario_Numero])
REFERENCES [dbo].[Usuarios_Trans] ([Usuario_Numero])
GO
ALTER TABLE [dbo].[XPS_Registros_Casos_Trans] CHECK CONSTRAINT [FK_XPS_Registros_Casos_Trans_Usuarios_Trans]
GO
/****** Object:  StoredProcedure [dbo].[Proc_Ruta_Documento_XPS]    Script Date: 1/25/2022 1:59:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[Proc_Ruta_Documento_XPS]
as 
begin
/*
' Modificacion
'
' Brief Description: devuelve una ruta de documento
'
' Author: x.mejia
' Created Date: 13/01/2022
'*****************************************************************
' Modified By: SSRL\e.sanchez
' Modification Date:
' Purpose of Modification: Revisión y Aplicación Estandares
'*****************************************************************
*/
select Parametro_Valor from Sistemas_Parametros_Config
where Parametro_Codigo= 'Ruta_Documentos'
end 
GO
/****** Object:  StoredProcedure [dbo].[Proc_Usuarios_Inserta]    Script Date: 1/25/2022 1:59:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[Proc_Usuarios_Inserta]
(
-- ______________________________________________________________XPS________________________________
/*
' [Proc_Usuarios_Inserta]
'
' Brief Description: Inserta los usuarios que pueden realizar una solicitud o casos.
'
' Author: x.mejia
' Created Date: 11/01/2022
'*****************************************************************
' Modified By: SSRL\e.sanchez
' Modification Date:
' Purpose of Modification: Revisión y Aplicación Estandares
'*****************************************************************
*/
-- ______________________________________________________________________________________________________
@Usuario_Nickname varchar(50),
@Usuario_Nombre varchar(50),
@Usuario_Apellido varchar(50),
@Usuario_Email varchar(50),
@Usuario_Password varchar(100),
@Usuario_Rol_Numero int
)
AS BEGIN
INSERT INTO Usuarios_Trans
(
Usuario_Nickname,
Usuario_Nombre,
Usuario_Apellido,
Usuario_Email,
Usuario_Password,
Usuario_Rol_Numero,
Registro_Fecha_Creacion,
Registro_Estado,
Registro_Fecha
)
VALUES
(
@Usuario_Nickname,
@Usuario_Nombre,
@Usuario_Apellido,
@Usuario_Email,
@Usuario_Password,
@Usuario_Rol_Numero,
GETDATE(),
'A',
GETDATE()
)
END

GO
/****** Object:  StoredProcedure [dbo].[Proc_Usuarios_Lista]    Script Date: 1/25/2022 1:59:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE procedure [dbo].[Proc_Usuarios_Lista]
-- ______________________________XPS________________________________________________
/*
' [Proc_Usuarios_Lista]
'
' Brief Description: lista los usuarios de XPS.
'
' Author: x.mejia
' Created Date: 11/01/2022
'*****************************************************************
' Modified By: SSRL\e.sanchez
' Modification Date:
' Purpose of Modification: Revisión y Aplicación Estandares
'*****************************************************************
*/
-- __________________________________________________________________________________

AS
BEGIN

SELECT Usuario_Nickname, Usuario_Nombre, Usuario_Apellido, Usuario_Email, Usuario_Rol_Numero
FROM Usuarios_Trans WITH (NOLOCK)
WHERE Registro_Estado = 'A'
	
END
GO
/****** Object:  StoredProcedure [dbo].[Proc_XPS_Registros_Casos_Inserta]    Script Date: 1/25/2022 1:59:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[Proc_XPS_Registros_Casos_Inserta]
(
-- ______________________________XPS________________________________________________
/*
' [Proc_XPS_Registros_Casos_Inserta]
'
' Brief Description: Inserta los casos o solicitudes de XPS.
'
' Author: x.mejia
' Created Date: 11/01/2022
'*****************************************************************
' Modified By: SSRL\e.sanchez
' Modification Date:
' Purpose of Modification: Revisión y Aplicación Estandares
'*****************************************************************
*/
-- __________________________________________________________________________________
@Registro_Caso_Nombre varchar(50),
@Registro_Caso_Apellido varchar(50),
@Registro_Caso_Telefono varchar(50),
@Registro_Caso_Correo varchar(50),
@Registro_Caso_Motivo varchar(100),
@Usuario_Numero int,
@Registro_Caso_Comentario varchar(100),
@Registro_Documento_Nombre varchar(50),
@Registro_Documento_Tamano varchar(10),
@Registro_Documento_Ruta varchar(100)
)
AS BEGIN
INSERT INTO XPS_Registros_Casos_Trans
(
Registro_Caso_Nombre,
Registro_Caso_Apellido,
Registro_Caso_Telefono,
Registro_Caso_Correo,
Registro_Caso_Motivo,
Usuario_Numero,
Registro_Caso_Comentario,
Registro_Documento_Nombre,
Registro_Documento_Tamano,
Registro_Documento_Ruta,
Registro_Fecha_Creacion,
Registro_Estado,
Registro_Fecha
)
VALUES
(
@Registro_Caso_Nombre,
@Registro_Caso_Apellido,
@Registro_Caso_Telefono,
@Registro_Caso_Correo,
@Registro_Caso_Motivo,
@Usuario_Numero,
@Registro_Caso_Comentario,
@Registro_Documento_Nombre,
@Registro_Documento_Tamano,
@Registro_Documento_Ruta,
GETDATE(),
'A',
GETDATE()
)
END

GO
/****** Object:  StoredProcedure [dbo].[Proc_XPS_Registros_Casos_Lista]    Script Date: 1/25/2022 1:59:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE procedure [dbo].[Proc_XPS_Registros_Casos_Lista]
(
-- ______________________________XPS________________________________________________
/*
' [Proc_XPS_Registros_Casos_Lista]
'
' Brief Description: lista los casos o solicitudes de XPS.
'
' Author: x.mejia
' Created Date: 11/01/2022
'*****************************************************************
' Modified By: SSRL\e.sanchez
' Modification Date:
' Purpose of Modification: Revisión y Aplicación Estandares
'*****************************************************************
*/
-- __________________________________________________________________________________
--Proc_XPS_Registros_Casos_Lista 1,10,joh
@Pageindex int,
@PageSize int,
@filtro varchar(50) 
)
AS
BEGIN


  Declare @PageIni int;
  Declare @PageEnd int;
  Declare @TotalRegistros int;

  Set @PageIni = 0;
  Set @PageEnd = 0;

  Set @PageIndex = Case When @PageIndex = 0 then 1 else @PageIndex end;  
  Set @Pageend = (@PageIndex*@PageSize);
  Set @PageIni = @Pageend-@PageSize;  

SELECT  XRCT.Registro_Caso_Numero,
        XRCT.Registro_Caso_Nombre,
	   XRCT.Registro_Caso_Apellido,
	   XRCT.Registro_Caso_Telefono,
	   XRCT.Registro_Caso_Correo,
	   XRCT.Registro_Caso_Motivo,
	   XRCT.Registro_Documento_Ruta,
	   UT.Usuario_Nickname,
	   XRCT.Registro_Caso_Comentario
		 INTO #Tempo 
		 from XPS_Registros_Casos_Trans XRCT With(nolock)

	     JOIN  Usuarios_Trans UT
		 ON   XRCT.Usuario_Numero = UT.Usuario_Numero

           where ( ( @filtro is null) Or ( @filtro = CONVERT(varchar(50),XRCT.Registro_Caso_Numero ) or  XRCT.Registro_Caso_Nombre
		 like '%' + @filtro + '%'))
		 and   XRCT.Registro_Estado='A' 
		 and   UT.Registro_Estado='A'
		
		  
		 
		


		 SET @TotalRegistros = (SELECT COUNT(Registro_Caso_Numero) FROM #Tempo);


	 IF @PageEnd > @TotalRegistros 
		 BEGIN
			SET @PageEnd = @TotalRegistros
		 END
		 IF @PageIni > @TotalRegistros
		  BEGIN
			RAISERROR('Ha exedido el numero de paginas, ERROR 404',16,2)
		     Return
		  END
	 -- Devolver Resultado
	  SELECT *,
			 Linea = @PageIni + 1,
			 Ultima_Linea = @PageEnd, 
			 Cantidad_Registros = @TotalRegistros
		FROM #Tempo
		ORDER BY Registro_Caso_Numero 
		DESC OFFSET @PageIni ROWS FETCH NEXT @PageSize ROWS ONLY 
		
	
	  
  DROP TABLE #Tempo

END
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Es una tabla de configuración donde se registran los parámetros y sus especificaciones  para  los sistemas de información, su fuente de datos son los sistemas internos de la XPS en el proceso de desarrollo.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Sistemas_Parametros_Config'
GO
