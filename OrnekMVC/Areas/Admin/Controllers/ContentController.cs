using System.Web.Mvc;
using Repository.ContentModel;

namespace OrnekMVC.Areas.Admin.Controllers
{
	public class ContentController : Controller
	{
		Content model = new Content();

		[HttpGet]
		public ViewResult Index(int? id)
		{
			return View(model.List(id));
		}

		[HttpGet]
		public ActionResult Insert()
		{
			return View(model.Insert());
		}

		[HttpPost]
		public ActionResult Insert(Content table)
		{
			if (ModelState.IsValid)
			{
				bool result = model.Insert(table);

				if(result)
					return RedirectToAction("Index");
				else
					table.Mesaj = "Kayıt eklenemedi.";
			}
			else
				table.Mesaj = "Model uygun değil.";

			table = (Content)model.Insert(table, null);

			return View("Insert", table);
		}

		[HttpGet]
		public ActionResult Update(int? id)
		{
			Content table = (Content)model.Update(id);

			return View(table);
		}

		[HttpPost]
		public ActionResult Update(Content table)
		{
			if (ModelState.IsValid)
			{
				bool result = model.Update(table);

				if(result)
					return RedirectToAction("Index");
				else
					table.Mesaj = "Kayıt düzenlenemedi.";
			}
			else
				table.Mesaj = "Model uygun değil.";

			table = (Content)model.Update(table.ID, table);

			return View("Update", table);
		}

		[HttpPost]
		public JsonResult Copy(int id)
		{
			return Json(model.Copy(id));
		}

		[HttpPost]
		public JsonResult Delete(int? id)
		{
			return Json(model.Delete(id));
		}

		[HttpPost]
		public JsonResult Remove(int? id)
		{
			return Json(model.Remove(id));
		}
	}
}
