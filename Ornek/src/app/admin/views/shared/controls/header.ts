import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared';

@Component({
	selector: 'admin-header',
	templateUrl: './header.html'
})

export class AdminHeaderComponent {
	errorMsg: string;
	website: string = "http://localhost/Ornek/";

	constructor(private service: SharedService, private router: Router) {
	}

	ngOnInit() {
		$('#txtMainSearch').typeahead({
			source: [
				'Category',
				'Content'
			],
			items: 4
		});
	}

	onClick() {
		var txtValue = $("#txtMainSearch").val();

		switch (txtValue) {
			case "Category":
				this.router.navigate(['/Admin/Category']);
				break;
			case "Content":
				this.router.navigate(['/Admin/Content']);
				break;
			default:
				alert("Aradığınız kelimeye uygun sonuç bulunamadı...");
				break;
		}
	}

	onLogout() {
		this.service.getLogout().subscribe((answer) => {
			if (answer == true) {
				this.router.navigate(['/Admin/Login']);
			}
		}, resError => this.errorMsg = resError);
	}

	onKeyPress(event: any) {
		if (event.keyCode == "13") {
			this.onClick();
		}
	}
}
