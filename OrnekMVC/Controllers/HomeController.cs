using System.Web.Mvc;

namespace OrnekMVC.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
            Response.Redirect("~/Admin/Home/Login");

			return View();
		}
	}
}
