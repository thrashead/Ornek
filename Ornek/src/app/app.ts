import { Component } from "@angular/core";
import '../../Content/js/jquery/jquery.min.js';

declare global {
	interface JQuery {
		dataTable(obj: any): JQuery;
		typeahead(obj: any): JQuery;
	}
}

@Component({
	selector: "orn-app",
	templateUrl: './app.html'
})

export class AppComponent {
	ngOnInit() {
	}
}
