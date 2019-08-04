using System.Web.Mvc;
using System.Collections.Generic;
using TDLibrary;
using Repository.FileModel;

namespace Ornek.Areas.Ajax.Controllers
{
	public class FileController : Controller
	{
		File model = new File();

		[HttpGet]
		public JsonResult Index(int? id)
		{
			return Json(model.List(id), JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public JsonResult Insert([System.Web.Http.FromBody] File table)
		{
			bool result = model.Insert(table);

			if (result)
				return Json(table);
			else
				table.Mesaj = "Kayıt eklenemedi.";

			table = (File)model.Insert(table, null);

			return Json(table);
		}

		[HttpPost]
		public JsonResult InsertUpload([System.Web.Http.FromBody] File table)
		{
			List<Uploader> files = Uploader.UploadFiles(false);

			foreach (var item in files)
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
		public JsonResult Update([System.Web.Http.FromBody] File table)
		{
			if (table.FileUrlHasFile)
			{
				try
				{
					System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.OldFileUrl));
				}
				catch
				{
					table.Mesaj = "Eski (" + table.OldFileUrl + ") dosyası silinemedi.";

					return Json(table);
				}
			}

			bool result = model.Update(table);

			if (result)
				return Json(table);
			else
				table.Mesaj = "Kayıt düzenlenemedi.";

			table = (File)model.Update(table.ID, table);

			return Json(table);
		}

		[HttpPost]
		public JsonResult UpdateUpload([System.Web.Http.FromBody] File table)
		{
			List<Uploader> files = Uploader.UploadFiles(false);

			foreach (var item in files)
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
				File table = (File)model.Select(id, false);

				System.IO.File.Copy(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.FileUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Kopya_" + table.FileUrl));
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
				File table = (File)model.Select(id, false);

				System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.FileUrl));
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
				File table = (File)model.Select(id, false);

				System.IO.File.Move(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.FileUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Deleted/" + table.FileUrl));
			}
			catch
			{
				return Json(false);
			}

			return Json(model.Remove(id), JsonRequestBehavior.AllowGet);
		}
	}
}
