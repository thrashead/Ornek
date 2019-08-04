import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Validators, FormControl } from "@angular/forms";
let AdminCategoryInsertComponent = class AdminCategoryInsertComponent {
    constructor(service, formBuilder, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.data = new Object();
        this.subscription = this.service.getInsert().subscribe((answer) => {
            this.model = answer;
        }, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
        this.insertForm = this.formBuilder.group({
            ParentID: new FormControl(null, [Validators.required, Validators.min(0)]),
            Title: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
            Code: new FormControl(null),
            Active: new FormControl(null),
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSubmit() {
        this.data.ParentID = this.insertForm.get("ParentID").value;
        this.data.Title = this.insertForm.get("Title").value;
        this.data.Code = this.insertForm.get("Code").value;
        this.data.Active = this.insertForm.get("Active").value;
        this.service.postInsert(this.data)
            .subscribe((answer) => {
            if (answer.Mesaj == null) {
                this.router.navigate(['/Admin/Category']);
            }
            else {
                $(".alertMessage").text(answer.Mesaj);
                $(".alert-error").fadeIn("slow");
            }
        }, resError => this.errorMsg = resError);
    }
};
AdminCategoryInsertComponent = tslib_1.__decorate([
    Component({
        templateUrl: './insert.html'
    })
], AdminCategoryInsertComponent);
export { AdminCategoryInsertComponent };
//# sourceMappingURL=insert.js.map