export interface IFile
{
	ID : number,
	Title : string,
	Description : string,
	FileUrl : string,
	Code : string,
	Active : boolean,
	Deleted : boolean,

	Mesaj : string,

	OldFileUrl: string,
	FileUrlHasFile : boolean,
}
