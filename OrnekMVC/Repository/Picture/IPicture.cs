using System;
using System.Collections.Generic;

namespace Repository.PictureModel
{
	public interface IPicture
	{
		#region Model

		int ID { get; set; }
		string Title { get; set; }
		string Description { get; set; }
		string PictureUrl { get; set; }
		string ThumbUrl { get; set; }
		string Code { get; set; }
		bool Active { get; set; }
		bool Deleted { get; set; }

		string Mesaj { get; set; }

		string OldPictureUrl { get; set; }
		string OldThumbUrl { get; set; }

		#endregion

		#region Methods

		List<Picture> List(int? id, int? top, bool relation);
		List<Picture> ListAll(int? id, bool relation);
		IPicture Select(int? id, bool relation);
		List<Picture> SelectByCode(string code, bool relation);
		IPicture Insert(IPicture table, bool? none);
		bool Insert(IPicture table);
		IPicture Update(int? id, IPicture table);
		bool Update(IPicture table);
		bool Copy(int id);
		bool Delete(int? id);
		bool Remove(int? id);

		#endregion
	}
}
