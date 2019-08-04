import { IContentT } from './IContentT';

export interface IContent
{
	ID : number,
	Title : string,
	Url : string,
	Code : string,
	Active : boolean,
	Deleted : boolean,
	Guid : string,

	Mesaj : string,

	ContentTList : Array<IContentT>,
}
