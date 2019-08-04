using System.Web.Mvc;
using Repository.ContentModel;

namespace Ornek.Areas.Ajax.Controllers
{
	public class ContentController : Controller
	{
		Content model = new Content();

		[HttpGet]
		public JsonResult Index(int? id)
		{
			return Json(model.List(id), JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public JsonResult Insert([System.Web.Http.FromBody] Content table)
		{
			bool result = model.Insert(table);

			if (result)
				return Json(table);
			else
				table.Mesaj = "Kayıt eklenemedi.";

			table = (Content)model.Insert(table, null);

			return Json(table);
		}

		[HttpGet]
		public JsonResult Update(int? id)
		{
			return Json(model.Update(id), JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public JsonResult Update([System.Web.Http.FromBody] Content table)
		{
			bool result = model.Update(table);

			if (result)
				return Json(table);
			else
				table.Mesaj = "Kayıt düzenlenemedi.";

			table = (Content)model.Update(table.ID, table);

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
