import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Validators, FormControl } from "@angular/forms";
let AdminUsersUpdateComponent = class AdminUsersUpdateComponent {
    constructor(service, formBuilder, router, route) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.data = new Object();
        this.callTable = true;
        this.FillData();
        this.updateForm = this.formBuilder.group({
            ID: new FormControl(null, [Validators.required, Validators.min(0)]),
            Username: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
            Password: new FormControl(null),
            Active: new FormControl(null),
        });
    }
    FillData() {
        if (this.callTable == true) {
            this.route.params.subscribe((params) => {
                this.id = params['id'];
                this.subscription = this.service.getUpdate(this.id).subscribe((answer) => {
                    this.model = answer;
                    this.callTable = false;
                }, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
            });
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSubmit() {
        this.data.ID = this.updateForm.get("ID").value;
        this.data.Username = this.updateForm.get("Username").value;
        this.data.Password = this.updateForm.get("Password").value;
        this.data.Active = this.updateForm.get("Active").value;
        this.service.postUpdate(this.data)
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
    ShowAlert(type) {
        $("#tdAlertMessage li.tdAlert" + type).fadeIn("slow");
        setInterval(function () {
            $("#tdAlertMessage li.tdAlert" + type).fadeOut("slow");
        }, 2000);
    }
};
AdminUsersUpdateComponent = tslib_1.__decorate([
    Component({
        templateUrl: './update.html'
    })
], AdminUsersUpdateComponent);
export { AdminUsersUpdateComponent };
//# sourceMappingURL=update.js.map