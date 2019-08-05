import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'orn-layout',
	templateUrl: './layout.html'
})

export class LayoutComponent {
    constructor(private router: Router) {
    }
    ngOnInit() {
        this.router.navigate(['/Admin/Login']);
	}
}
