using System.Web.Mvc;

namespace Ornek.Areas.Ajax.Controllers
{
	public class SharedController : Controller
	{
		[HttpPost]
		public JsonResult Login([System.Web.Http.FromBody] dynamic user)
		{
			Session["CurrentUser"] = user;

			return Json(true);
		}

		[HttpGet]
		public JsonResult Logout()
		{
			Session["CurrentUser"] = null;

			return Json(true, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult LoginControl()
		{
			if (Session["CurrentUser"] == null)
			{
				return Json(false, JsonRequestBehavior.AllowGet);
			}
			else
			{
				return Json(true, JsonRequestBehavior.AllowGet);
			}
		}
	}
}
