﻿import { Component, ViewEncapsulation } from '@angular/core';
import '../../../../../../Content/admin/js/jquery.dataTables.min.js';
import '../../../../../../Content/admin/js/bootstrap.min.js';
import '../../../../../../Content/admin/js/matrix.js';
import '../../../../../../Content/admin/js/ckeditor/ckeditor.js';
import '../../../../../../Content/admin/js/pathscript.js';
import '../../../../../../Content/admin/js/main.js';

@Component({
	selector: 'admin-scripts',
	template: '',
	styleUrls: [
		'../../../../../../Content/admin/css/bootstrap.min.css',
		'../../../../../../Content/admin/css/bootstrap-responsive.min.css',

		'../../../../../../Content/admin/css/matrix-style.css',
		'../../../../../../Content/admin/css/matrix-media.css',
		'../../../../../../Content/admin/css/font-awesome/css/font-awesome.css',
		'../../../../../../Content/admin/css/main.css'
	],
	encapsulation: ViewEncapsulation.None
})

export class AdminScriptsComponent {
}
