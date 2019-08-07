import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { ContentService } from "../../services/content";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import ClassicEditor from "../../../../../Content/admin/js/ckeditor/ckeditor.js";

@Component({
	templateUrl: './update.html'
})

export class AdminContentUpdateComponent {
	errorMsg: string;
	id: string;

	updateForm: FormGroup;
	data: any;

	model: any;

	callTable: boolean;

	private subscription: Subscription = new Subscription();

	constructor(private service: ContentService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.data = new Object();

		this.callTable = true;
		this.FillData();

		setTimeout(function () {
			ClassicEditor
				.create(document.querySelector('#Description'), {
				})
				.then(editor => {
					console.log(editor);
				});

		}, 1000);

		this.updateForm = this.formBuilder.group({
			ID: new FormControl(null, [Validators.required, Validators.min(0)]),
			CatID: new FormControl(null),
			Title: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			ShortText: new FormControl(null),
			Description: new FormControl(null),
			Active: new FormControl(null),
		});
	}

	FillData() {
		if (this.callTable == true) {
			this.route.params.subscribe((params: Params) => {
				this.id = params['id'];
				this.subscription = this.service.getUpdate(this.id).subscribe((answer) => {
					this.model = answer;
					this.callTable = false;
				}, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
			});
		}
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	onSubmit() {
		this.data.ID = this.updateForm.get("ID").value;
		this.data.CatID = this.updateForm.get("CatID").value;
		this.data.Title = this.updateForm.get("Title").value;
		this.data.ShortText = this.updateForm.get("ShortText").value;
		this.data.Description = $(".ck-content").html().replace("<p>", "").replace("</p>", "");
		this.data.Active = this.updateForm.get("Active").value;

		this.service.postUpdate(this.data)
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

	ShowAlert(type: string) {
		$("#tdAlertMessage li.tdAlert" + type).fadeIn("slow");

		setInterval(function () {
			$("#tdAlertMessage li.tdAlert" + type).fadeOut("slow");
		}, 2000);
	}
}
