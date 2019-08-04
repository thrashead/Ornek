import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AdminHeaderComponent = class AdminHeaderComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.website = "http://localhost/Ornek/";
    }
    ngOnInit() {
        this.service.getCurrentUser().subscribe((resData) => {
            if (resData != null) {
                this.user = resData;
            }
        }, resError => this.errorMsg = resError);
        $('#txtMainSearch').typeahead({
            source: [
                'Category',
                'CategoryT',
                'Content',
                'ContentT',
                'File',
                'Picture',
                'Translation',
                'Users'
            ],
            items: 4
        });
    }
    onClick() {
        var txtValue = $("#txtMainSearch").val();
        switch (txtValue) {
            case "Category":
                this.router.navigate(['/Admin/Category']);
                break;
            case "CategoryT":
                this.router.navigate(['/Admin/CategoryT']);
                break;
            case "Content":
                this.router.navigate(['/Admin/Content']);
                break;
            case "ContentT":
                this.router.navigate(['/Admin/ContentT']);
                break;
            case "File":
                this.router.navigate(['/Admin/File']);
                break;
            case "Picture":
                this.router.navigate(['/Admin/Picture']);
                break;
            case "Translation":
                this.router.navigate(['/Admin/Translation']);
                break;
            case "Users":
                this.router.navigate(['/Admin/Users']);
                break;
            default:
                alert("Aradığınız kelimeye uygun sonuç bulunamadı...");
                break;
        }
    }
    onLogout() {
        this.service.getLogout().subscribe((answer) => {
            if (answer == true) {
                this.router.navigate(['/Admin/']);
            }
        }, resError => this.errorMsg = resError);
    }
    onKeyPress(event) {
        if (event.keyCode == "13") {
            this.onClick();
        }
    }
};
AdminHeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'admin-header',
        templateUrl: './header.html'
    })
], AdminHeaderComponent);
export { AdminHeaderComponent };
//# sourceMappingURL=header.js.map