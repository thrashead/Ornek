using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Repository.ContentModel
{
	public interface IContent
	{
		#region Model

		int ID { get; set; }
		int? CatID { get; set; }
		string Title { get; set; }
		string ShortText { get; set; }
		string Description { get; set; }
		bool Active { get; set; }

		string Mesaj { get; set; }

		List<SelectListItem> CategoryList { get; set; }

		string CategoryAdi { get; set; }

		#endregion

		#region Methods

		List<Content> List(int? id, int? top, bool relation);
		List<Content> ListAll(int? id, bool relation);
		IContent Select(int? id, bool relation);
		IContent Insert(IContent table, int? catID);
		bool Insert(IContent table);
		IContent Update(int? id, IContent table);
		bool Update(IContent table);
		bool Copy(int id);
		bool Delete(int? id);

		#endregion
	}
}
