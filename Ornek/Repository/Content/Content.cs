using System;
using System.Collections.Generic;
using System.Linq;
using Ornek.Data;
using TDLibrary;
using Repository.ContentTModel;

namespace Repository.ContentModel
{
	public class Content : IContent
	{
		readonly OrnekEntities entity = new OrnekEntities();

		#region Model

		public Content()
		{
			ContentTList = new List<IContentT>();
		}

		public int ID { get; set; }
		public string Title { get; set; }
		public string Url { get; set; }
		public string Code { get; set; }
		public bool Active { get; set; }
		public bool Deleted { get; set; }
		public string Guid { get; set; }

		public string Mesaj { get; set; }

		public List<IContentT> ContentTList { get; set; }

		#endregion

		#region Methods

		public List<Content> List(int? id = null, int? top = null, bool relation = true)
		{
			List<Content> table;

			List<usp_ContentSelect_Result> tableTemp;
			List<usp_ContentSelectTop_Result> tableTopTemp;

			if (top == null)
			{
				tableTemp = entity.usp_ContentSelect(id).ToList();
				table = tableTemp.ChangeModelList<Content, usp_ContentSelect_Result>();
			}
			else
			{
				tableTopTemp = entity.usp_ContentSelectTop(id, top).ToList();
				table = tableTopTemp.ChangeModelList<Content, usp_ContentSelectTop_Result>();
			}

			if (relation)
			{
				foreach(Content item in table)
				{
					List<usp_ContentT_ContentByLinkedIDSelect_Result> contenttModelList = entity.usp_ContentT_ContentByLinkedIDSelect(item.ID).ToList();
					item.ContentTList.AddRange(contenttModelList.ChangeModelList<ContentT, usp_ContentT_ContentByLinkedIDSelect_Result>());
				}
			}

			return table;
		}

		public List<Content> ListAll(int? id = null, bool relation = true)
		{
			List<Content> table;

			List<usp_ContentSelectAll_Result> tableTemp;

			tableTemp = entity.usp_ContentSelectAll(id).ToList();
			table = tableTemp.ChangeModelList<Content, usp_ContentSelectAll_Result>();

			if (relation)
			{
				foreach(Content item in table)
				{
					List<usp_ContentT_ContentByLinkedIDSelect_Result> contenttModelList = entity.usp_ContentT_ContentByLinkedIDSelect(item.ID).ToList();
					item.ContentTList.AddRange(contenttModelList.ChangeModelList<ContentT, usp_ContentT_ContentByLinkedIDSelect_Result>());
				}
			}

			return table;
		}

		public IContent Select(int? id, bool relation = true)
		{
			usp_ContentSelectTop_Result tableTemp = entity.usp_ContentSelectTop(id, 1).FirstOrDefault();
			Content table = tableTemp.ChangeModel<Content>();

			if (relation)
			{
				List<usp_ContentT_ContentByLinkedIDSelect_Result> contenttModelList = entity.usp_ContentT_ContentByLinkedIDSelect(id).ToList();
				table.ContentTList.AddRange(contenttModelList.ChangeModelList<ContentT, usp_ContentT_ContentByLinkedIDSelect_Result>());
			}

			return table;
		}

		public IContent SelectByUrl(string url, bool relation = true)
		{
			usp_ContentSelectByUrl_Result tableTemp = entity.usp_ContentSelectByUrl(url).FirstOrDefault();
			Content table = tableTemp.ChangeModel<Content>();

			if (relation)
			{
				List<usp_ContentT_ContentByLinkedIDSelect_Result> contenttModelList = entity.usp_ContentT_ContentByLinkedIDSelect(table.ID).ToList();
				table.ContentTList.AddRange(contenttModelList.ChangeModelList<ContentT, usp_ContentT_ContentByLinkedIDSelect_Result>());
			}

			return table;
		}

		public IContent SelectByGuid(string guid, bool relation = true)
		{
			usp_ContentSelectByGuid_Result tableTemp = entity.usp_ContentSelectByGuid(guid).FirstOrDefault();
			Content table = tableTemp.ChangeModel<Content>();

			if (relation)
			{
				List<usp_ContentT_ContentByLinkedIDSelect_Result> contenttModelList = entity.usp_ContentT_ContentByLinkedIDSelect(table.ID).ToList();
				table.ContentTList.AddRange(contenttModelList.ChangeModelList<ContentT, usp_ContentT_ContentByLinkedIDSelect_Result>());
			}

			return table;
		}

		public List<Content> SelectByCode(string code, bool relation = true)
		{
			List<usp_ContentSelectByCode_Result> tableTemp = entity.usp_ContentSelectByCode(code).ToList();
			List<Content> table = tableTemp.ChangeModelList<Content, usp_ContentSelectByCode_Result>();

			if (relation)
			{
				foreach(Content item in table)
				{
					List<usp_ContentT_ContentByLinkedIDSelect_Result> contenttModelList = entity.usp_ContentT_ContentByLinkedIDSelect(item.ID).ToList();
					item.ContentTList.AddRange(contenttModelList.ChangeModelList<ContentT, usp_ContentT_ContentByLinkedIDSelect_Result>());
				}
			}

			return table;
		}

		public IContent Insert(IContent table = null, bool? none = null)
		{
			if (table == null)
				table = new Content();

			return table;
		}

		public bool Insert(IContent table)
		{
			table.Url = table.Title.ToUrl();

			table.Guid = Guider.GetGuid(25);

			var result = entity.usp_ContentInsert(table.Title, table.Url, table.Code, table.Active, table.Guid).FirstOrDefault();

			if(result != null)
				return true;
			else
				return false;
		}

		public IContent Update(int? id = null, IContent table = null)
		{
			if (table == null)
			{
				table = Select(id);
			}
			else
			{
				List<usp_ContentT_ContentByLinkedIDSelect_Result> contenttModelList = entity.usp_ContentT_ContentByLinkedIDSelect(table.ID).ToList();
				table.ContentTList.AddRange(contenttModelList.ChangeModelList<ContentT, usp_ContentT_ContentByLinkedIDSelect_Result>());
			}

			return table;
		}

		public bool Update(IContent table)
		{
			table.Url = table.Title.ToUrl();

			var result = entity.usp_ContentUpdate(table.ID, table.Title, table.Url, table.Code, table.Active).FirstOrDefault();

			if(result != null)
				return true;
			else
				return false;
		}

		public bool Copy(int id)
		{
			try
			{
				var result = entity.usp_ContentCopy(id).FirstOrDefault();

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
				entity.usp_ContentDelete(id);

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
				entity.usp_ContentRemove(id);

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
