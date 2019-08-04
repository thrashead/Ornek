using System;
using System.Linq;
using System.Collections.Generic;
using TDLibrary;
using Repository.ContentTModel;

namespace Ornek.Service
{
	public class ContentTService : IContentTService
	{
		ContentT model = new ContentT();

		public List<ContentTData> Select(string top)
		{
			int _top;
			bool con = int.TryParse(top, out _top);

			if (con)
				return model.List(null, _top).ChangeModelList<ContentTData, ContentT>();

			return model.List(null).ChangeModelList<ContentTData, ContentT>();
		}

		public List<ContentTData> SelectAll(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.ListAll(_id).ChangeModelList<ContentTData, ContentT>();

			return model.ListAll(null).ChangeModelList<ContentTData, ContentT>();
		}

		public ContentTData SelectByID(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.Select(_id).ChangeModel<ContentTData>();

			return model.List(null).FirstOrDefault().ChangeModel<ContentTData>();
		}

		public bool Insert(ContentTData table)
		{
			if (table != null)
				return model.Insert(table.ChangeModel<ContentT>());

			return false;
		}

		public bool Update(ContentTData table)
		{
			if (table != null)
				return model.Update(table.ChangeModel<ContentT>());

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
