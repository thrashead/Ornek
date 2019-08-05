using System.Web.Mvc;
using System.Collections.Generic;
using TDLibrary;
using Repository.TranslationModel;

namespace OrnekMVC.Areas.Admin.Controllers
{
	public class TranslationController : Controller
	{
		Translation model = new Translation();

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
		public ActionResult Insert(Translation table)
		{
			if (ModelState.IsValid)
			{
				List<Uploader> pictures = Uploader.UploadPictures(false, null, false);

				foreach (var item in pictures)
				{
					if (!item.Control)
					{
						table.Mesaj = item.ErrorMessage;

						return View("Insert", table);
					}
				}

				bool result = model.Insert(table);

				if(result)
					return RedirectToAction("Index");
				else
					table.Mesaj = "Kayıt eklenemedi.";
			}
			else
				table.Mesaj = "Model uygun değil.";

			table = (Translation)model.Insert(table, null);

			return View("Insert", table);
		}

		[HttpGet]
		public ActionResult Update(int? id)
		{
			Translation table = (Translation)model.Update(id);

			table.OldFlag = table.Flag;

			return View(table);
		}

		[HttpPost]
		public ActionResult Update(Translation table)
		{
			if (ModelState.IsValid)
			{
				List<Uploader> pictures = Uploader.UploadPictures(false, null, false);

				foreach (var item in pictures)
				{
					if (item.UploadError != null)
					{
						table.Mesaj = item.ErrorMessage;

						return View("Update", table);
					}
				}

				if (table.Flag != table.OldFlag)
				{
					try
					{
						System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.OldFlag));
					}
					catch
					{
						table.Mesaj = "Eski dosya silinemedi.";

						return View("Update", table);
					}
				}

				bool result = model.Update(table);

				if(result)
					return RedirectToAction("Index");
				else
					table.Mesaj = "Kayıt düzenlenemedi.";
			}
			else
				table.Mesaj = "Model uygun değil.";

			table = (Translation)model.Update(table.ID, table);

			return View("Update", table);
		}

		[HttpPost]
		public JsonResult Copy(int id)
		{
			try
			{
				Translation table = (Translation)model.Select(id, false);

				System.IO.File.Copy(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.Flag), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Kopya_" + table.Flag));
			}
			catch
			{
				return Json(false);
			}

			return Json(model.Copy(id));
		}

		[HttpPost]
		public JsonResult Delete(int? id)
		{
			try
			{
				Translation table = (Translation)model.Select(id, false);

				System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.Flag));
			}
			catch
			{
				return Json(false);
			}

			return Json(model.Delete(id));
		}

		[HttpPost]
		public JsonResult Remove(int? id)
		{
			try
			{
				Translation table = (Translation)model.Select(id, false);

				System.IO.File.Move(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.Flag), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Deleted/" + table.Flag));
			}
			catch
			{
				return Json(false);
			}

			return Json(model.Remove(id));
		}
	}
}
