using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Ornek.Data;
using TDLibrary;

namespace Repository.UsersModel
{
    public class Users : IUsers
    {
        readonly OrnekEntities entity = new OrnekEntities();

        #region Model

        public int ID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool Active { get; set; }
        public bool Deleted { get; set; }

        public string Mesaj { get; set; }

        #endregion

        #region Methods

        public List<Users> List(int? id = null, int? top = null, bool relation = true)
        {
            List<Users> table;

            List<usp_UsersSelect_Result> tableTemp;
            List<usp_UsersSelectTop_Result> tableTopTemp;

            if (top == null)
            {
                tableTemp = entity.usp_UsersSelect(id).ToList();
                table = tableTemp.ChangeModelList<Users, usp_UsersSelect_Result>();
            }
            else
            {
                tableTopTemp = entity.usp_UsersSelectTop(id, top).ToList();
                table = tableTopTemp.ChangeModelList<Users, usp_UsersSelectTop_Result>();
            }

            return table;
        }

        public List<Users> ListAll(int? id = null, bool relation = true)
        {
            List<Users> table;

            List<usp_UsersSelectAll_Result> tableTemp;

            tableTemp = entity.usp_UsersSelectAll(id).ToList();
            table = tableTemp.ChangeModelList<Users, usp_UsersSelectAll_Result>();

            return table;
        }

        public IUsers Select(int? id, bool relation = true)
        {
            usp_UsersSelectTop_Result tableTemp = entity.usp_UsersSelectTop(id, 1).FirstOrDefault();
            Users table = tableTemp.ChangeModel<Users>();

            return table;
        }

        public IUsers Insert(IUsers table = null, bool? none = null)
        {
            if (table == null)
                table = new Users();

            return table;
        }

        public bool Insert(IUsers table)
        {
            table.Password = table.Password.ToMD5();

            var result = entity.usp_UsersInsert(table.Username, table.Password, table.Active).FirstOrDefault();

            if (result != null)
                return true;
            else
                return false;
        }

        public IUsers Update(int? id = null, IUsers table = null)
        {
            if (table == null)
            {
                table = Select(id);
            }

            table.Password = "";

            return table;
        }

        public bool Update(IUsers table, int? curUserID = null)
        {
            string password = table.Password == null ? entity.usp_UsersOldPasswordSelect(table.ID).FirstOrDefault() : table.Password.ToMD5();
            table.Password = password;

            if (curUserID == table.ID)
                table.Active = true;

            var result = entity.usp_UsersUpdate(table.ID, table.Username, table.Password, table.Active).FirstOrDefault();

            if (result != null)
            {
                if (curUserID == table.ID)
                    HttpContext.Current.Session["CurrentUser"] = entity.usp_UsersSelectTop(table.ID, 1).FirstOrDefault().ChangeModel<Users>();

                return true;
            }
            else
                return false;
        }

        public bool Copy(int id)
        {
            try
            {
                var result = entity.usp_UsersCopy(id).FirstOrDefault();

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
                entity.usp_UsersDelete(id);

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
                entity.usp_UsersRemove(id);

                return true;
            }
            catch
            {
                return false;
            }
        }

        #endregion

        #region Extras

        public static Users CurrentUser
        {
            get
            {
                return HttpContext.Current.Session["CurrentUser"] != null ? HttpContext.Current.Session["CurrentUser"] as Users : null;
            }
        }

        public IUsers LoginControl(string username, string password)
        {
            Users table = null;
            usp_UsersSelectLogin_Result tableTemp = entity.usp_UsersSelectLogin(username, password).FirstOrDefault();

            try
            {
                table = tableTemp.ChangeModel<Users>();
            }
            catch
            {
            }

            return table;
        }

        #endregion
    }
}
