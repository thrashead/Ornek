import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
        this.linkIndex = "Ajax/Users/Index";
        this.linkInsert = "Ajax/Users/Insert";
        this.linkUpdate = "Ajax/Users/Update";
        this.linkCopy = "Ajax/Users/Copy";
        this.linkDelete = "Ajax/Users/Delete";
        this.linkRemove = "Ajax/Users/Remove";
    }
    getIndex() {
        return this.http.get(this.linkIndex);
    }
    postInsert(model) {
        return this.http.post(this.linkInsert, model);
    }
    getUpdate(id) {
        let params = new HttpParams().set("id", id);
        return this.http.get(this.linkUpdate, { params: params });
    }
    postUpdate(model) {
        return this.http.post(this.linkUpdate, model);
    }
    getCopy(id) {
        let params = new HttpParams().set("id", id);
        return this.http.get(this.linkCopy, { params: params });
    }
    getDelete(id) {
        let params = new HttpParams().set("id", id);
        return this.http.get(this.linkDelete, { params: params });
    }
    getRemove(id) {
        let params = new HttpParams().set("id", id);
        return this.http.get(this.linkRemove, { params: params });
    }
};
UsersService = tslib_1.__decorate([
    Injectable()
], UsersService);
export { UsersService };
//# sourceMappingURL=users.js.map