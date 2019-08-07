import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { ContentService } from "../../services/content";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import ClassicEditor from '../../../../../Content/admin/js/ckeditor/ckeditor.js';

@Component({
	templateUrl: './insert.html'
})

export class AdminContentInsertComponent {
	errorMsg: string;

	insertForm: FormGroup;
	data: any;

	model: any;

	private subscription: Subscription = new Subscription();

	constructor(private service: ContentService, private formBuilder: FormBuilder, private router: Router) {
	}

	ngOnInit() {
		this.data = new Object();

		this.subscription = this.service.getInsert().subscribe((answer) => {
			this.model = answer;
		}, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });

		setTimeout(function () {
			ClassicEditor
				.create(document.querySelector('#Description'), {
				})
				.then(editor => {
					console.log(editor);
				});
		}, 1000);

		this.insertForm = this.formBuilder.group({
			CatID: new FormControl(null),
			Title: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			ShortText: new FormControl(null),
			Description: new FormControl(null),
			Active: new FormControl(null),
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	onSubmit() {
		this.data.CatID = this.insertForm.get("CatID").value;
		this.data.Title = this.insertForm.get("Title").value;
		this.data.ShortText = this.insertForm.get("ShortText").value;
		this.data.Description = $(".ck-content").html().replace("<p>", "").replace("</p>", "");
		this.data.Active = this.insertForm.get("Active").value;

		this.service.postInsert(this.data)
			.subscribe((answer) => {
				if (answer.Mesaj == null) {
					this.router.navigate(['/Admin/Content']);
				}
				else {
					$(".alertMessage").text(answer.Mesaj);
					$(".alert-error").fadeIn("slow");
				}
			},
				resError => this.errorMsg = resError);
	}
}
