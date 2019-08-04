import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.service.getLoginControl().subscribe((answer) => {
            if (answer == false) {
                this.router.navigate(['/Admin']);
            }
        }, resError => this.errorMsg = resError);
    }
};
AdminLayoutComponent = tslib_1.__decorate([
    Component({
        selector: 'admin-layout',
        templateUrl: './layoutAdmin.html'
    })
], AdminLayoutComponent);
export { AdminLayoutComponent };
//# sourceMappingURL=layoutAdmin.js.map