import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
let ContentTService = class ContentTService {
    constructor(http) {
        this.http = http;
        this.linkIndex = "Ajax/ContentT/Index";
        this.linkInsert = "Ajax/ContentT/Insert";
        this.linkUpdate = "Ajax/ContentT/Update";
        this.linkCopy = "Ajax/ContentT/Copy";
        this.linkDelete = "Ajax/ContentT/Delete";
        this.linkRemove = "Ajax/ContentT/Remove";
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
ContentTService = tslib_1.__decorate([
    Injectable()
], ContentTService);
export { ContentTService };
//# sourceMappingURL=contentt.js.map