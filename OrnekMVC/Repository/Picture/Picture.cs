using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using System.Linq;
using OrnekMVC.Data;
using TDLibrary;

namespace Repository.PictureModel
{
	public class Picture : IPicture
	{
		readonly OrnekEntities entity = new OrnekEntities();

		#region Model

		public int ID { get; set; }
		[Required(ErrorMessage = "Title alanı boş olamaz ve en fazla 50 karakter olmalıdır.")]
		[StringLength(50)]
		public string Title { get; set; }
		[AllowHtml]
		[DataType(DataType.MultilineText)]
		public string Description { get; set; }
		public string PictureUrl { get; set; }
		public string ThumbUrl { get; set; }
		public string Code { get; set; }
		public bool Active { get; set; }
		public bool Deleted { get; set; }

		public string Mesaj { get; set; }

		public string OldPictureUrl { get; set; }
		public string OldThumbUrl { get; set; }

		#endregion

		#region Methods

		public List<Picture> List(int? id = null, int? top = null, bool relation = true)
		{
			List<Picture> table;

			List<usp_PictureSelect_Result> tableTemp;
			List<usp_PictureSelectTop_Result> tableTopTemp;

			if (top == null)
			{
				tableTemp = entity.usp_PictureSelect(id).ToList();
				table = tableTemp.ChangeModelList<Picture, usp_PictureSelect_Result>();
			}
			else
			{
				tableTopTemp = entity.usp_PictureSelectTop(id, top).ToList();
				table = tableTopTemp.ChangeModelList<Picture, usp_PictureSelectTop_Result>();
			}

			return table;
		}

		public List<Picture> ListAll(int? id = null, bool relation = true)
		{
			List<Picture> table;

			List<usp_PictureSelectAll_Result> tableTemp;

			tableTemp = entity.usp_PictureSelectAll(id).ToList();
			table = tableTemp.ChangeModelList<Picture, usp_PictureSelectAll_Result>();

			return table;
		}

		public IPicture Select(int? id, bool relation = true)
		{
			usp_PictureSelectTop_Result tableTemp = entity.usp_PictureSelectTop(id, 1).FirstOrDefault();
			Picture table = tableTemp.ChangeModel<Picture>();

			return table;
		}

		public List<Picture> SelectByCode(string code, bool relation = true)
		{
			List<usp_PictureSelectByCode_Result> tableTemp = entity.usp_PictureSelectByCode(code).ToList();
			List<Picture> table = tableTemp.ChangeModelList<Picture, usp_PictureSelectByCode_Result>();

			return table;
		}

		public IPicture Insert(IPicture table = null, bool? none = null)
		{
			if (table == null)
				table = new Picture();

			return table;
		}

		public bool Insert(IPicture table)
		{
			var result = entity.usp_PictureInsert(table.Title, table.Description, table.PictureUrl, table.ThumbUrl, table.Code, table.Active).FirstOrDefault();

			if(result != null)
				return true;
			else
				return false;
		}

		public IPicture Update(int? id = null, IPicture table = null)
		{
			if (table == null)
			{
				table = Select(id);
			}

			return table;
		}

		public bool Update(IPicture table)
		{
			var result = entity.usp_PictureUpdate(table.ID, table.Title, table.Description, table.PictureUrl, table.ThumbUrl, table.Code, table.Active).FirstOrDefault();

			if(result != null)
				return true;
			else
				return false;
		}

		public bool Copy(int id)
		{
			try
			{
				var result = entity.usp_PictureCopy(id).FirstOrDefault();

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
				entity.usp_PictureDelete(id);

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
				entity.usp_PictureRemove(id);

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
