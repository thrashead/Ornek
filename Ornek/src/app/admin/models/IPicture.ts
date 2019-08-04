export interface IPicture
{
	ID : number,
	Title : string,
	Description : string,
	PictureUrl : string,
	ThumbUrl : string,
	Code : string,
	Active : boolean,
	Deleted : boolean,

	Mesaj : string,

	OldPictureUrl: string,
	PictureUrlHasFile : boolean,

	OldThumbUrl: string,
	ThumbUrlHasFile : boolean,
}
