import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
let PictureService = class PictureService {
    constructor(http) {
        this.http = http;
        this.linkIndex = "Ajax/Picture/Index";
        this.linkInsert = "Ajax/Picture/Insert";
        this.linkUpdate = "Ajax/Picture/Update";
        this.linkInsertUpload = "Ajax/Picture/InsertUpload";
        this.linkUpdateUpload = "Ajax/Picture/UpdateUpload";
        this.linkCopy = "Ajax/Picture/Copy";
        this.linkDelete = "Ajax/Picture/Delete";
        this.linkRemove = "Ajax/Picture/Remove";
    }
    getIndex() {
        return this.http.get(this.linkIndex);
    }
    postInsert(model) {
        return this.http.post(this.linkInsert, model);
    }
    postInsertUpload(model) {
        return this.http.post(this.linkInsertUpload, model);
    }
    getUpdate(id) {
        let params = new HttpParams().set("id", id);
        return this.http.get(this.linkUpdate, { params: params });
    }
    postUpdate(model) {
        return this.http.post(this.linkUpdate, model);
    }
    postUpdateUpload(model) {
        return this.http.post(this.linkUpdateUpload, model);
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
PictureService = tslib_1.__decorate([
    Injectable()
], PictureService);
export { PictureService };
//# sourceMappingURL=picture.js.map