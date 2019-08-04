import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Validators, FormControl } from "@angular/forms";
import ClassicEditor from '../../../../../Content/admin/js/ckeditor/ckeditor.js';
let AdminCategoryTInsertComponent = class AdminCategoryTInsertComponent {
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
        setTimeout(function () {
            ClassicEditor
                .create(document.querySelector('#Description'), {})
                .then(editor => {
                console.log(editor);
            });
        }, 1000);
        this.insertForm = this.formBuilder.group({
            CatID: new FormControl(null, [Validators.required, Validators.min(0)]),
            TransID: new FormControl(null, [Validators.required, Validators.min(0)]),
            CategoryName: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
            ShortText1: new FormControl(null),
            ShortText2: new FormControl(null),
            Description: new FormControl(null),
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSubmit() {
        this.data.CatID = this.insertForm.get("CatID").value;
        this.data.TransID = this.insertForm.get("TransID").value;
        this.data.CategoryName = this.insertForm.get("CategoryName").value;
        this.data.ShortText1 = this.insertForm.get("ShortText1").value;
        this.data.ShortText2 = this.insertForm.get("ShortText2").value;
        this.data.Description = $(".ck-content").html().replace("<p>", "").replace("</p>", "");
        this.service.postInsert(this.data)
            .subscribe((answer) => {
            if (answer.Mesaj == null) {
                this.router.navigate(['/Admin/CategoryT']);
            }
            else {
                $(".alertMessage").text(answer.Mesaj);
                $(".alert-error").fadeIn("slow");
            }
        }, resError => this.errorMsg = resError);
    }
};
AdminCategoryTInsertComponent = tslib_1.__decorate([
    Component({
        templateUrl: './insert.html'
    })
], AdminCategoryTInsertComponent);
export { AdminCategoryTInsertComponent };
//# sourceMappingURL=insert.js.map