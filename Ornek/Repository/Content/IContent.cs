using System;
using System.Collections.Generic;
using Repository.ContentTModel;

namespace Repository.ContentModel
{
    public interface IContent
    {
        #region Model

        int ID { get; set; }
        string Title { get; set; }
        string Url { get; set; }
        string Code { get; set; }
        bool Active { get; set; }
        bool Deleted { get; set; }
        string Guid { get; set; }

        string Mesaj { get; set; }

        List<IContentT> ContentTList { get; set; }

        #endregion

        #region Methods

        List<Content> List(int? id, int? top, bool relation);
        List<Content> ListAll(int? id, bool relation);
        IContent Select(int? id, bool relation);
        IContent SelectByUrl(string url, bool relation);
        IContent SelectByGuid(string guid, bool relation);
        List<Content> SelectByCode(string code, bool relation);
        IContent Insert(IContent table, bool? none);
        bool Insert(IContent table);
        IContent Update(int? id, IContent table);
        bool Update(IContent table);
        bool Copy(int id);
        bool Delete(int? id);
        bool Remove(int? id);

        #endregion
    }
}
