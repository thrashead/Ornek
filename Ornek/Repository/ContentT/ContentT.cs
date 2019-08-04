using System;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Linq;
using Ornek.Data;
using TDLibrary;

namespace Repository.ContentTModel
{
    public class ContentT : IContentT
    {
        readonly OrnekEntities entity = new OrnekEntities();

        #region Model

        public ContentT()
        {
            ContentList = new List<SelectListItem>();
            TranslationList = new List<SelectListItem>();
        }

        public int ID { get; set; }
        public int ContID { get; set; }
        public int TransID { get; set; }
        public string ContentName { get; set; }
        public string ShortText1 { get; set; }
        public string ShortText2 { get; set; }
        [AllowHtml]
        public string Description { get; set; }
        public bool Deleted { get; set; }

        public string Mesaj { get; set; }

        public List<SelectListItem> ContentList { get; set; }
        public List<SelectListItem> TranslationList { get; set; }

        public string ContentAdi { get; set; }
        public string TranslationAdi { get; set; }

        #endregion

        #region Methods

        public List<ContentT> List(int? id = null, int? top = null, bool relation = true)
        {
            List<ContentT> table;

            List<usp_ContentTLinkedSelect_Result> tableTemp;
            List<usp_ContentTSelectTop_Result> tableTopTemp;

            if (top == null)
            {
                tableTemp = entity.usp_ContentTLinkedSelect(id).ToList();
                table = tableTemp.ChangeModelList<ContentT, usp_ContentTLinkedSelect_Result>();
            }
            else
            {
                tableTopTemp = entity.usp_ContentTSelectTop(id, top).ToList();
                table = tableTopTemp.ChangeModelList<ContentT, usp_ContentTSelectTop_Result>();
            }

            if (relation)
            {
                foreach (ContentT item in table)
                {
                    List<usp_ContentSelect_Result> tableContent = entity.usp_ContentSelect(null).ToList();
                    item.ContentList = tableContent.ToSelectList<usp_ContentSelect_Result, SelectListItem>("ID", "Title", item.ContID);

                    List<usp_TranslationSelect_Result> tableTranslation = entity.usp_TranslationSelect(null).ToList();
                    item.TranslationList = tableTranslation.ToSelectList<usp_TranslationSelect_Result, SelectListItem>("ID", "TransName", item.TransID);
                }
            }

            return table;
        }

        public List<ContentT> ListAll(int? id = null, bool relation = true)
        {
            List<ContentT> table;

            List<usp_ContentTSelectAll_Result> tableTemp;

            tableTemp = entity.usp_ContentTSelectAll(id).ToList();
            table = tableTemp.ChangeModelList<ContentT, usp_ContentTSelectAll_Result>();

            if (relation)
            {
                foreach (ContentT item in table)
                {
                    List<usp_ContentSelect_Result> tableContent = entity.usp_ContentSelect(null).ToList();
                    item.ContentList = tableContent.ToSelectList<usp_ContentSelect_Result, SelectListItem>("ID", "Title", item.ContID);

                    List<usp_TranslationSelect_Result> tableTranslation = entity.usp_TranslationSelect(null).ToList();
                    item.TranslationList = tableTranslation.ToSelectList<usp_TranslationSelect_Result, SelectListItem>("ID", "TransName", item.TransID);
                }
            }

            return table;
        }

        public IContentT Select(int? id, bool relation = true)
        {
            usp_ContentTSelectTop_Result tableTemp = entity.usp_ContentTSelectTop(id, 1).FirstOrDefault();
            ContentT table = tableTemp.ChangeModel<ContentT>();

            if (relation)
            {
                List<usp_ContentSelect_Result> tableContent = entity.usp_ContentSelect(null).ToList();
                table.ContentList = tableContent.ToSelectList<usp_ContentSelect_Result, SelectListItem>("ID", "Title", table.ContID);

                List<usp_TranslationSelect_Result> tableTranslation = entity.usp_TranslationSelect(null).ToList();
                table.TranslationList = tableTranslation.ToSelectList<usp_TranslationSelect_Result, SelectListItem>("ID", "TransName", table.TransID);
            }

            return table;
        }

        public IContentT Insert(IContentT table = null, int? contID = null, int? transID = null)
        {
            if (table == null)
                table = new ContentT();

            List<usp_ContentSelect_Result> tableContent = entity.usp_ContentSelect(null).ToList();
            table.ContentList = tableContent.ToSelectList<usp_ContentSelect_Result, SelectListItem>("ID", "Title", contID);

            List<usp_TranslationSelect_Result> tableTranslation = entity.usp_TranslationSelect(null).ToList();
            table.TranslationList = tableTranslation.ToSelectList<usp_TranslationSelect_Result, SelectListItem>("ID", "TransName", transID);

            return table;
        }

        public bool Insert(IContentT table)
        {
            var result = entity.usp_ContentTInsert(table.ContID, table.TransID, table.ContentName, table.ShortText1, table.ShortText2, table.Description).FirstOrDefault();

            if (result != null)
                return true;
            else
                return false;
        }

        public IContentT Update(int? id = null, IContentT table = null)
        {
            if (table == null)
            {
                table = Select(id);
            }
            else
            {
                List<usp_ContentSelect_Result> tableContent = entity.usp_ContentSelect(null).ToList();
                table.ContentList = tableContent.ToSelectList<usp_ContentSelect_Result, SelectListItem>("ID", "Title", table.ContID);

                List<usp_TranslationSelect_Result> tableTranslation = entity.usp_TranslationSelect(null).ToList();
                table.TranslationList = tableTranslation.ToSelectList<usp_TranslationSelect_Result, SelectListItem>("ID", "TransName", table.TransID);
            }

            return table;
        }

        public bool Update(IContentT table)
        {
            var result = entity.usp_ContentTUpdate(table.ID, table.ContID, table.TransID, table.ContentName, table.ShortText1, table.ShortText2, table.Description).FirstOrDefault();

            if (result != null)
                return true;
            else
                return false;
        }

        public bool Copy(int id)
        {
            try
            {
                var result = entity.usp_ContentTCopy(id).FirstOrDefault();

                return result == null ? false : true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(int? id = null)
        {
            try
            {
                entity.usp_ContentTDelete(id);

                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Remove(int? id = null)
        {
            try
            {
                entity.usp_ContentTRemove(id);

                return true;
            }
            catch
            {
                return false;
            }
        }

        #endregion
    }
}
