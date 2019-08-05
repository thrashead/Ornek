using System;
using System.Collections.Generic;

namespace Repository.FileModel
{
	public interface IFile
	{
		#region Model

		int ID { get; set; }
		string Title { get; set; }
		string Description { get; set; }
		string FileUrl { get; set; }
		string Code { get; set; }
		bool Active { get; set; }
		bool Deleted { get; set; }

		string Mesaj { get; set; }

		string OldFileUrl { get; set; }

		#endregion

		#region Methods

		List<File> List(int? id, int? top, bool relation);
		List<File> ListAll(int? id, bool relation);
		IFile Select(int? id, bool relation);
		List<File> SelectByCode(string code, bool relation);
		IFile Insert(IFile table, bool? none);
		bool Insert(IFile table);
		IFile Update(int? id, IFile table);
		bool Update(IFile table);
		bool Copy(int id);
		bool Delete(int? id);
		bool Remove(int? id);

		#endregion
	}
}
