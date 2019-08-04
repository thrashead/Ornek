import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Validators, FormControl } from "@angular/forms";
let AdminFileUpdateComponent = class AdminFileUpdateComponent {
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
            Title: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
            Description: new FormControl(null),
            FileUrl: new FormControl(null),
            Code: new FormControl(null),
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
    onFileUrlFileSelect(event) {
        if (event.target.files.length > 0) {
            this.data.FileUrl = event.target.files[0].name;
            this.data.FileUrlHasFile = true;
            this.fileFileUrl = event.target.files[0];
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSubmit() {
        this.uploadData = new FormData();
        this.uploadData.append("file", this.fileFileUrl);
        this.subscription = this.service.postUpdateUpload(this.uploadData).subscribe((answerUpload) => {
            if (answerUpload.Mesaj == null) {
                this.data.ID = this.updateForm.get("ID").value;
                this.data.Title = this.updateForm.get("Title").value;
                this.data.Description = this.updateForm.get("Description").value;
                if (this.data.FileUrlHasFile) {
                    this.data.OldFileUrl = this.updateForm.get("FileUrl").value;
                }
                else {
                    this.data.FileUrl = this.updateForm.get("FileUrl").value;
                }
                this.data.Code = this.updateForm.get("Code").value;
                this.data.Active = this.updateForm.get("Active").value;
                this.service.postUpdate(this.data)
                    .subscribe((answer) => {
                    if (answer.Mesaj == null) {
                        this.router.navigate(['/Admin/File']);
                    }
                    else {
                        $(".alertMessage").text(answer.Mesaj);
                        $(".alert-error").fadeIn("slow");
                    }
                }, resError => this.errorMsg = resError);
            }
            else {
                $(".alertMessage").text(answerUpload.Mesaj);
                $(".alert-error").fadeIn("slow");
            }
        }, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
    }
    ShowAlert(type) {
        $("#tdAlertMessage li.tdAlert" + type).fadeIn("slow");
        setInterval(function () {
            $("#tdAlertMessage li.tdAlert" + type).fadeOut("slow");
        }, 2000);
    }
};
AdminFileUpdateComponent = tslib_1.__decorate([
    Component({
        templateUrl: './update.html'
    })
], AdminFileUpdateComponent);
export { AdminFileUpdateComponent };
//# sourceMappingURL=update.js.map