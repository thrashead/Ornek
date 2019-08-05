using System.Web.Mvc;
using System.Collections.Generic;
using TDLibrary;
using Repository.FileModel;

namespace OrnekMVC.Areas.Admin.Controllers
{
	public class FileController : Controller
	{
		File model = new File();

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
		public ActionResult Insert(File table)
		{
			if (ModelState.IsValid)
			{
				List<Uploader> files = Uploader.UploadFiles(false);

				foreach (var item in files)
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

			table = (File)model.Insert(table, null);

			return View("Insert", table);
		}

		[HttpGet]
		public ActionResult Update(int? id)
		{
			File table = (File)model.Update(id);

			table.OldFileUrl = table.FileUrl;

			return View(table);
		}

		[HttpPost]
		public ActionResult Update(File table)
		{
			if (ModelState.IsValid)
			{
				List<Uploader> files = Uploader.UploadFiles(false);

				foreach (var item in files)
				{
					if (item.UploadError != null)
					{
						table.Mesaj = item.ErrorMessage;

						return View("Update", table);
					}
				}

				if (table.FileUrl != table.OldFileUrl)
				{
					try
					{
						System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.OldFileUrl));
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

			table = (File)model.Update(table.ID, table);

			return View("Update", table);
		}

		[HttpPost]
		public JsonResult Copy(int id)
		{
			try
			{
				File table = (File)model.Select(id, false);

				System.IO.File.Copy(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.FileUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Kopya_" + table.FileUrl));
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
				File table = (File)model.Select(id, false);

				System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.FileUrl));
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
				File table = (File)model.Select(id, false);

				System.IO.File.Move(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.FileUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Deleted/" + table.FileUrl));
			}
			catch
			{
				return Json(false);
			}

			return Json(model.Remove(id));
		}
	}
}
