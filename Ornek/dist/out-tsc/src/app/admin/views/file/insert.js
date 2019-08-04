import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Validators, FormControl } from "@angular/forms";
let AdminFileInsertComponent = class AdminFileInsertComponent {
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
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSubmit() {
        this.uploadData = new FormData();
        this.uploadData.append("file", this.fileFileUrl);
        this.subscription = this.service.postInsertUpload(this.uploadData).subscribe((answerUpload) => {
            if (answerUpload.Mesaj == null) {
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
                }, resError => this.errorMsg = resError);
            }
            else {
                $(".alertMessage").text(answerUpload.Mesaj);
                $(".alert-error").fadeIn("slow");
            }
        }, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
    }
};
AdminFileInsertComponent = tslib_1.__decorate([
    Component({
        templateUrl: './insert.html'
    })
], AdminFileInsertComponent);
export { AdminFileInsertComponent };
//# sourceMappingURL=insert.js.map