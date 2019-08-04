import { Component } from '@angular/core';
import { Router, RouterEvent, ActivationEnd } from '@angular/router';

@Component({
	selector: 'admin-leftmenu',
	templateUrl: './leftmenu.html'
})

export class AdminLeftMenuComponent {
	errorMsg: string;

	constructor(private router: Router) {
	}

	ngAfterContentInit() {
		this.LeftMenuClick();

		this.router.events.subscribe((event: RouterEvent) => {
			if (event instanceof ActivationEnd) {
				this.LeftMenuClick();
			}
		});
	}

	LeftMenuClick() {
		$("#hdnUrl").val(location.href);

		var AdminPath = "http://localhost/Ornek/Admin";
		var Url = location.href;
		var Urling = Object();

		if (Url != undefined) {
			var tempurl = Url.replace(AdminPath + "/", "");
			var extParams = tempurl.split('?')[1];

			tempurl = tempurl.replace("?" + extParams, "");

			Urling.path = tempurl;
			Urling.controller = tempurl.split('/')[0];
			Urling.action = tempurl.split('/')[1];
			Urling.parameter = tempurl.split('/')[2];

			if (extParams != undefined)
				Urling.parameters = extParams.split('&');
		}

		if (Urling.controller != undefined) {
			var activeLi = $("#sidebar li[data-url='" + Urling.controller + "']");
			var passiveSubmenuLi = $("#sidebar li.submenu");
			var submenuLi = activeLi.parent("ul").parent("li");

			$("#sidebar li").removeClass("active");
			$("#sidebar li").removeClass("open");

			activeLi.addClass("active");

			if (submenuLi.hasClass("submenu")) {
				if ($("body").width() > 970 || $("body").width() <= 480) {
					submenuLi.addClass("open");
				}
				submenuLi.addClass("active");
			}

			setTimeout(function () {
				passiveSubmenuLi.each(function () {
					if (!$(this).hasClass("open")) {
						$(this).children("ul").slideUp();
					}
					else {
						$(this).children("ul").slideDown();
					}
				});
			}, 1);
		}
	}
}
