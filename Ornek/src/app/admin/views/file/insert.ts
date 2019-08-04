import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { FileService } from "../../services/file";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
	templateUrl: './insert.html'
})

export class AdminFileInsertComponent {
	errorMsg: string;

	insertForm: FormGroup;
	data: any;

	model: any;

	uploadData: any;
	fileFileUrl : any;

	private subscription: Subscription = new Subscription();

	constructor(private service: FileService, private formBuilder: FormBuilder, private router: Router) {
	}

	ngOnInit() {
		this.data = new Object();

		this.insertForm = this.formBuilder.group({
			Title: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl(null),
			FileUrl: new FormControl(null),
			Code: new FormControl(null),
			Active: new FormControl(null),
		});
	}

	onFileUrlFileSelect(event) {
		if (event.target.files.length > 0) {
			this.data.FileUrl = event.target.files[0].name;
			this.data.FileUrlHasFile = true;
			this.fileFileUrl = event.target.files[0];
		}
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	onSubmit() {
		this.uploadData = new FormData();
		this.uploadData.append("file", this.fileFileUrl);

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
							this.router.navigate(['/Admin/File']);
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
