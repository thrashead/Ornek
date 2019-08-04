using System;
using System.Collections.Generic;
using Repository.CategoryTModel;
using Repository.ContentTModel;

namespace Repository.TranslationModel
{
	public interface ITranslation
	{
		#region Model

		int ID { get; set; }
		string TransName { get; set; }
		string ShortName { get; set; }
		string Flag { get; set; }
		bool Active { get; set; }
		bool Deleted { get; set; }

		string Mesaj { get; set; }

		string OldFlag { get; set; }

		bool FlagHasFile { get; set; }

		List<ICategoryT> CategoryTList { get; set; }
		List<IContentT> ContentTList { get; set; }

		#endregion

		#region Methods

		List<Translation> List(int? id, int? top, bool relation);
		List<Translation> ListAll(int? id, bool relation);
		ITranslation Select(int? id, bool relation);
		ITranslation Insert(ITranslation table, bool? none);
		bool Insert(ITranslation table);
		ITranslation Update(int? id, ITranslation table);
		bool Update(ITranslation table);
		bool Copy(int id);
		bool Delete(int? id);
		bool Remove(int? id);

		#endregion
	}
}
