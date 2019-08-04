using System.Web.Mvc;
using Repository.CategoryTModel;

namespace Ornek.Areas.Ajax.Controllers
{
    public class CategoryTController : Controller
    {
        CategoryT model = new CategoryT();

        [HttpGet]
        public JsonResult Index(int? id)
        {
            return Json(model.List(id), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Insert()
        {
            return Json(model.Insert(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Insert([System.Web.Http.FromBody] CategoryT table)
        {
            bool result = model.Insert(table);

            if (result)
                return Json(table);
            else
                table.Mesaj = "Kayıt eklenemedi.";

            table = (CategoryT)model.Insert(table, table.CatID, table.TransID);

            return Json(table);
        }

        [HttpGet]
        public JsonResult Update(int? id)
        {
            return Json(model.Update(id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Update([System.Web.Http.FromBody] CategoryT table)
        {
            bool result = model.Update(table);

            if (result)
                return Json(table);
            else
                table.Mesaj = "Kayıt düzenlenemedi.";

            table = (CategoryT)model.Update(table.ID, table);

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
