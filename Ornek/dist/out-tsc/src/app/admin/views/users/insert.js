import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Validators, FormControl } from "@angular/forms";
let AdminUsersInsertComponent = class AdminUsersInsertComponent {
    constructor(service, formBuilder, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.data = new Object();
        this.insertForm = this.formBuilder.group({
            Username: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
            Password: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
            Active: new FormControl(null),
        });
    }
    ngOnDestroy() {
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
        }, resError => this.errorMsg = resError);
    }
};
AdminUsersInsertComponent = tslib_1.__decorate([
    Component({
        templateUrl: './insert.html'
    })
], AdminUsersInsertComponent);
export { AdminUsersInsertComponent };
//# sourceMappingURL=insert.js.map