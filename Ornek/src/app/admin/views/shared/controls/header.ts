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

    user: any;

	constructor(private service: SharedService, private router: Router) {
	}

    ngOnInit() {
        this.service.getCurrentUser().subscribe((resData) => {
            if (resData != null) {
                this.user = resData;
            }
        }, resError => this.errorMsg = resError);

		$('#txtMainSearch').typeahead({
			source: [
				'Category',
				'CategoryT',
				'Content',
				'ContentT',
				'File',
				'Picture',
				'Translation',
				'Users'
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
			case "CategoryT":
				this.router.navigate(['/Admin/CategoryT']);
				break;
			case "Content":
				this.router.navigate(['/Admin/Content']);
				break;
			case "ContentT":
				this.router.navigate(['/Admin/ContentT']);
				break;
			case "File":
				this.router.navigate(['/Admin/File']);
				break;
			case "Picture":
				this.router.navigate(['/Admin/Picture']);
				break;
			case "Translation":
				this.router.navigate(['/Admin/Translation']);
				break;
			case "Users":
				this.router.navigate(['/Admin/Users']);
				break;
			default:
				alert("Aradığınız kelimeye uygun sonuç bulunamadı...");
				break;
		}
	}

	onLogout() {
		this.service.getLogout().subscribe((answer) => {
			if (answer == true) {
				this.router.navigate(['/Admin/']);
			}
		}, resError => this.errorMsg = resError);
	}

	onKeyPress(event: any) {
		if (event.keyCode == "13") {
			this.onClick();
		}
	}
}
