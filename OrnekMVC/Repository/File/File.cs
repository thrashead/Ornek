using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using System.Linq;
using OrnekMVC.Data;
using TDLibrary;

namespace Repository.FileModel
{
	public class File : IFile
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
		public string FileUrl { get; set; }
		public string Code { get; set; }
		public bool Active { get; set; }
		public bool Deleted { get; set; }

		public string Mesaj { get; set; }

		public string OldFileUrl { get; set; }

		#endregion

		#region Methods

		public List<File> List(int? id = null, int? top = null, bool relation = true)
		{
			List<File> table;

			List<usp_FileSelect_Result> tableTemp;
			List<usp_FileSelectTop_Result> tableTopTemp;

			if (top == null)
			{
				tableTemp = entity.usp_FileSelect(id).ToList();
				table = tableTemp.ChangeModelList<File, usp_FileSelect_Result>();
			}
			else
			{
				tableTopTemp = entity.usp_FileSelectTop(id, top).ToList();
				table = tableTopTemp.ChangeModelList<File, usp_FileSelectTop_Result>();
			}

			return table;
		}

		public List<File> ListAll(int? id = null, bool relation = true)
		{
			List<File> table;

			List<usp_FileSelectAll_Result> tableTemp;

			tableTemp = entity.usp_FileSelectAll(id).ToList();
			table = tableTemp.ChangeModelList<File, usp_FileSelectAll_Result>();

			return table;
		}

		public IFile Select(int? id, bool relation = true)
		{
			usp_FileSelectTop_Result tableTemp = entity.usp_FileSelectTop(id, 1).FirstOrDefault();
			File table = tableTemp.ChangeModel<File>();

			return table;
		}

		public List<File> SelectByCode(string code, bool relation = true)
		{
			List<usp_FileSelectByCode_Result> tableTemp = entity.usp_FileSelectByCode(code).ToList();
			List<File> table = tableTemp.ChangeModelList<File, usp_FileSelectByCode_Result>();

			return table;
		}

		public IFile Insert(IFile table = null, bool? none = null)
		{
			if (table == null)
				table = new File();

			return table;
		}

		public bool Insert(IFile table)
		{
			var result = entity.usp_FileInsert(table.Title, table.Description, table.FileUrl, table.Code, table.Active).FirstOrDefault();

			if(result != null)
				return true;
			else
				return false;
		}

		public IFile Update(int? id = null, IFile table = null)
		{
			if (table == null)
			{
				table = Select(id);
			}

			return table;
		}

		public bool Update(IFile table)
		{
			var result = entity.usp_FileUpdate(table.ID, table.Title, table.Description, table.FileUrl, table.Code, table.Active).FirstOrDefault();

			if(result != null)
				return true;
			else
				return false;
		}

		public bool Copy(int id)
		{
			try
			{
				var result = entity.usp_FileCopy(id).FirstOrDefault();

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
				entity.usp_FileDelete(id);

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
				entity.usp_FileRemove(id);

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
