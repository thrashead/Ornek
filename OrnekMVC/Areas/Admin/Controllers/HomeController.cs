using System.Web.Mvc;

namespace OrnekMVC.Areas.Admin.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}

		public ActionResult Login()
		{
			return View();
		}
	}
}
