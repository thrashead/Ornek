using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Repository.CategoryTModel
{
	public interface ICategoryT
	{
		#region Model

		int ID { get; set; }
		int CatID { get; set; }
		int TransID { get; set; }
		string CategoryName { get; set; }
		string ShortText1 { get; set; }
		string ShortText2 { get; set; }
		string Description { get; set; }
		bool Deleted { get; set; }

		string Mesaj { get; set; }

		List<SelectListItem> CategoryList { get; set; }
		List<SelectListItem> TranslationList { get; set; }

		string CategoryAdi { get; set; }
		string TranslationAdi { get; set; }

		#endregion

		#region Methods

		List<CategoryT> List(int? id, int? top, bool relation);
		List<CategoryT> ListAll(int? id, bool relation);
		ICategoryT Select(int? id, bool relation);
		ICategoryT Insert(ICategoryT table, int? catID, int? transID);
		bool Insert(ICategoryT table);
		ICategoryT Update(int? id, ICategoryT table);
		bool Update(ICategoryT table);
		bool Copy(int id);
		bool Delete(int? id);
		bool Remove(int? id);

		#endregion
	}
}
