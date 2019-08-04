﻿import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { PictureService } from "../../services/picture";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
	templateUrl: './update.html'
})

export class AdminPictureUpdateComponent {
	errorMsg: string;
	id: string;

	updateForm: FormGroup;
	data: any;

	model: any;

	callTable: boolean;

	uploadData: any;
	imagePictureUrl: any;
	imageThumbUrl: any;

	private subscription: Subscription = new Subscription();

	constructor(private service: PictureService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.data = new Object();

		this.callTable = true;
		this.FillData();

		this.updateForm = this.formBuilder.group({
			ID: new FormControl(null, [Validators.required, Validators.min(0)]),
			Title: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl(null),
			PictureUrl: new FormControl(null),
			ThumbUrl: new FormControl(null),
			Code: new FormControl(null),
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

	onPictureUrlFileSelect(event) {
		if (event.target.files.length > 0) {
			this.data.PictureUrl = event.target.files[0].name;
			this.data.PictureUrlHasFile = true;
			this.imagePictureUrl = event.target.files[0];
		}
	}

	onThumbUrlFileSelect(event) {
		if (event.target.files.length > 0) {
			this.data.ThumbUrl = event.target.files[0].name;
			this.data.ThumbUrlHasFile = true;
			this.imageThumbUrl = event.target.files[0];
		}
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	onSubmit() {
		this.uploadData = new FormData();
		this.uploadData.append("file", this.imagePictureUrl);
		this.uploadData.append("file", this.imageThumbUrl);

		this.subscription = this.service.postUpdateUpload(this.uploadData).subscribe((answerUpload) => {
			if (answerUpload.Mesaj == null)
			{
				this.data.ID = this.updateForm.get("ID").value;
				this.data.Title = this.updateForm.get("Title").value;
                this.data.Description = this.updateForm.get("Description").value;

				if (this.data.PictureUrlHasFile) {
					this.data.OldPictureUrl = this.updateForm.get("PictureUrl").value;
				}
				else {
					this.data.PictureUrl = this.updateForm.get("PictureUrl").value;
				}


				if (this.data.ThumbUrlHasFile) {
					this.data.OldThumbUrl = this.updateForm.get("ThumbUrl").value;
				}
				else {
					this.data.ThumbUrl = this.updateForm.get("ThumbUrl").value;
				}

				this.data.Code = this.updateForm.get("Code").value;
				this.data.Active = this.updateForm.get("Active").value;

				this.service.postUpdate(this.data)
					.subscribe((answer) => {
						if (answer.Mesaj == null) {
							this.router.navigate(['/Admin/Picture']);
						}
						else {
							$(".alertMessage").text(answer.Mesaj);
							$(".alert-error").fadeIn("slow");
						}
					},
						resError => this.errorMsg = resError);
			}
			else
			{
				$(".alertMessage").text(answerUpload.Mesaj);
				$(".alert-error").fadeIn("slow");
			}
		}, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
	}

	ShowAlert(type: string) {
		$("#tdAlertMessage li.tdAlert" + type).fadeIn("slow");

		setInterval(function () {
			$("#tdAlertMessage li.tdAlert" + type).fadeOut("slow");
		}, 2000);
	}
}
