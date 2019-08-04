import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.linkIndex = "Ajax/Category/Index";
        this.linkInsert = "Ajax/Category/Insert";
        this.linkUpdate = "Ajax/Category/Update";
        this.linkCopy = "Ajax/Category/Copy";
        this.linkDelete = "Ajax/Category/Delete";
        this.linkRemove = "Ajax/Category/Remove";
    }
    getIndex() {
        return this.http.get(this.linkIndex);
    }
    getInsert() {
        return this.http.get(this.linkInsert);
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
CategoryService = tslib_1.__decorate([
    Injectable()
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.js.map