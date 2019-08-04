import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Validators, FormControl } from "@angular/forms";
import ClassicEditor from "../../../../../Content/admin/js/ckeditor/ckeditor.js";
let AdminContentTUpdateComponent = class AdminContentTUpdateComponent {
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
        setTimeout(function () {
            ClassicEditor
                .create(document.querySelector('#Description'), {})
                .then(editor => {
                console.log(editor);
            });
        }, 1000);
        this.updateForm = this.formBuilder.group({
            ID: new FormControl(null, [Validators.required, Validators.min(0)]),
            ContID: new FormControl(null, [Validators.required, Validators.min(0)]),
            TransID: new FormControl(null, [Validators.required, Validators.min(0)]),
            ContentName: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
            ShortText1: new FormControl(null),
            ShortText2: new FormControl(null),
            Description: new FormControl(null),
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
        this.data.ContID = this.updateForm.get("ContID").value;
        this.data.TransID = this.updateForm.get("TransID").value;
        this.data.ContentName = this.updateForm.get("ContentName").value;
        this.data.ShortText1 = this.updateForm.get("ShortText1").value;
        this.data.ShortText2 = this.updateForm.get("ShortText2").value;
        this.data.Description = $(".ck-content").html().replace("<p>", "").replace("</p>", "");
        this.service.postUpdate(this.data)
            .subscribe((answer) => {
            if (answer.Mesaj == null) {
                this.router.navigate(['/Admin/ContentT']);
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
AdminContentTUpdateComponent = tslib_1.__decorate([
    Component({
        templateUrl: './update.html'
    })
], AdminContentTUpdateComponent);
export { AdminContentTUpdateComponent };
//# sourceMappingURL=update.js.map