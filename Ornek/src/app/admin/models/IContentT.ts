export interface IContentT
{
	ID : number,
	ContID : number,
	TransID : number,
	ContentName : string,
	ShortText1 : string,
	ShortText2 : string,
	Description : string,
	Deleted : boolean,

	Mesaj : string,

	ContentList : any[],
	TranslationList : any[],

	ContentAdi : string,
	TranslationAdi : string,
}
