using System;
using System.Collections.Generic;
using System.Web.Mvc;
using Repository.CategoryTModel;

namespace Repository.CategoryModel
{
	public interface ICategory
	{
		#region Model

		int ID { get; set; }
		int ParentID { get; set; }
		string Title { get; set; }
		string Url { get; set; }
		string Code { get; set; }
		bool Active { get; set; }
		bool Deleted { get; set; }
		string Guid { get; set; }

		string Mesaj { get; set; }
        List<SelectListItem> ParentCategories { get; set; }

        List<ICategoryT> CategoryTList { get; set; }

		#endregion

		#region Methods

		List<Category> List(int? id, int? top, bool relation);
		List<Category> ListAll(int? id, bool relation);
		ICategory Select(int? id, bool relation);
		ICategory SelectByUrl(string url, bool relation);
		ICategory SelectByGuid(string guid, bool relation);
		List<Category> SelectByCode(string code, bool relation);
		ICategory Insert(ICategory table, bool? none);
		bool Insert(ICategory table);
		ICategory Update(int? id, ICategory table);
		bool Update(ICategory table);
		bool Copy(int id);
		bool Delete(int? id);
		bool Remove(int? id);

		#endregion
	}
}
