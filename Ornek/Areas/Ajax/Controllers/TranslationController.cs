using System.Web.Mvc;
using System.Collections.Generic;
using TDLibrary;
using Repository.TranslationModel;

namespace Ornek.Areas.Ajax.Controllers
{
	public class TranslationController : Controller
	{
		Translation model = new Translation();

		[HttpGet]
		public JsonResult Index(int? id)
		{
			return Json(model.List(id), JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public JsonResult Insert([System.Web.Http.FromBody] Translation table)
		{
			bool result = model.Insert(table);

			if (result)
				return Json(table);
			else
				table.Mesaj = "Kayıt eklenemedi.";

			table = (Translation)model.Insert(table, null);

			return Json(table);
		}

		[HttpPost]
		public JsonResult InsertUpload([System.Web.Http.FromBody] Translation table)
		{
			List<Uploader> pictures = Uploader.UploadPictures(false, null, false);

			foreach (var item in pictures)
			{
				if (!item.Control)
				{
					table.Mesaj = item.ErrorMessage;

					return Json(table);
				}
			}

			return Json(table);
		}

		[HttpGet]
		public JsonResult Update(int? id)
		{
			return Json(model.Update(id), JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public JsonResult Update([System.Web.Http.FromBody] Translation table)
		{
			if (table.FlagHasFile)
			{
				try
				{
					System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.OldFlag));
				}
				catch
				{
					table.Mesaj = "Eski (" + table.OldFlag + ") dosyası silinemedi.";

					return Json(table);
				}
			}

			bool result = model.Update(table);

			if (result)
				return Json(table);
			else
				table.Mesaj = "Kayıt düzenlenemedi.";

			table = (Translation)model.Update(table.ID, table);

			return Json(table);
		}

		[HttpPost]
		public JsonResult UpdateUpload([System.Web.Http.FromBody] Translation table)
		{
			List<Uploader> pictures = Uploader.UploadPictures(false, null, false);

			foreach (var item in pictures)
			{
				if (item.UploadError != null)
				{
					table.Mesaj = item.ErrorMessage;

					return Json(table);
				}
			}

			return Json(table);
		}

		[HttpGet]
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

			return Json(model.Copy(id), JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
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

			return Json(model.Delete(id), JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
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

			return Json(model.Remove(id), JsonRequestBehavior.AllowGet);
		}
	}
}
