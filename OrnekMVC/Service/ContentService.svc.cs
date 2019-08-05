using System;
using System.Linq;
using System.Collections.Generic;
using TDLibrary;
using Repository.ContentModel;

namespace OrnekMVC.Service
{
	public class ContentService : IContentService
	{
		Content model = new Content();

		public List<ContentData> Select(string top)
		{
			int _top;
			bool con = int.TryParse(top, out _top);

			if (con)
				return model.List(null, _top).ChangeModelList<ContentData, Content>();

			return model.List(null).ChangeModelList<ContentData, Content>();
		}

		public List<ContentData> SelectAll(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.ListAll(_id).ChangeModelList<ContentData, Content>();

			return model.ListAll(null).ChangeModelList<ContentData, Content>();
		}

		public ContentData SelectByID(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.Select(_id).ChangeModel<ContentData>();

			return model.List(null).FirstOrDefault().ChangeModel<ContentData>();
		}

		public ContentData SelectByUrl(string url)
		{
			return model.SelectByUrl(url).ChangeModel<ContentData>();
		}

		public ContentData SelectByGuid(string guid)
		{
			return model.SelectByGuid(guid).ChangeModel<ContentData>();
		}

		public List<ContentData> SelectByCode(string code)
		{
			return model.SelectByCode(code).ChangeModelList<ContentData, Content>();
		}

		public bool Insert(ContentData table)
		{
			if (table != null)
				return model.Insert(table.ChangeModel<Content>());

			return false;
		}

		public bool Update(ContentData table)
		{
			if (table != null)
				return model.Update(table.ChangeModel<Content>());

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
