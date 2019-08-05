using System;
using System.Linq;
using System.Collections.Generic;
using TDLibrary;
using Repository.FileModel;

namespace OrnekMVC.Service
{
	public class FileService : IFileService
	{
		File model = new File();

		public List<FileData> Select(string top)
		{
			int _top;
			bool con = int.TryParse(top, out _top);

			if (con)
				return model.List(null, _top).ChangeModelList<FileData, File>();

			return model.List(null).ChangeModelList<FileData, File>();
		}

		public List<FileData> SelectAll(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.ListAll(_id).ChangeModelList<FileData, File>();

			return model.ListAll(null).ChangeModelList<FileData, File>();
		}

		public FileData SelectByID(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.Select(_id).ChangeModel<FileData>();

			return model.List(null).FirstOrDefault().ChangeModel<FileData>();
		}

		public List<FileData> SelectByCode(string code)
		{
			return model.SelectByCode(code).ChangeModelList<FileData, File>();
		}

		public bool Insert(FileData table)
		{
			if (table != null)
				return model.Insert(table.ChangeModel<File>());

			return false;
		}

		public bool Update(FileData table)
		{
			if (table != null)
				return model.Update(table.ChangeModel<File>());

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
