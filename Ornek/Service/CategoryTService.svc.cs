using System;
using System.Linq;
using System.Collections.Generic;
using TDLibrary;
using Repository.CategoryTModel;

namespace Ornek.Service
{
	public class CategoryTService : ICategoryTService
	{
		CategoryT model = new CategoryT();

		public List<CategoryTData> Select(string top)
		{
			int _top;
			bool con = int.TryParse(top, out _top);

			if (con)
				return model.List(null, _top).ChangeModelList<CategoryTData, CategoryT>();

			return model.List(null).ChangeModelList<CategoryTData, CategoryT>();
		}

		public List<CategoryTData> SelectAll(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.ListAll(_id).ChangeModelList<CategoryTData, CategoryT>();

			return model.ListAll(null).ChangeModelList<CategoryTData, CategoryT>();
		}

		public CategoryTData SelectByID(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.Select(_id).ChangeModel<CategoryTData>();

			return model.List(null).FirstOrDefault().ChangeModel<CategoryTData>();
		}

		public bool Insert(CategoryTData table)
		{
			if (table != null)
				return model.Insert(table.ChangeModel<CategoryT>());

			return false;
		}

		public bool Update(CategoryTData table)
		{
			if (table != null)
				return model.Update(table.ChangeModel<CategoryT>());

			return false;
		}

		public bool Copy(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.Copy(_id);

			return false;
		}

		public bool Delete(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.Delete(_id);

			return false;
		}

		public bool Remove(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.Remove(_id);

			return false;
		}
	}
}
