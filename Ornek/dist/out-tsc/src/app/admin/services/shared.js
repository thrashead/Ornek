import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
let SharedService = class SharedService {
    constructor(http) {
        this.http = http;
        this.linkLogin = "Ajax/Shared/Login";
        this.linkLogout = "Ajax/Shared/Logout";
        this.linkLoginControl = "Ajax/Shared/LoginControl";
        this.linkCurrentUser = "Ajax/Shared/CurrentUser";
    }
    postLogin(user) {
        return this.http.post(this.linkLogin, user);
    }
    getLogout() {
        return this.http.get(this.linkLogout);
    }
    getLoginControl() {
        return this.http.get(this.linkLoginControl);
    }
    getCurrentUser() {
        return this.http.get(this.linkCurrentUser);
    }
};
SharedService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], SharedService);
export { SharedService };
//# sourceMappingURL=shared.js.map