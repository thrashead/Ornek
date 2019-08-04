import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
let ContentService = class ContentService {
    constructor(http) {
        this.http = http;
        this.linkIndex = "Ajax/Content/Index";
        this.linkInsert = "Ajax/Content/Insert";
        this.linkUpdate = "Ajax/Content/Update";
        this.linkCopy = "Ajax/Content/Copy";
        this.linkDelete = "Ajax/Content/Delete";
        this.linkRemove = "Ajax/Content/Remove";
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
ContentService = tslib_1.__decorate([
    Injectable()
], ContentService);
export { ContentService };
//# sourceMappingURL=content.js.map