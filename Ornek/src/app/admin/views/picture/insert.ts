import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { PictureService } from "../../services/picture";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
	templateUrl: './insert.html'
})

export class AdminPictureInsertComponent {
	errorMsg: string;

	insertForm: FormGroup;
	data: any;

	model: any;

	uploadData: any;
	imagePictureUrl: any;
	imageThumbUrl: any;

	private subscription: Subscription = new Subscription();

	constructor(private service: PictureService, private formBuilder: FormBuilder, private router: Router) {
	}

	ngOnInit() {
		this.data = new Object();

		this.insertForm = this.formBuilder.group({
			Title: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl(null),
			PictureUrl: new FormControl(null),
			ThumbUrl: new FormControl(null),
			Code: new FormControl(null),
			Active: new FormControl(null),
		});
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

		this.subscription = this.service.postInsertUpload(this.uploadData).subscribe((answerUpload) => {
			if (answerUpload.Mesaj == null)
			{
				this.data.Title = this.insertForm.get("Title").value;
                this.data.Description = this.insertForm.get("Description").value;
				this.data.Code = this.insertForm.get("Code").value;
				this.data.Active = this.insertForm.get("Active").value;

				this.service.postInsert(this.data)
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
}
