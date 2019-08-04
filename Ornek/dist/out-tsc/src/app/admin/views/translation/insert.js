import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Validators, FormControl } from "@angular/forms";
let AdminTranslationInsertComponent = class AdminTranslationInsertComponent {
    constructor(service, formBuilder, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.subscription = new Subscription();
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
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSubmit() {
        this.uploadData = new FormData();
        this.uploadData.append("file", this.imageFlag);
        this.subscription = this.service.postInsertUpload(this.uploadData).subscribe((answerUpload) => {
            if (answerUpload.Mesaj == null) {
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
                }, resError => this.errorMsg = resError);
            }
            else {
                $(".alertMessage").text(answerUpload.Mesaj);
                $(".alert-error").fadeIn("slow");
            }
        }, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
    }
};
AdminTranslationInsertComponent = tslib_1.__decorate([
    Component({
        templateUrl: './insert.html'
    })
], AdminTranslationInsertComponent);
export { AdminTranslationInsertComponent };
//# sourceMappingURL=insert.js.map