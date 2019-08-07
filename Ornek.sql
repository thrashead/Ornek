/****** Object:  Table [dbo].[Category]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ParentID] [int] NOT NULL,
	[Title] [nvarchar](255) NOT NULL,
	[Url] [nvarchar](255) NOT NULL,
	[Code] [nvarchar](10) NULL,
	[Active] [bit] NOT NULL,
	[Deleted] [bit] NOT NULL,
	[Guid] [nvarchar](25) NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CategoryT]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CategoryT](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CatID] [int] NOT NULL,
	[TransID] [int] NOT NULL,
	[CategoryName] [nvarchar](255) NOT NULL,
	[ShortText1] [nvarchar](255) NULL,
	[ShortText2] [nvarchar](255) NULL,
	[Description] [nvarchar](max) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_CategoryT] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Content]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Content](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](255) NOT NULL,
	[Url] [nvarchar](255) NOT NULL,
	[Code] [nvarchar](10) NULL,
	[Active] [bit] NOT NULL,
	[Deleted] [bit] NOT NULL,
	[Guid] [nvarchar](25) NOT NULL,
 CONSTRAINT [PK_Content] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ContentT]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContentT](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ContID] [int] NOT NULL,
	[TransID] [int] NOT NULL,
	[ContentName] [nvarchar](255) NOT NULL,
	[ShortText1] [nvarchar](255) NULL,
	[ShortText2] [nvarchar](255) NULL,
	[Description] [nvarchar](max) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_ContentT] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[File]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[File](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[FileUrl] [nvarchar](max) NULL,
	[Code] [nvarchar](10) NULL,
	[Active] [bit] NOT NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_File] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Picture]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Picture](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[PictureUrl] [nvarchar](max) NULL,
	[Code] [nvarchar](10) NULL,
	[Active] [bit] NOT NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_Picture] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Translation]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Translation](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[TransName] [nvarchar](25) NOT NULL,
	[ShortName] [nvarchar](5) NOT NULL,
	[Flag] [nvarchar](25) NULL,
	[Active] [bit] NOT NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_Translation] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [IX_Translation] UNIQUE NONCLUSTERED 
(
	[TransName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [IX_Translation_1] UNIQUE NONCLUSTERED 
(
	[ShortName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](25) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
	[Active] [bit] NOT NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [IX_Users] UNIQUE NONCLUSTERED 
(
	[Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Category] ADD  CONSTRAINT [DF_Category_ParentID]  DEFAULT ((0)) FOR [ParentID]
GO
ALTER TABLE [dbo].[Category] ADD  CONSTRAINT [DF_Category_Active]  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[Category] ADD  CONSTRAINT [DF_Category_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[CategoryT] ADD  CONSTRAINT [DF_CategoryT_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[ContentT] ADD  CONSTRAINT [DF_ContentT_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[File] ADD  CONSTRAINT [DF_File_Active]  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[Picture] ADD  CONSTRAINT [DF_Picture_Active]  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[Translation] ADD  CONSTRAINT [DF_Translation_Active]  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_Active]  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[CategoryT]  WITH CHECK ADD  CONSTRAINT [FK_CategoryT_Category] FOREIGN KEY([CatID])
REFERENCES [dbo].[Category] ([ID])
GO
ALTER TABLE [dbo].[CategoryT] CHECK CONSTRAINT [FK_CategoryT_Category]
GO
ALTER TABLE [dbo].[CategoryT]  WITH CHECK ADD  CONSTRAINT [FK_CategoryT_Translation] FOREIGN KEY([TransID])
REFERENCES [dbo].[Translation] ([ID])
GO
ALTER TABLE [dbo].[CategoryT] CHECK CONSTRAINT [FK_CategoryT_Translation]
GO
ALTER TABLE [dbo].[ContentT]  WITH CHECK ADD  CONSTRAINT [FK_ContentT_Content] FOREIGN KEY([ContID])
REFERENCES [dbo].[Content] ([ID])
GO
ALTER TABLE [dbo].[ContentT] CHECK CONSTRAINT [FK_ContentT_Content]
GO
ALTER TABLE [dbo].[ContentT]  WITH CHECK ADD  CONSTRAINT [FK_ContentT_Translation] FOREIGN KEY([TransID])
REFERENCES [dbo].[Translation] ([ID])
GO
ALTER TABLE [dbo].[ContentT] CHECK CONSTRAINT [FK_ContentT_Translation]
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryCopy]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryCopy]
	@ID int
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[Category] ([ParentID],[Title],[Url],[Code],[Active],[Deleted],[Guid])
	SELECT A.[ParentID], A.[Title] + ' (Kopya)', A.[Url] + '-(Kopya)', A.[Code], A.[Active], A.[Deleted], A.[Guid] FROM [dbo].[Category] A WHERE A.[ID] = @ID

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryDelete]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryDelete]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	DELETE
	FROM [dbo].[Category]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryInsert]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryInsert]
	@ParentID int,
	@Title nvarchar(255),
	@Url nvarchar(255),
	@Code nvarchar(10) = NULL,
	@Active bit,
	@Guid nvarchar(25)
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[Category] ([ParentID],[Title],[Url],[Code],[Active],[Deleted],[Guid])
	SELECT @ParentID, @Title, @Url, @Code, @Active, 0, @Guid

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryParentSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROC [dbo].[usp_CategoryParentSelect] 
    @ID int
AS 
	SET NOCOUNT ON 
	SET XACT_ABORT ON  

	BEGIN TRAN

	SELECT [ID], [Title] 
	FROM   [dbo].[Category] 
	WHERE  ([ID] <> @ID or @ID is null) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryRemove]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryRemove]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[Category] SET [Deleted] = 1
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategorySelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategorySelect]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [ParentID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Category]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategorySelectAll]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategorySelectAll]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [ParentID], [Title], [Url], [Code], [Active], [Deleted], [Guid]
	FROM [dbo].[Category]
	WHERE ([ID] = @ID OR @ID IS NULL)

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategorySelectByCode]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategorySelectByCode]
	@Code nvarchar(10)
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [ParentID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Category]
	WHERE ([Code] = @Code OR @Code IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategorySelectByGuid]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategorySelectByGuid]
	@Guid nvarchar(25)
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (1) [ID], [ParentID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Category]
	WHERE ([Guid] = @Guid OR @Guid IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategorySelectByUrl]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategorySelectByUrl]
	@Url nvarchar(255)
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (1) [ID], [ParentID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Category]
	WHERE ([Url] = @Url OR @Url IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategorySelectTop]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategorySelectTop]
	@ID int,
	@Top int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (@Top) [ID], [ParentID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Category]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryT_CategoryByLinkedIDSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryT_CategoryByLinkedIDSelect]
	@CatID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID],[CatID],[TransID],[CategoryName],[ShortText1],[ShortText2],[Description],
	(SELECT A.Title FROM Category A WHERE A.ID = CatID) as CategoryAdi
	FROM [dbo].[CategoryT]
	WHERE ([CatID] = @CatID OR @CatID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryT_TranslationByLinkedIDSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryT_TranslationByLinkedIDSelect]
	@TransID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID],[CatID],[TransID],[CategoryName],[ShortText1],[ShortText2],[Description],
	(SELECT A.TransName FROM Translation A WHERE A.ID = TransID) as TranslationAdi
	FROM [dbo].[CategoryT]
	WHERE ([TransID] = @TransID OR @TransID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryTCopy]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryTCopy]
	@ID int
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[CategoryT] ([CatID],[TransID],[CategoryName],[ShortText1],[ShortText2],[Description],[Deleted])
	SELECT A.[CatID], A.[TransID], A.[CategoryName] + ' (Kopya)', A.[ShortText1], A.[ShortText2], A.[Description], A.[Deleted] FROM [dbo].[CategoryT] A WHERE A.[ID] = @ID

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryTDelete]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryTDelete]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	DELETE
	FROM [dbo].[CategoryT]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryTInsert]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryTInsert]
	@CatID int,
	@TransID int,
	@CategoryName nvarchar(255),
	@ShortText1 nvarchar(255) = NULL,
	@ShortText2 nvarchar(255) = NULL,
	@Description nvarchar(MAX) = NULL
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[CategoryT] ([CatID],[TransID],[CategoryName],[ShortText1],[ShortText2],[Description],[Deleted])
	SELECT @CatID, @TransID, @CategoryName, @ShortText1, @ShortText2, @Description, 0

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryTLinkedSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryTLinkedSelect]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID],[CatID],[TransID],[CategoryName],[ShortText1],[ShortText2],[Description],
		(SELECT A.Title FROM Category A WHERE A.ID = CatID) as CategoryAdi,
		(SELECT B.TransName FROM Translation B WHERE B.ID = TransID) as TranslationAdi
	FROM [dbo].[CategoryT]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryTRemove]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryTRemove]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[CategoryT] SET [Deleted] = 1
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryTSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryTSelect]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [CatID], [TransID], [CategoryName], [ShortText1], [ShortText2], [Description]
	FROM [dbo].[CategoryT]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryTSelectAll]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryTSelectAll]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [CatID], [TransID], [CategoryName], [ShortText1], [ShortText2], [Description], [Deleted]
	FROM [dbo].[CategoryT]
	WHERE ([ID] = @ID OR @ID IS NULL)

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryTSelectTop]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryTSelectTop]
	@ID int,
	@Top int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (@Top) [ID], [CatID], [TransID], [CategoryName], [ShortText1], [ShortText2], [Description]
	FROM [dbo].[CategoryT]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryTUpdate]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryTUpdate]
	@ID int,
	@CatID int,
	@TransID int,
	@CategoryName nvarchar(255),
	@ShortText1 nvarchar(255) = NULL,
	@ShortText2 nvarchar(255) = NULL,
	@Description nvarchar(MAX) = NULL
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[CategoryT]
	SET [CatID] = @CatID,[TransID] = @TransID,[CategoryName] = @CategoryName,[ShortText1] = @ShortText1,[ShortText2] = @ShortText2,[Description] = @Description
	WHERE [ID] = @ID

	SELECT [ID], [CatID], [TransID], [CategoryName], [ShortText1], [ShortText2], [Description]
	FROM [dbo].[CategoryT]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_CategoryUpdate]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_CategoryUpdate]
	@ID int,
	@ParentID int,
	@Title nvarchar(255),
	@Url nvarchar(255),
	@Code nvarchar(10) = NULL,
	@Active bit
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[Category]
	SET [ParentID] = @ParentID,[Title] = @Title,[Url] = @Url,[Code] = @Code,[Active] = @Active
	WHERE [ID] = @ID

	SELECT [ID], [ParentID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Category]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentCopy]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentCopy]
	@ID int
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[Content] ([Title],[Url],[Code],[Active],[Deleted],[Guid])
	SELECT A.[Title] + ' (Kopya)', A.[Url] + '-(Kopya)', A.[Code], A.[Active], A.[Deleted], A.[Guid] FROM [dbo].[Content] A WHERE A.[ID] = @ID

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentDelete]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentDelete]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	DELETE
	FROM [dbo].[Content]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentInsert]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentInsert]
	@Title nvarchar(255),
	@Url nvarchar(255),
	@Code nvarchar(10) = NULL,
	@Active bit,
	@Guid nvarchar(25)
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[Content] ([Title],[Url],[Code],[Active],[Deleted],[Guid])
	SELECT @Title, @Url, @Code, @Active, 0, @Guid

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentRemove]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentRemove]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[Content] SET [Deleted] = 1
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentSelect]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Content]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentSelectAll]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentSelectAll]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [Title], [Url], [Code], [Active], [Deleted], [Guid]
	FROM [dbo].[Content]
	WHERE ([ID] = @ID OR @ID IS NULL)

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentSelectByCode]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentSelectByCode]
	@Code nvarchar(10)
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Content]
	WHERE ([Code] = @Code OR @Code IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentSelectByGuid]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentSelectByGuid]
	@Guid nvarchar(25)
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (1) [ID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Content]
	WHERE ([Guid] = @Guid OR @Guid IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentSelectByUrl]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentSelectByUrl]
	@Url nvarchar(255)
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (1) [ID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Content]
	WHERE ([Url] = @Url OR @Url IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentSelectTop]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentSelectTop]
	@ID int,
	@Top int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (@Top) [ID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Content]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentT_ContentByLinkedIDSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentT_ContentByLinkedIDSelect]
	@ContID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID],[ContID],[TransID],[ContentName],[ShortText1],[ShortText2],[Description],
	(SELECT A.Title FROM Content A WHERE A.ID = ContID) as ContentAdi
	FROM [dbo].[ContentT]
	WHERE ([ContID] = @ContID OR @ContID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentT_TranslationByLinkedIDSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentT_TranslationByLinkedIDSelect]
	@TransID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID],[ContID],[TransID],[ContentName],[ShortText1],[ShortText2],[Description],
	(SELECT A.TransName FROM Translation A WHERE A.ID = TransID) as TranslationAdi
	FROM [dbo].[ContentT]
	WHERE ([TransID] = @TransID OR @TransID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentTCopy]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentTCopy]
	@ID int
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[ContentT] ([ContID],[TransID],[ContentName],[ShortText1],[ShortText2],[Description],[Deleted])
	SELECT A.[ContID], A.[TransID], A.[ContentName] + ' (Kopya)', A.[ShortText1], A.[ShortText2], A.[Description], A.[Deleted] FROM [dbo].[ContentT] A WHERE A.[ID] = @ID

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentTDelete]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentTDelete]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	DELETE
	FROM [dbo].[ContentT]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentTInsert]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentTInsert]
	@ContID int,
	@TransID int,
	@ContentName nvarchar(255),
	@ShortText1 nvarchar(255) = NULL,
	@ShortText2 nvarchar(255) = NULL,
	@Description nvarchar(MAX) = NULL
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[ContentT] ([ContID],[TransID],[ContentName],[ShortText1],[ShortText2],[Description],[Deleted])
	SELECT @ContID, @TransID, @ContentName, @ShortText1, @ShortText2, @Description, 0

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentTLinkedSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentTLinkedSelect]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID],[ContID],[TransID],[ContentName],[ShortText1],[ShortText2],[Description],
		(SELECT A.Title FROM Content A WHERE A.ID = ContID) as ContentAdi,
		(SELECT B.TransName FROM Translation B WHERE B.ID = TransID) as TranslationAdi
	FROM [dbo].[ContentT]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentTRemove]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentTRemove]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[ContentT] SET [Deleted] = 1
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentTSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentTSelect]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [ContID], [TransID], [ContentName], [ShortText1], [ShortText2], [Description]
	FROM [dbo].[ContentT]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentTSelectAll]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentTSelectAll]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [ContID], [TransID], [ContentName], [ShortText1], [ShortText2], [Description], [Deleted]
	FROM [dbo].[ContentT]
	WHERE ([ID] = @ID OR @ID IS NULL)

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentTSelectTop]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentTSelectTop]
	@ID int,
	@Top int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (@Top) [ID], [ContID], [TransID], [ContentName], [ShortText1], [ShortText2], [Description]
	FROM [dbo].[ContentT]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentTUpdate]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentTUpdate]
	@ID int,
	@ContID int,
	@TransID int,
	@ContentName nvarchar(255),
	@ShortText1 nvarchar(255) = NULL,
	@ShortText2 nvarchar(255) = NULL,
	@Description nvarchar(MAX) = NULL
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[ContentT]
	SET [ContID] = @ContID,[TransID] = @TransID,[ContentName] = @ContentName,[ShortText1] = @ShortText1,[ShortText2] = @ShortText2,[Description] = @Description
	WHERE [ID] = @ID

	SELECT [ID], [ContID], [TransID], [ContentName], [ShortText1], [ShortText2], [Description]
	FROM [dbo].[ContentT]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_ContentUpdate]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_ContentUpdate]
	@ID int,
	@Title nvarchar(255),
	@Url nvarchar(255),
	@Code nvarchar(10) = NULL,
	@Active bit
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[Content]
	SET [Title] = @Title,[Url] = @Url,[Code] = @Code,[Active] = @Active
	WHERE [ID] = @ID

	SELECT [ID], [Title], [Url], [Code], [Active], [Guid]
	FROM [dbo].[Content]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_FileCopy]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_FileCopy]
	@ID int
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[File] ([Title],[Description],[FileUrl],[Code],[Active],[Deleted])
	SELECT A.[Title] + ' (Kopya)', A.[Description], 'Kopya_' + A.[FileUrl], A.[Code], A.[Active], A.[Deleted] FROM [dbo].[File] A WHERE A.[ID] = @ID

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_FileDelete]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_FileDelete]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	DELETE
	FROM [dbo].[File]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_FileInsert]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_FileInsert]
	@Title nvarchar(50),
	@Description nvarchar(MAX) = NULL,
	@FileUrl nvarchar(MAX) = NULL,
	@Code nvarchar(10) = NULL,
	@Active bit
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[File] ([Title],[Description],[FileUrl],[Code],[Active],[Deleted])
	SELECT @Title, @Description, @FileUrl, @Code, @Active, 0

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_FileRemove]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_FileRemove]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[File] SET [Deleted] = 1
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_FileSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_FileSelect]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [Title], [Description], [FileUrl], [Code], [Active]
	FROM [dbo].[File]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_FileSelectAll]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_FileSelectAll]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [Title], [Description], [FileUrl], [Code], [Active], [Deleted]
	FROM [dbo].[File]
	WHERE ([ID] = @ID OR @ID IS NULL)

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_FileSelectByCode]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_FileSelectByCode]
	@Code nvarchar(10)
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [Title], [Description], [FileUrl], [Code], [Active]
	FROM [dbo].[File]
	WHERE ([Code] = @Code OR @Code IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_FileSelectTop]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_FileSelectTop]
	@ID int,
	@Top int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (@Top) [ID], [Title], [Description], [FileUrl], [Code], [Active]
	FROM [dbo].[File]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_FileUpdate]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_FileUpdate]
	@ID int,
	@Title nvarchar(50),
	@Description nvarchar(MAX) = NULL,
	@FileUrl nvarchar(MAX) = NULL,
	@Code nvarchar(10) = NULL,
	@Active bit
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[File]
	SET [Title] = @Title,[Description] = @Description,[FileUrl] = @FileUrl,[Code] = @Code,[Active] = @Active
	WHERE [ID] = @ID

	SELECT [ID], [Title], [Description], [FileUrl], [Code], [Active]
	FROM [dbo].[File]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_PictureCopy]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_PictureCopy]
	@ID int
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[Picture] ([Title],[Description],[PictureUrl],[Code],[Active],[Deleted])
	SELECT A.[Title] + ' (Kopya)', A.[Description], 'Kopya_' + A.[PictureUrl], A.[Code], A.[Active], A.[Deleted] FROM [dbo].[Picture] A WHERE A.[ID] = @ID

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_PictureDelete]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_PictureDelete]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	DELETE
	FROM [dbo].[Picture]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_PictureInsert]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_PictureInsert]
	@Title nvarchar(50),
	@Description nvarchar(MAX) = NULL,
	@PictureUrl nvarchar(MAX) = NULL,
	@Code nvarchar(10) = NULL,
	@Active bit
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[Picture] ([Title],[Description],[PictureUrl],[Code],[Active],[Deleted])
	SELECT @Title, @Description, @PictureUrl, @Code, @Active, 0

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_PictureRemove]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_PictureRemove]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[Picture] SET [Deleted] = 1
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_PictureSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_PictureSelect]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [Title], [Description], [PictureUrl], [Code], [Active]
	FROM [dbo].[Picture]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_PictureSelectAll]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_PictureSelectAll]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [Title], [Description], [PictureUrl], [Code], [Active], [Deleted]
	FROM [dbo].[Picture]
	WHERE ([ID] = @ID OR @ID IS NULL)

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_PictureSelectByCode]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_PictureSelectByCode]
	@Code nvarchar(10)
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [Title], [Description], [PictureUrl], [Code], [Active]
	FROM [dbo].[Picture]
	WHERE ([Code] = @Code OR @Code IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_PictureSelectTop]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_PictureSelectTop]
	@ID int,
	@Top int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (@Top) [ID], [Title], [Description], [PictureUrl], [Code], [Active]
	FROM [dbo].[Picture]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_PictureUpdate]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_PictureUpdate]
	@ID int,
	@Title nvarchar(50),
	@Description nvarchar(MAX) = NULL,
	@PictureUrl nvarchar(MAX) = NULL,
	@Code nvarchar(10) = NULL,
	@Active bit
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[Picture]
	SET [Title] = @Title,[Description] = @Description,[PictureUrl] = @PictureUrl,[Code] = @Code,[Active] = @Active
	WHERE [ID] = @ID

	SELECT [ID], [Title], [Description], [PictureUrl], [Code], [Active]
	FROM [dbo].[Picture]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_TranslationCopy]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_TranslationCopy]
	@ID int
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[Translation] ([TransName],[ShortName],[Flag],[Active],[Deleted])
	SELECT A.[TransName] + ' (Kopya)', A.[ShortName], 'Kopya_' + A.[Flag], A.[Active], A.[Deleted] FROM [dbo].[Translation] A WHERE A.[ID] = @ID

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_TranslationDelete]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_TranslationDelete]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	DELETE
	FROM [dbo].[Translation]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_TranslationInsert]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_TranslationInsert]
	@TransName nvarchar(25),
	@ShortName nvarchar(5),
	@Flag nvarchar(25) = NULL,
	@Active bit
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[Translation] ([TransName],[ShortName],[Flag],[Active],[Deleted])
	SELECT @TransName, @ShortName, @Flag, @Active, 0

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_TranslationRemove]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_TranslationRemove]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[Translation] SET [Deleted] = 1
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_TranslationSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_TranslationSelect]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [TransName], [ShortName], [Flag], [Active]
	FROM [dbo].[Translation]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_TranslationSelectAll]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_TranslationSelectAll]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [TransName], [ShortName], [Flag], [Active], [Deleted]
	FROM [dbo].[Translation]
	WHERE ([ID] = @ID OR @ID IS NULL)

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_TranslationSelectTop]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_TranslationSelectTop]
	@ID int,
	@Top int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (@Top) [ID], [TransName], [ShortName], [Flag], [Active]
	FROM [dbo].[Translation]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_TranslationUpdate]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_TranslationUpdate]
	@ID int,
	@TransName nvarchar(25),
	@ShortName nvarchar(5),
	@Flag nvarchar(25) = NULL,
	@Active bit
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[Translation]
	SET [TransName] = @TransName,[ShortName] = @ShortName,[Flag] = @Flag,[Active] = @Active
	WHERE [ID] = @ID

	SELECT [ID], [TransName], [ShortName], [Flag], [Active]
	FROM [dbo].[Translation]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_UsersCopy]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_UsersCopy]
	@ID int
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[Users] ([Username],[Password],[Active],[Deleted])
	SELECT A.[Username] + ' (Kopya)', A.[Password], A.[Active], A.[Deleted] FROM [dbo].[Users] A WHERE A.[ID] = @ID

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_UsersDelete]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_UsersDelete]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	DELETE
	FROM [dbo].[Users]
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_UsersInsert]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_UsersInsert]
	@Username nvarchar(25),
	@Password nvarchar(50),
	@Active bit
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [dbo].[Users] ([Username],[Password],[Active],[Deleted])
	SELECT @Username, @Password, @Active, 0

	SELECT cast(@@IDENTITY as int)
END;
GO
/****** Object:  StoredProcedure [dbo].[usp_UsersOldPasswordSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROC [dbo].[usp_UsersOldPasswordSelect] 
    @ID int
AS 
	SET NOCOUNT ON 
	SET XACT_ABORT ON  

	BEGIN TRAN

	SELECT [Password]
	FROM   [dbo].[Users] 
	WHERE  ([ID] = @ID OR @ID IS NULL) 

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_UsersRemove]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_UsersRemove]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[Users] SET [Deleted] = 1
	WHERE [ID] = @ID

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_UsersSelect]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_UsersSelect]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [Username], [Password], [Active]
	FROM [dbo].[Users]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_UsersSelectAll]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_UsersSelectAll]
	@ID int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT [ID], [Username], [Password], [Active], [Deleted]
	FROM [dbo].[Users]
	WHERE ([ID] = @ID OR @ID IS NULL)

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_UsersSelectLogin]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROC [dbo].[usp_UsersSelectLogin] 
    @Username nvarchar(25),
    @Password nvarchar(50)
AS 
	SET NOCOUNT ON 
	SET XACT_ABORT ON  

	BEGIN TRAN

	SELECT Top 1 U.[ID], U.[Username], U.[Password], U.[Active] 
	FROM   [dbo].[Users] U
	WHERE  U.[Username] = @Username
	and U.[Password] = @Password 
	and U.[Active] = 1 
	and U.[Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_UsersSelectTop]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_UsersSelectTop]
	@ID int,
	@Top int
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	SELECT Top (@Top) [ID], [Username], [Password], [Active]
	FROM [dbo].[Users]
	WHERE ([ID] = @ID OR @ID IS NULL) and [Deleted] = 0

	COMMIT
GO
/****** Object:  StoredProcedure [dbo].[usp_UsersUpdate]    Script Date: 5.08.2019 10:52:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_UsersUpdate]
	@ID int,
	@Username nvarchar(25),
	@Password nvarchar(50),
	@Active bit
AS
	SET NOCOUNT ON
	SET XACT_ABORT ON

	BEGIN TRAN

	UPDATE [dbo].[Users]
	SET [Username] = @Username,[Password] = @Password,[Active] = @Active
	WHERE [ID] = @ID

	SELECT [ID], [Username], [Password], [Active]
	FROM [dbo].[Users]
	WHERE [ID] = @ID

	COMMIT
GO
