import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
let CategoryTService = class CategoryTService {
    constructor(http) {
        this.http = http;
        this.linkIndex = "Ajax/CategoryT/Index";
        this.linkInsert = "Ajax/CategoryT/Insert";
        this.linkUpdate = "Ajax/CategoryT/Update";
        this.linkCopy = "Ajax/CategoryT/Copy";
        this.linkDelete = "Ajax/CategoryT/Delete";
        this.linkRemove = "Ajax/CategoryT/Remove";
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
CategoryTService = tslib_1.__decorate([
    Injectable()
], CategoryTService);
export { CategoryTService };
//# sourceMappingURL=categoryt.js.map