import { Component } from '@angular/core';
import { SharedService } from '../../services/shared';
import { Router } from '@angular/router';

@Component({
	selector: 'admin-layout',
	templateUrl: './layoutAdmin.html'
})

export class AdminLayoutComponent {
	errorMsg: string;

	constructor(private service: SharedService, private router: Router) {
	}

	ngOnInit() {
		this.service.getLoginControl().subscribe((answer) => {
			if (answer == false) {
				this.router.navigate(['/Admin']);
			}
		}, resError => this.errorMsg = resError);
	}
}
