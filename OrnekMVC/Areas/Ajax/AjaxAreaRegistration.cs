using System.Web.Mvc;

namespace OrnekMVC.Areas.Ajax
{
	public class AjaxAreaRegistration : AreaRegistration
	{
		public override string AreaName
		{
			get
			{
				return "Ajax";
			}
		}

		public override void RegisterArea(AreaRegistrationContext context)
		{
			context.MapRoute(
				"Ajax_default",
				"Ajax/{controller}/{action}/{id}",
				new { controller = "Home", action = "Index", id = UrlParameter.Optional },
				namespaces: new[] { "OrnekMVC.Areas.Ajax.Controllers" }
			);
		}
	}
}
