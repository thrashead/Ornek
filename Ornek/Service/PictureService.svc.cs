using System;
using System.Linq;
using System.Collections.Generic;
using TDLibrary;
using Repository.PictureModel;

namespace Ornek.Service
{
	public class PictureService : IPictureService
	{
		Picture model = new Picture();

		public List<PictureData> Select(string top)
		{
			int _top;
			bool con = int.TryParse(top, out _top);

			if (con)
				return model.List(null, _top).ChangeModelList<PictureData, Picture>();

			return model.List(null).ChangeModelList<PictureData, Picture>();
		}

		public List<PictureData> SelectAll(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.ListAll(_id).ChangeModelList<PictureData, Picture>();

			return model.ListAll(null).ChangeModelList<PictureData, Picture>();
		}

		public PictureData SelectByID(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.Select(_id).ChangeModel<PictureData>();

			return model.List(null).FirstOrDefault().ChangeModel<PictureData>();
		}

		public List<PictureData> SelectByCode(string code)
		{
			return model.SelectByCode(code).ChangeModelList<PictureData, Picture>();
		}

		public bool Insert(PictureData table)
		{
			if (table != null)
				return model.Insert(table.ChangeModel<Picture>());

			return false;
		}

		public bool Update(PictureData table)
		{
			if (table != null)
				return model.Update(table.ChangeModel<Picture>());

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
