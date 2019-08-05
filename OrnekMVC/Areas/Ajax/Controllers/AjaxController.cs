using Newtonsoft.Json;
using Repository.UsersModel;
using System.Web.Mvc;
using TDLibrary;

namespace OrnekMVC.Areas.Ajax.Controllers
{
	public class AjaxController : Controller
	{
        Users model = new Users();

        [HttpPost]
		public JsonResult Login(string login)
		{
            Users user = JsonConvert.DeserializeObject<Users>(login);

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
