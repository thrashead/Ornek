import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Validators, FormControl } from "@angular/forms";
import * as $ from "jquery";
let AdminContentUpdateComponent = class AdminContentUpdateComponent {
    constructor(service, formBuilder, router, route, serviceContentT) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.serviceContentT = serviceContentT;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.data = new Object();
        this.callTable = true;
        this.FillData();
        this.updateForm = this.formBuilder.group({
            ID: new FormControl(null, [Validators.required, Validators.min(0)]),
            Title: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
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
                    setTimeout(() => {
                        $(".data-table").dataTable({
                            "bJQueryUI": true,
                            "sPaginationType": "full_numbers",
                            "sDom": '<""l>t<"F"fp>'
                        });
                        if ($(".dropdown-menu").first().find("a").length <= 0) {
                            $(".btn-group").remove();
                        }
                        $(document)
                            .off("click", ".fg-button")
                            .on("click", ".fg-button", () => {
                            setTimeout(() => {
                                this.FillData();
                            }, 1);
                        });
                        $(document)
                            .off("click", "a.cpyLink")
                            .on("click", "a.cpyLink", function () {
                            $(this).addClass("active-cpy");
                            $("a.cpy-yes").attr("data-id", $(this).attr("data-id"));
                            $("a.cpy-yes").attr("data-link", $(this).attr("data-controller"));
                        });
                        $(document)
                            .off("click", "a.dltLink")
                            .on("click", "a.dltLink", function () {
                            $(this).addClass("active-dlt");
                            $("a.dlt-yes").attr("data-id", $(this).attr("data-id"));
                            $("a.dlt-yes").attr("data-link", $(this).attr("data-controller"));
                        });
                        $(document)
                            .off("click", "a.cpy-yes[data-link='ContentT']")
                            .on("click", "a.cpy-yes[data-link='ContentT']", () => {
                            let id = $("a.cpy-yes").attr("data-id");
                            this.onContentTCopy(id);
                        });
                        $(document)
                            .off("click", "a.dlt-yes[data-link='ContentT']")
                            .on("click", "a.dlt-yes[data-link='ContentT']", () => {
                            let id = $("a.dlt-yes").attr("data-id");
                            this.onContentTDelete(id);
                        });
                        $(document)
                            .off("click", "a.rmvLink")
                            .on("click", "a.rmvLink", function () {
                            $(this).addClass("active-rmv");
                            $("a.rmv-yes").attr("data-id", $(this).attr("data-id"));
                            $("a.rmv-yes").attr("data-link", $(this).attr("data-controller"));
                        });
                        $(document)
                            .off("click", "a.rmv-yes[data-link='ContentT']")
                            .on("click", "a.rmv-yes[data-link='ContentT']", () => {
                            let id = $("a.rmv-yes").attr("data-id");
                            this.onContentTRemove(id);
                        });
                    }, 1);
                }, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
            });
        }
        setTimeout(() => {
            if ($(".dropdown-menu").first().find("a").length <= 0) {
                $(".btn-group").remove();
            }
        }, 1);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSubmit() {
        this.data.ID = this.updateForm.get("ID").value;
        this.data.Title = this.updateForm.get("Title").value;
        this.data.Code = this.updateForm.get("Code").value;
        this.data.Active = this.updateForm.get("Active").value;
        this.service.postUpdate(this.data)
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
    onContentTCopy(id) {
        this.subscription = this.serviceContentT.getCopy(id).subscribe((answer) => {
            $("a.cpyLink.active-cpy").removeClass("active-cpy");
            if (answer == true) {
                this.ShowAlert("Copy");
                let currentUrl = this.router.url;
                this.router.navigate(['/'], { skipLocationChange: true }).then(() => { this.router.navigate([currentUrl]); });
            }
            else {
                this.ShowAlert("CopyNot");
            }
        }, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
    }
    onContentTDelete(id) {
        this.subscription = this.serviceContentT.getDelete(id).subscribe((answer) => {
            if (answer == true) {
                this.ShowAlert("Delete");
                $("a.dltLink.active-dlt").parent("li").parent("ul").parent("div").parent("td").parent("tr").fadeOut("slow", function () {
                    $(this).remove();
                });
            }
            else {
                this.ShowAlert("DeleteNot");
            }
        }, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
    }
    onContentTRemove(id) {
        this.subscription = this.serviceContentT.getRemove(id).subscribe((answer) => {
            if (answer == true) {
                this.ShowAlert("Remove");
                $("a.rmvLink.active-rmv").parent("li").parent("ul").parent("div").parent("td").parent("tr").fadeOut("slow", function () {
                    $(this).remove();
                });
            }
            else {
                this.ShowAlert("RemoveNot");
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
AdminContentUpdateComponent = tslib_1.__decorate([
    Component({
        templateUrl: './update.html'
    })
], AdminContentUpdateComponent);
export { AdminContentUpdateComponent };
//# sourceMappingURL=update.js.map