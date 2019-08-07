import { IContent } from './IContent';

export interface ICategory
{
	ID : number,
	Title : string,
	ShortText : string,
	Description : string,
	Active : boolean,

	Mesaj : string,

	ContentList : Array<IContent>,
}
