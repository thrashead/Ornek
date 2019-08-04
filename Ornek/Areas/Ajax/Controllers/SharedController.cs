using Repository.UsersModel;
using System.Web.Mvc;
using TDLibrary;

namespace Ornek.Areas.Ajax.Controllers
{
	public class SharedController : Controller
	{
        Users model = new Users();

		[HttpPost]
		public JsonResult Login([System.Web.Http.FromBody] Users user)
		{
            user = (Users)model.LoginControl(user.Username, user.Password.ToMD5());

            if (user != null)
            {
                Session["CurrentUser"] = user;

                return Json(true);
            }

            return Json(false);
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
			if (Users.CurrentUser == null)
			{
				return Json(false, JsonRequestBehavior.AllowGet);
			}
			else
			{
				return Json(true, JsonRequestBehavior.AllowGet);
			}
        }

        [HttpGet]
        public JsonResult CurrentUser()
        {
            return Json(Users.CurrentUser, JsonRequestBehavior.AllowGet);
        }
    }
}
