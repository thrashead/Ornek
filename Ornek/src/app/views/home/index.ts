import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	templateUrl: './index.html'
})

export class IndexComponent {
    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.navigate(['/Admin']);
	}
}
