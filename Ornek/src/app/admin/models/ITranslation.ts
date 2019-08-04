import { ICategoryT } from './ICategoryT';
import { IContentT } from './IContentT';

export interface ITranslation
{
	ID : number,
	TransName : string,
	ShortName : string,
	Flag : string,
	Active : boolean,
	Deleted : boolean,

	Mesaj : string,

	CategoryTList : Array<ICategoryT>,
	ContentTList : Array<IContentT>,

	OldFlag: string,
	FlagHasFile : boolean,
}
