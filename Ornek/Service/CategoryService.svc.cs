using System;
using System.Linq;
using System.Collections.Generic;
using TDLibrary;
using Repository.CategoryModel;

namespace Ornek.Service
{
	public class CategoryService : ICategoryService
	{
		Category model = new Category();

		public List<CategoryData> Select(string top)
		{
			int _top;
			bool con = int.TryParse(top, out _top);

			if (con)
				return model.List(null, _top).ChangeModelList<CategoryData, Category>();

			return model.List(null).ChangeModelList<CategoryData, Category>();
		}

		public List<CategoryData> SelectAll(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.ListAll(_id).ChangeModelList<CategoryData, Category>();

			return model.ListAll(null).ChangeModelList<CategoryData, Category>();
		}

		public CategoryData SelectByID(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.Select(_id).ChangeModel<CategoryData>();

			return model.List(null).FirstOrDefault().ChangeModel<CategoryData>();
		}

		public CategoryData SelectByUrl(string url)
		{
			return model.SelectByUrl(url).ChangeModel<CategoryData>();
		}

		public CategoryData SelectByGuid(string guid)
		{
			return model.SelectByGuid(guid).ChangeModel<CategoryData>();
		}

		public List<CategoryData> SelectByCode(string code)
		{
			return model.SelectByCode(code).ChangeModelList<CategoryData, Category>();
		}

		public bool Insert(CategoryData table)
		{
			if (table != null)
				return model.Insert(table.ChangeModel<Category>());

			return false;
		}

		public bool Update(CategoryData table)
		{
			if (table != null)
				return model.Update(table.ChangeModel<Category>());

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
