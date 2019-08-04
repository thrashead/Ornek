using System;
using System.Collections.Generic;

namespace Repository.UsersModel
{
	public interface IUsers
	{
		#region Model

		int ID { get; set; }
		string Username { get; set; }
		string Password { get; set; }
		bool Active { get; set; }
		bool Deleted { get; set; }

		string Mesaj { get; set; }

		#endregion

		#region Methods

		List<Users> List(int? id, int? top, bool relation);
		List<Users> ListAll(int? id, bool relation);
		IUsers Select(int? id, bool relation);
		IUsers Insert(IUsers table, bool? none);
		bool Insert(IUsers table);
		IUsers Update(int? id, IUsers table);
		bool Update(IUsers table, int? curUserID);
		bool Copy(int id);
		bool Delete(int? id);
		bool Remove(int? id);

        #endregion

        #region Extras

        IUsers LoginControl(string username, string password);

        #endregion
    }
}
