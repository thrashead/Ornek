using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using System.Linq;
using OrnekMVC.Data;
using TDLibrary;

namespace Repository.CategoryTModel
{
	public class CategoryT : ICategoryT
	{
		readonly OrnekEntities entity = new OrnekEntities();

		#region Model

		public CategoryT()
		{
			CategoryList = new List<SelectListItem>();
			TranslationList = new List<SelectListItem>();
		}

		public int ID { get; set; }
		[Required(ErrorMessage = "CatID alanı boş olamaz ve CatID alanına en az 0 değeri girmelisiniz.")]
		[Range(0, int.MaxValue, ErrorMessage = "CatID alanı boş olamaz ve CatID alanına en az 0 değeri girmelisiniz.")]
		public int CatID { get; set; }
		[Required(ErrorMessage = "TransID alanı boş olamaz ve TransID alanına en az 0 değeri girmelisiniz.")]
		[Range(0, int.MaxValue, ErrorMessage = "TransID alanı boş olamaz ve TransID alanına en az 0 değeri girmelisiniz.")]
		public int TransID { get; set; }
		[Required(ErrorMessage = "CategoryName alanı boş olamaz ve en fazla 255 karakter olmalıdır.")]
		[StringLength(255)]
		public string CategoryName { get; set; }
		public string ShortText1 { get; set; }
		public string ShortText2 { get; set; }
		[AllowHtml]
		[DataType(DataType.MultilineText)]
		public string Description { get; set; }
		public bool Deleted { get; set; }

		public string Mesaj { get; set; }

		public List<SelectListItem> CategoryList { get; set; }
		public List<SelectListItem> TranslationList { get; set; }

		public string CategoryAdi { get; set; }
		public string TranslationAdi { get; set; }

		#endregion

		#region Methods

		public List<CategoryT> List(int? id = null, int? top = null, bool relation = true)
		{
			List<CategoryT> table;

			List<usp_CategoryTLinkedSelect_Result> tableTemp;
			List<usp_CategoryTSelectTop_Result> tableTopTemp;

			if (top == null)
			{
				tableTemp = entity.usp_CategoryTLinkedSelect(id).ToList();
				table = tableTemp.ChangeModelList<CategoryT, usp_CategoryTLinkedSelect_Result>();
			}
			else
			{
				tableTopTemp = entity.usp_CategoryTSelectTop(id, top).ToList();
				table = tableTopTemp.ChangeModelList<CategoryT, usp_CategoryTSelectTop_Result>();
			}

			if (relation)
			{
				foreach(CategoryT item in table)
				{
					List<usp_CategorySelect_Result> tableCategory = entity.usp_CategorySelect(null).ToList();
					item.CategoryList = tableCategory.ToSelectList<usp_CategorySelect_Result, SelectListItem>("ID", "Title", item.CatID);

					List<usp_TranslationSelect_Result> tableTranslation = entity.usp_TranslationSelect(null).ToList();
					item.TranslationList = tableTranslation.ToSelectList<usp_TranslationSelect_Result, SelectListItem>("ID", "TransName", item.TransID);
				}
			}

			return table;
		}

		public List<CategoryT> ListAll(int? id = null, bool relation = true)
		{
			List<CategoryT> table;

			List<usp_CategoryTSelectAll_Result> tableTemp;

			tableTemp = entity.usp_CategoryTSelectAll(id).ToList();
			table = tableTemp.ChangeModelList<CategoryT, usp_CategoryTSelectAll_Result>();

			if (relation)
			{
				foreach(CategoryT item in table)
				{
					List<usp_CategorySelect_Result> tableCategory = entity.usp_CategorySelect(null).ToList();
					item.CategoryList = tableCategory.ToSelectList<usp_CategorySelect_Result, SelectListItem>("ID", "Title", item.CatID);

					List<usp_TranslationSelect_Result> tableTranslation = entity.usp_TranslationSelect(null).ToList();
					item.TranslationList = tableTranslation.ToSelectList<usp_TranslationSelect_Result, SelectListItem>("ID", "TransName", item.TransID);
				}
			}

			return table;
		}

		public ICategoryT Select(int? id, bool relation = true)
		{
			usp_CategoryTSelectTop_Result tableTemp = entity.usp_CategoryTSelectTop(id, 1).FirstOrDefault();
			CategoryT table = tableTemp.ChangeModel<CategoryT>();

			if (relation)
			{
				List<usp_CategorySelect_Result> tableCategory = entity.usp_CategorySelect(null).ToList();
				table.CategoryList = tableCategory.ToSelectList<usp_CategorySelect_Result, SelectListItem>("ID", "Title", table.CatID);

				List<usp_TranslationSelect_Result> tableTranslation = entity.usp_TranslationSelect(null).ToList();
				table.TranslationList = tableTranslation.ToSelectList<usp_TranslationSelect_Result, SelectListItem>("ID", "TransName", table.TransID);
			}

			return table;
		}

		public ICategoryT Insert(ICategoryT table = null, int? catID = null, int? transID = null)
		{
			if (table == null)
				table = new CategoryT();

			List<usp_CategorySelect_Result> tableCategory = entity.usp_CategorySelect(null).ToList();
			table.CategoryList = tableCategory.ToSelectList<usp_CategorySelect_Result, SelectListItem>("ID",  "Title", catID);

			List<usp_TranslationSelect_Result> tableTranslation = entity.usp_TranslationSelect(null).ToList();
			table.TranslationList = tableTranslation.ToSelectList<usp_TranslationSelect_Result, SelectListItem>("ID",  "TransName", transID);

			return table;
		}

		public bool Insert(ICategoryT table)
		{
			var result = entity.usp_CategoryTInsert(table.CatID, table.TransID, table.CategoryName, table.ShortText1, table.ShortText2, table.Description).FirstOrDefault();

			if(result != null)
				return true;
			else
				return false;
		}

		public ICategoryT Update(int? id = null, ICategoryT table = null)
		{
			if (table == null)
			{
				table = Select(id);
			}
			else
			{
				List<usp_CategorySelect_Result> tableCategory = entity.usp_CategorySelect(null).ToList();
				table.CategoryList = tableCategory.ToSelectList<usp_CategorySelect_Result, SelectListItem>("ID", "Title", table.CatID);

				List<usp_TranslationSelect_Result> tableTranslation = entity.usp_TranslationSelect(null).ToList();
				table.TranslationList = tableTranslation.ToSelectList<usp_TranslationSelect_Result, SelectListItem>("ID", "TransName", table.TransID);
			}

			return table;
		}

		public bool Update(ICategoryT table)
		{
			var result = entity.usp_CategoryTUpdate(table.ID, table.CatID, table.TransID, table.CategoryName, table.ShortText1, table.ShortText2, table.Description).FirstOrDefault();

			if(result != null)
				return true;
			else
				return false;
		}

		public bool Copy(int id)
		{
			try
			{
				var result = entity.usp_CategoryTCopy(id).FirstOrDefault();

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
				entity.usp_CategoryTDelete(id);

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
				entity.usp_CategoryTRemove(id);

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
