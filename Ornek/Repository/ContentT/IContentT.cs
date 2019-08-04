using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Repository.ContentTModel
{
    public interface IContentT
    {
        #region Model

        int ID { get; set; }
        int ContID { get; set; }
        int TransID { get; set; }
        string ContentName { get; set; }
        string ShortText1 { get; set; }
        string ShortText2 { get; set; }
        string Description { get; set; }
        bool Deleted { get; set; }

        string Mesaj { get; set; }

        List<SelectListItem> ContentList { get; set; }
        List<SelectListItem> TranslationList { get; set; }

        string ContentAdi { get; set; }
        string TranslationAdi { get; set; }

        #endregion

        #region Methods

        List<ContentT> List(int? id, int? top, bool relation);
        List<ContentT> ListAll(int? id, bool relation);
        IContentT Select(int? id, bool relation);
        IContentT Insert(IContentT table, int? contID, int? transID);
        bool Insert(IContentT table);
        IContentT Update(int? id, IContentT table);
        bool Update(IContentT table);
        bool Copy(int id);
        bool Delete(int? id);
        bool Remove(int? id);

        #endregion
    }
}
