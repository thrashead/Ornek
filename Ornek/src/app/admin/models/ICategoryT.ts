export interface ICategoryT
{
	ID : number,
	CatID : number,
	TransID : number,
	CategoryName : string,
	ShortText1 : string,
	ShortText2 : string,
	Description : string,
	Deleted : boolean,

	Mesaj : string,

	CategoryList : any[],
	TranslationList : any[],

	CategoryAdi : string,
	TranslationAdi : string,
}
