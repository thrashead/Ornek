using System;
using System.Collections.Generic;
using System.Linq;
using Ornek.Data;
using TDLibrary;
using Repository.CategoryTModel;
using System.Web.Mvc;

namespace Repository.CategoryModel
{
	public class Category : ICategory
	{
		readonly OrnekEntities entity = new OrnekEntities();

        #region Model

        public Category()
		{
			CategoryTList = new List<ICategoryT>();
            ParentCategories = new List<SelectListItem>();
        }

        public int ID { get; set; }
		public int ParentID { get; set; }
		public string Title { get; set; }
		public string Url { get; set; }
		public string Code { get; set; }
		public bool Active { get; set; }
		public bool Deleted { get; set; }
		public string Guid { get; set; }

		public string Mesaj { get; set; }

		public List<ICategoryT> CategoryTList { get; set; }
        public List<SelectListItem> ParentCategories { get; set; }

        #endregion

        #region Methods

        public List<Category> List(int? id = null, int? top = null, bool relation = true)
		{
			List<Category> table;

			List<usp_CategorySelect_Result> tableTemp;
			List<usp_CategorySelectTop_Result> tableTopTemp;

			if (top == null)
			{
				tableTemp = entity.usp_CategorySelect(id).ToList();
				table = tableTemp.ChangeModelList<Category, usp_CategorySelect_Result>();
			}
			else
			{
				tableTopTemp = entity.usp_CategorySelectTop(id, top).ToList();
				table = tableTopTemp.ChangeModelList<Category, usp_CategorySelectTop_Result>();
			}

			if (relation)
			{
				foreach(Category item in table)
				{
					List<usp_CategoryT_CategoryByLinkedIDSelect_Result> categorytModelList = entity.usp_CategoryT_CategoryByLinkedIDSelect(item.ID).ToList();
					item.CategoryTList.AddRange(categorytModelList.ChangeModelList<CategoryT, usp_CategoryT_CategoryByLinkedIDSelect_Result>());
				}
			}

			return table;
		}

		public List<Category> ListAll(int? id = null, bool relation = true)
		{
			List<Category> table;

			List<usp_CategorySelectAll_Result> tableTemp;

			tableTemp = entity.usp_CategorySelectAll(id).ToList();
			table = tableTemp.ChangeModelList<Category, usp_CategorySelectAll_Result>();

			if (relation)
			{
				foreach(Category item in table)
				{
					List<usp_CategoryT_CategoryByLinkedIDSelect_Result> categorytModelList = entity.usp_CategoryT_CategoryByLinkedIDSelect(item.ID).ToList();
					item.CategoryTList.AddRange(categorytModelList.ChangeModelList<CategoryT, usp_CategoryT_CategoryByLinkedIDSelect_Result>());
				}
			}

			return table;
		}

		public ICategory Select(int? id, bool relation = true)
		{
			usp_CategorySelectTop_Result tableTemp = entity.usp_CategorySelectTop(id, 1).FirstOrDefault();
			Category table = tableTemp.ChangeModel<Category>();

            List<usp_CategoryParentSelect_Result> parentList = entity.usp_CategoryParentSelect(null).ToList();
            table.ParentCategories = parentList.ToSelectList<usp_CategoryParentSelect_Result, SelectListItem>("ID", "Title", table.ParentID, true);

            if (relation)
			{
				List<usp_CategoryT_CategoryByLinkedIDSelect_Result> categorytModelList = entity.usp_CategoryT_CategoryByLinkedIDSelect(id).ToList();
				table.CategoryTList.AddRange(categorytModelList.ChangeModelList<CategoryT, usp_CategoryT_CategoryByLinkedIDSelect_Result>());
			}

			return table;
		}

		public ICategory SelectByUrl(string url, bool relation = true)
		{
			usp_CategorySelectByUrl_Result tableTemp = entity.usp_CategorySelectByUrl(url).FirstOrDefault();
			Category table = tableTemp.ChangeModel<Category>();

			if (relation)
			{
				List<usp_CategoryT_CategoryByLinkedIDSelect_Result> categorytModelList = entity.usp_CategoryT_CategoryByLinkedIDSelect(table.ID).ToList();
				table.CategoryTList.AddRange(categorytModelList.ChangeModelList<CategoryT, usp_CategoryT_CategoryByLinkedIDSelect_Result>());
			}

			return table;
		}

		public ICategory SelectByGuid(string guid, bool relation = true)
		{
			usp_CategorySelectByGuid_Result tableTemp = entity.usp_CategorySelectByGuid(guid).FirstOrDefault();
			Category table = tableTemp.ChangeModel<Category>();

			if (relation)
			{
				List<usp_CategoryT_CategoryByLinkedIDSelect_Result> categorytModelList = entity.usp_CategoryT_CategoryByLinkedIDSelect(table.ID).ToList();
				table.CategoryTList.AddRange(categorytModelList.ChangeModelList<CategoryT, usp_CategoryT_CategoryByLinkedIDSelect_Result>());
			}

			return table;
		}

		public List<Category> SelectByCode(string code, bool relation = true)
		{
			List<usp_CategorySelectByCode_Result> tableTemp = entity.usp_CategorySelectByCode(code).ToList();
			List<Category> table = tableTemp.ChangeModelList<Category, usp_CategorySelectByCode_Result>();

			if (relation)
			{
				foreach(Category item in table)
				{
					List<usp_CategoryT_CategoryByLinkedIDSelect_Result> categorytModelList = entity.usp_CategoryT_CategoryByLinkedIDSelect(item.ID).ToList();
					item.CategoryTList.AddRange(categorytModelList.ChangeModelList<CategoryT, usp_CategoryT_CategoryByLinkedIDSelect_Result>());
				}
			}

			return table;
		}

		public ICategory Insert(ICategory table = null, bool? none = null)
		{
			if (table == null)
				table = new Category();

            List<usp_CategoryParentSelect_Result> parentList = entity.usp_CategoryParentSelect(null).ToList();
            table.ParentCategories = parentList.ToSelectList<usp_CategoryParentSelect_Result, SelectListItem>("ID", "Title", null, true);

            return table;
		}

		public bool Insert(ICategory table)
		{
			table.Url = table.Title.ToUrl();

			table.Guid = Guider.GetGuid(25);

			var result = entity.usp_CategoryInsert(table.ParentID, table.Title, table.Url, table.Code, table.Active, table.Guid).FirstOrDefault();

			if(result != null)
				return true;
			else
				return false;
		}

		public ICategory Update(int? id = null, ICategory table = null)
		{
			if (table == null)
			{
				table = Select(id);
			}
			else
			{
				List<usp_CategoryT_CategoryByLinkedIDSelect_Result> categorytModelList = entity.usp_CategoryT_CategoryByLinkedIDSelect(table.ID).ToList();
				table.CategoryTList.AddRange(categorytModelList.ChangeModelList<CategoryT, usp_CategoryT_CategoryByLinkedIDSelect_Result>());

                List<usp_CategoryParentSelect_Result> parentList = entity.usp_CategoryParentSelect(null).ToList();
                table.ParentCategories = parentList.ToSelectList<usp_CategoryParentSelect_Result, SelectListItem>("ID", "Title", null, true);
            }

			return table;
		}

		public bool Update(ICategory table)
		{
			table.Url = table.Title.ToUrl();

			var result = entity.usp_CategoryUpdate(table.ID, table.ParentID, table.Title, table.Url, table.Code, table.Active).FirstOrDefault();

			if(result != null)
				return true;
			else
				return false;
		}

		public bool Copy(int id)
		{
			try
			{
				var result = entity.usp_CategoryCopy(id).FirstOrDefault();

				return result == null ? false : true;
			}
			catch
			{
				return false;
			}
		}

		public bool Delete(int? id = null)
		{
			try
			{
				entity.usp_CategoryDelete(id);

				return true;
			}
			catch
			{
				return false;
			}
		}

		public bool Remove(int? id = null)
		{
			try
			{
				entity.usp_CategoryRemove(id);

				return true;
			}
			catch
			{
				return false;
			}
		}

		#endregion
	}
}
