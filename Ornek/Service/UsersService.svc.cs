using System;
using System.Linq;
using System.Collections.Generic;
using TDLibrary;
using Repository.UsersModel;

namespace Ornek.Service
{
	public class UsersService : IUsersService
	{
		Users model = new Users();

		public List<UsersData> Select(string top)
		{
			int _top;
			bool con = int.TryParse(top, out _top);

			if (con)
				return model.List(null, _top).ChangeModelList<UsersData, Users>();

			return model.List(null).ChangeModelList<UsersData, Users>();
		}

		public List<UsersData> SelectAll(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.ListAll(_id).ChangeModelList<UsersData, Users>();

			return model.ListAll(null).ChangeModelList<UsersData, Users>();
		}

		public UsersData SelectByID(string id)
		{
			int _id;
			bool con = int.TryParse(id, out _id);

			if (con)
				return model.Select(_id).ChangeModel<UsersData>();

			return model.List(null).FirstOrDefault().ChangeModel<UsersData>();
		}

		public bool Insert(UsersData table)
		{
			if (table != null)
				return model.Insert(table.ChangeModel<Users>());

			return false;
		}

		public bool Update(UsersData table)
		{
			if (table != null)
				return model.Update(table.ChangeModel<Users>());

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
