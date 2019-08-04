import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import * as $ from "jquery";
let AdminCategoryTIndexComponent = class AdminCategoryTIndexComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.callTable = true;
        this.FillData();
    }
    FillData() {
        if (this.callTable == true) {
            this.subscription = this.service.getIndex().subscribe((answer) => {
                this.CategoryTList = answer;
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
                    });
                    $(document)
                        .off("click", "a.cpy-yes")
                        .on("click", "a.cpy-yes", () => {
                        let id = $("a.cpy-yes").attr("data-id");
                        this.onCopy(id);
                    });
                    $(document)
                        .off("click", "a.dltLink")
                        .on("click", "a.dltLink", function () {
                        $(this).addClass("active-dlt");
                        $("a.dlt-yes").attr("data-id", $(this).attr("data-id"));
                    });
                    $(document)
                        .off("click", "a.dlt-yes")
                        .on("click", "a.dlt-yes", () => {
                        let id = $("a.dlt-yes").attr("data-id");
                        this.onDelete(id);
                    });
                    $(document)
                        .off("click", "a.rmvLink")
                        .on("click", "a.rmvLink", function () {
                        $(this).addClass("active-rmv");
                        $("a.rmv-yes").attr("data-id", $(this).attr("data-id"));
                    });
                    $(document)
                        .off("click", "a.rmv-yes")
                        .on("click", "a.rmv-yes", () => {
                        let id = $("a.rmv-yes").attr("data-id");
                        this.onRemove(id);
                    });
                }, 1);
            }, resError => this.errorMsg = resError, () => { this.subscription.unsubscribe(); });
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
    onCopy(id) {
        this.subscription = this.service.getCopy(id).subscribe((answer) => {
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
    onDelete(id) {
        this.subscription = this.service.getDelete(id).subscribe((answer) => {
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
    onRemove(id) {
        this.subscription = this.service.getRemove(id).subscribe((answer) => {
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
AdminCategoryTIndexComponent = tslib_1.__decorate([
    Component({
        templateUrl: './index.html'
    })
], AdminCategoryTIndexComponent);
export { AdminCategoryTIndexComponent };
//# sourceMappingURL=index.js.map