import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { TranslationService } from "../../services/translation";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
	templateUrl: './insert.html'
})

export class AdminTranslationInsertComponent {
	errorMsg: string;

	insertForm: FormGroup;
	data: any;

	model: any;

	uploadData: any;
	imageFlag: any;

	private subscription: Subscription = new Subscription();

	constructor(private service: TranslationService, private formBuilder: FormBuilder, private router: Router) {
	}

	ngOnInit() {
		this.data = new Object();

		this.insertForm = this.formBuilder.group({
			TransName: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			ShortName: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Flag: new FormControl(null),
			Active: new FormControl(null),
		});
	}

	onFlagFileSelect(event) {
		if (event.target.files.length > 0) {
			this.data.Flag = event.target.files[0].name;
			this.data.FlagHasFile = true;
			this.imageFlag = event.target.files[0];
		}
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	onSubmit() {
		this.uploadData = new FormData();
		this.uploadData.append("file", this.imageFlag);

		this.subscription = this.service.postInsertUpload(this.uploadData).subscribe((answerUpload) => {
			if (answerUpload.Mesaj == null)
			{
				this.data.TransName = this.insertForm.get("TransName").value;
				this.data.ShortName = this.insertForm.get("ShortName").value;
				this.data.Active = this.insertForm.get("Active").value;

				this.service.postInsert(this.data)
					.subscribe((answer) => {
						if (answer.Mesaj == null) {
							this.router.navigate(['/Admin/Translation']);
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
