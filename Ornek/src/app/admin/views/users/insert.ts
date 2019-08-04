import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { UsersService } from "../../services/users";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
	templateUrl: './insert.html'
})

export class AdminUsersInsertComponent {
	errorMsg: string;

	insertForm: FormGroup;
	data: any;

	model: any;

	private subscription: Subscription = new Subscription();

	constructor(private service: UsersService, private formBuilder: FormBuilder, private router: Router) {
	}

	ngOnInit() {
		this.data = new Object();

		this.insertForm = this.formBuilder.group({
			Username: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Password: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Active: new FormControl(null),
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	onSubmit() {
		this.data.Username = this.insertForm.get("Username").value;
		this.data.Password = this.insertForm.get("Password").value;
		this.data.Active = this.insertForm.get("Active").value;

		this.service.postInsert(this.data)
			.subscribe((answer) => {
				if (answer.Mesaj == null) {
					this.router.navigate(['/Admin/Users']);
				}
				else {
					$(".alertMessage").text(answer.Mesaj);
					$(".alert-error").fadeIn("slow");
				}
			},
				resError => this.errorMsg = resError);
	}
}
