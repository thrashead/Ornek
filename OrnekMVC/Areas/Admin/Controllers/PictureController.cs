using System.Web.Mvc;
using System.Collections.Generic;
using TDLibrary;
using Repository.PictureModel;

namespace OrnekMVC.Areas.Admin.Controllers
{
	public class PictureController : Controller
	{
		Picture model = new Picture();

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
		public ActionResult Insert(Picture table)
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

			table = (Picture)model.Insert(table, null);

			return View("Insert", table);
		}

		[HttpGet]
		public ActionResult Update(int? id)
		{
			Picture table = (Picture)model.Update(id);

			table.OldPictureUrl = table.PictureUrl;
			table.OldThumbUrl = table.ThumbUrl;
			return View(table);
		}

		[HttpPost]
		public ActionResult Update(Picture table)
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

				if (table.PictureUrl != table.OldPictureUrl)
				{
					try
					{
						System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.OldPictureUrl));
					}
					catch
					{
						table.Mesaj = "Eski dosya silinemedi.";

						return View("Update", table);
					}
				}

				if (table.ThumbUrl != table.OldThumbUrl)
				{
					try
					{
						System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.OldThumbUrl));
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

			table = (Picture)model.Update(table.ID, table);

			return View("Update", table);
		}

		[HttpPost]
		public JsonResult Copy(int id)
		{
			try
			{
				Picture table = (Picture)model.Select(id, false);

				System.IO.File.Copy(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.PictureUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Kopya_" + table.PictureUrl));
				System.IO.File.Copy(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.ThumbUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Kopya_" + table.ThumbUrl));
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
				Picture table = (Picture)model.Select(id, false);

				System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.PictureUrl));
				System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.ThumbUrl));
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
				Picture table = (Picture)model.Select(id, false);

				System.IO.File.Move(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.PictureUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Deleted/" + table.PictureUrl));
				System.IO.File.Move(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.ThumbUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Deleted/" + table.ThumbUrl));
			}
			catch
			{
				return Json(false);
			}

			return Json(model.Remove(id));
		}
	}
}
