import { ICategoryT } from './ICategoryT';

export interface ICategory
{
	ID : number,
	ParentID : number,
	Title : string,
	Url : string,
	Code : string,
	Active : boolean,
	Deleted : boolean,
	Guid : string,

	Mesaj : string,

    CategoryTList: Array<ICategoryT>,
    ParentCategories: any[]
}
