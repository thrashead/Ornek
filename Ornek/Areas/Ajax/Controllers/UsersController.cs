using System.Web.Mvc;
using Repository.UsersModel;

namespace Ornek.Areas.Ajax.Controllers
{
    public class UsersController : Controller
    {
        Users model = new Users();
        Users curUser = Users.CurrentUser;

        [HttpGet]
        public JsonResult Index(int? id)
        {
            return Json(model.List(id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Insert([System.Web.Http.FromBody] Users table)
        {
            bool result = model.Insert(table);

            if (result)
                return Json(table);
            else
                table.Mesaj = "Kayıt eklenemedi.";

            table = (Users)model.Insert(table, null);

            return Json(table);
        }

        [HttpGet]
        public JsonResult Update(int? id)
        {
            return Json(model.Update(id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Update([System.Web.Http.FromBody] Users table)
        {
            if (curUser?.ID == table.ID)
            {
                bool result = model.Update(table);

                if (result)
                    return Json(table);
                else
                    table.Mesaj = "Kayıt düzenlenemedi.";

            }
            else
            {
                table.Mesaj = "Sadece kendi kullanıcı bilgilerinizi düzenleyebilirsiniz.";
            }

            table = (Users)model.Update(table.ID, table);

            return Json(table);
        }

        [HttpGet]
        public JsonResult Copy(int id)
        {
            return Json(model.Copy(id), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Delete(int? id)
        {
            return Json(model.Delete(id), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Remove(int? id)
        {
            return Json(model.Remove(id), JsonRequestBehavior.AllowGet);
        }
    }
}
