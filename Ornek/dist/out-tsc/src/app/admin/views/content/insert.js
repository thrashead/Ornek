import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Validators, FormControl } from "@angular/forms";
let AdminContentInsertComponent = class AdminContentInsertComponent {
    constructor(service, formBuilder, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.data = new Object();
        this.insertForm = this.formBuilder.group({
            Title: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
            Code: new FormControl(null),
            Active: new FormControl(null),
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSubmit() {
        this.data.Title = this.insertForm.get("Title").value;
        this.data.Code = this.insertForm.get("Code").value;
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
        }, resError => this.errorMsg = resError);
    }
};
AdminContentInsertComponent = tslib_1.__decorate([
    Component({
        templateUrl: './insert.html'
    })
], AdminContentInsertComponent);
export { AdminContentInsertComponent };
//# sourceMappingURL=insert.js.map