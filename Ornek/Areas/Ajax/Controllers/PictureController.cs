using System.Web.Mvc;
using System.Collections.Generic;
using TDLibrary;
using Repository.PictureModel;

namespace Ornek.Areas.Ajax.Controllers
{
	public class PictureController : Controller
	{
		Picture model = new Picture();

		[HttpGet]
		public JsonResult Index(int? id)
		{
			return Json(model.List(id), JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public JsonResult Insert([System.Web.Http.FromBody] Picture table)
		{
			bool result = model.Insert(table);

			if (result)
				return Json(table);
			else
				table.Mesaj = "Kayıt eklenemedi.";

			table = (Picture)model.Insert(table, null);

			return Json(table);
		}

		[HttpPost]
		public JsonResult InsertUpload([System.Web.Http.FromBody] Picture table)
		{
			List<Uploader> pictures = Uploader.UploadPictures(false);

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
		public JsonResult Update([System.Web.Http.FromBody] Picture table)
		{
			if (table.PictureUrlHasFile)
			{
				try
				{
					System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.OldPictureUrl));
					System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/thumb_" + table.OldPictureUrl));
				}
				catch
				{
					table.Mesaj = "Eski (" + table.OldPictureUrl + ") dosyası silinemedi.";

					return Json(table);
				}
			}

			if (table.ThumbUrlHasFile)
			{
				try
				{
					System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.OldThumbUrl));
					System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/thumb_" + table.OldThumbUrl));
				}
				catch
				{
					table.Mesaj = "Eski (" + table.OldThumbUrl + ") dosyası silinemedi.";

					return Json(table);
				}
			}

			bool result = model.Update(table);

			if (result)
				return Json(table);
			else
				table.Mesaj = "Kayıt düzenlenemedi.";

			table = (Picture)model.Update(table.ID, table);

			return Json(table);
		}

		[HttpPost]
		public JsonResult UpdateUpload([System.Web.Http.FromBody] Picture table)
		{
			List<Uploader> pictures = Uploader.UploadPictures(false);

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
				Picture table = (Picture)model.Select(id, false);

				System.IO.File.Copy(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.PictureUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Kopya_" + table.PictureUrl));
				System.IO.File.Copy(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/thumb_" + table.PictureUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/thumb_Kopya_" + table.PictureUrl));
				System.IO.File.Copy(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.ThumbUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Kopya_" + table.ThumbUrl));
				System.IO.File.Copy(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/thumb_" + table.ThumbUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/thumb_Kopya_" + table.ThumbUrl));
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
				Picture table = (Picture)model.Select(id, false);

				System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.PictureUrl));
				System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/thumb_" + table.PictureUrl));
				System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.ThumbUrl));
				System.IO.File.Delete(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/thumb_" + table.ThumbUrl));
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
				Picture table = (Picture)model.Select(id, false);

				System.IO.File.Move(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.PictureUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Deleted/" + table.PictureUrl));
				System.IO.File.Move(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/thumb_" + table.PictureUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Deleted/thumb_" + table.PictureUrl));
				System.IO.File.Move(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/" + table.ThumbUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Deleted/" + table.ThumbUrl));
				System.IO.File.Move(Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/thumb_" + table.ThumbUrl), Server.MapPath("~/" + AppMgr.UploadPath.Replace(AppMgr.MainPath, "") + "/Deleted/thumb_" + table.ThumbUrl));
			}
			catch
			{
				return Json(false);
			}

			return Json(model.Remove(id), JsonRequestBehavior.AllowGet);
		}
	}
}
