using System;
using System.Collections.Generic;
using System.Linq;
using Ornek.Data;
using TDLibrary;
using Repository.CategoryTModel;
using Repository.ContentTModel;

namespace Repository.TranslationModel
{
    public class Translation : ITranslation
    {
        readonly OrnekEntities entity = new OrnekEntities();

        #region Model

        public Translation()
        {
            CategoryTList = new List<ICategoryT>();
            ContentTList = new List<IContentT>();
        }

        public int ID { get; set; }
        public string TransName { get; set; }
        public string ShortName { get; set; }
        public string Flag { get; set; }
        public bool Active { get; set; }
        public bool Deleted { get; set; }

        public string Mesaj { get; set; }

        public string OldFlag { get; set; }

        public bool FlagHasFile { get; set; }

        public List<ICategoryT> CategoryTList { get; set; }
        public List<IContentT> ContentTList { get; set; }

        #endregion

        #region Methods

        public List<Translation> List(int? id = null, int? top = null, bool relation = true)
        {
            List<Translation> table;

            List<usp_TranslationSelect_Result> tableTemp;
            List<usp_TranslationSelectTop_Result> tableTopTemp;

            if (top == null)
            {
                tableTemp = entity.usp_TranslationSelect(id).ToList();
                table = tableTemp.ChangeModelList<Translation, usp_TranslationSelect_Result>();
            }
            else
            {
                tableTopTemp = entity.usp_TranslationSelectTop(id, top).ToList();
                table = tableTopTemp.ChangeModelList<Translation, usp_TranslationSelectTop_Result>();
            }

            if (relation)
            {
                foreach (Translation item in table)
                {
                    List<usp_CategoryT_TranslationByLinkedIDSelect_Result> categorytModelList = entity.usp_CategoryT_TranslationByLinkedIDSelect(item.ID).ToList();
                    item.CategoryTList.AddRange(categorytModelList.ChangeModelList<CategoryT, usp_CategoryT_TranslationByLinkedIDSelect_Result>());

                    List<usp_ContentT_TranslationByLinkedIDSelect_Result> contenttModelList = entity.usp_ContentT_TranslationByLinkedIDSelect(item.ID).ToList();
                    item.ContentTList.AddRange(contenttModelList.ChangeModelList<ContentT, usp_ContentT_TranslationByLinkedIDSelect_Result>());
                }
            }

            return table;
        }

        public List<Translation> ListAll(int? id = null, bool relation = true)
        {
            List<Translation> table;

            List<usp_TranslationSelectAll_Result> tableTemp;

            tableTemp = entity.usp_TranslationSelectAll(id).ToList();
            table = tableTemp.ChangeModelList<Translation, usp_TranslationSelectAll_Result>();

            if (relation)
            {
                foreach (Translation item in table)
                {
                    List<usp_CategoryT_TranslationByLinkedIDSelect_Result> categorytModelList = entity.usp_CategoryT_TranslationByLinkedIDSelect(item.ID).ToList();
                    item.CategoryTList.AddRange(categorytModelList.ChangeModelList<CategoryT, usp_CategoryT_TranslationByLinkedIDSelect_Result>());

                    List<usp_ContentT_TranslationByLinkedIDSelect_Result> contenttModelList = entity.usp_ContentT_TranslationByLinkedIDSelect(item.ID).ToList();
                    item.ContentTList.AddRange(contenttModelList.ChangeModelList<ContentT, usp_ContentT_TranslationByLinkedIDSelect_Result>());
                }
            }

            return table;
        }

        public ITranslation Select(int? id, bool relation = true)
        {
            usp_TranslationSelectTop_Result tableTemp = entity.usp_TranslationSelectTop(id, 1).FirstOrDefault();
            Translation table = tableTemp.ChangeModel<Translation>();

            if (relation)
            {
                List<usp_CategoryT_TranslationByLinkedIDSelect_Result> categorytModelList = entity.usp_CategoryT_TranslationByLinkedIDSelect(id).ToList();
                table.CategoryTList.AddRange(categorytModelList.ChangeModelList<CategoryT, usp_CategoryT_TranslationByLinkedIDSelect_Result>());

                List<usp_ContentT_TranslationByLinkedIDSelect_Result> contenttModelList = entity.usp_ContentT_TranslationByLinkedIDSelect(id).ToList();
                table.ContentTList.AddRange(contenttModelList.ChangeModelList<ContentT, usp_ContentT_TranslationByLinkedIDSelect_Result>());
            }

            return table;
        }

        public ITranslation Insert(ITranslation table = null, bool? none = null)
        {
            if (table == null)
                table = new Translation();

            return table;
        }

        public bool Insert(ITranslation table)
        {
            var result = entity.usp_TranslationInsert(table.TransName, table.ShortName, table.Flag, table.Active).FirstOrDefault();

            if (result != null)
                return true;
            else
                return false;
        }

        public ITranslation Update(int? id = null, ITranslation table = null)
        {
            if (table == null)
            {
                table = Select(id);
            }
            else
            {
                List<usp_CategoryT_TranslationByLinkedIDSelect_Result> categorytModelList = entity.usp_CategoryT_TranslationByLinkedIDSelect(table.ID).ToList();
                table.CategoryTList.AddRange(categorytModelList.ChangeModelList<CategoryT, usp_CategoryT_TranslationByLinkedIDSelect_Result>());

                List<usp_ContentT_TranslationByLinkedIDSelect_Result> contenttModelList = entity.usp_ContentT_TranslationByLinkedIDSelect(table.ID).ToList();
                table.ContentTList.AddRange(contenttModelList.ChangeModelList<ContentT, usp_ContentT_TranslationByLinkedIDSelect_Result>());

            }

            return table;
        }

        public bool Update(ITranslation table)
        {
            var result = entity.usp_TranslationUpdate(table.ID, table.TransName, table.ShortName, table.Flag, table.Active).FirstOrDefault();

            if (result != null)
                return true;
            else
                return false;
        }

        public bool Copy(int id)
        {
            try
            {
                var result = entity.usp_TranslationCopy(id).FirstOrDefault();

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
                entity.usp_TranslationDelete(id);

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
                entity.usp_TranslationRemove(id);

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
