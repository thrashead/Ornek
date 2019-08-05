using System;
using System.Linq;
using System.Collections.Generic;
using TDLibrary;
using Repository.TranslationModel;

namespace Ornek.Service
{
	public class TranslationService : ITranslationService
	{
		Translation model = new Translation();

		public List<TranslationData> Select(string top)
		{
			int _top;
			bool con = int.TryParse(top, out _top);

			if (con)
				return model.List(null, _top).ChangeModelList<TranslationData, Translation>();

			return model.List(null).ChangeModelList<TranslationData, Translation>();
		}

		public List<TranslationData> SelectAll(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.ListAll(_id).ChangeModelList<TranslationData, Translation>();

			return model.ListAll(null).ChangeModelList<TranslationData, Translation>();
		}

		public TranslationData SelectByID(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.Select(_id).ChangeModel<TranslationData>();

			return model.List(null).FirstOrDefault().ChangeModel<TranslationData>();
		}

		public bool Insert(TranslationData table)
		{
			if (table != null)
				return model.Insert(table.ChangeModel<Translation>());

			return false;
		}

		public bool Update(TranslationData table)
		{
			if (table != null)
				return model.Update(table.ChangeModel<Translation>());

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
