import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
let FileService = class FileService {
    constructor(http) {
        this.http = http;
        this.linkIndex = "Ajax/File/Index";
        this.linkInsert = "Ajax/File/Insert";
        this.linkUpdate = "Ajax/File/Update";
        this.linkInsertUpload = "Ajax/File/InsertUpload";
        this.linkUpdateUpload = "Ajax/File/UpdateUpload";
        this.linkCopy = "Ajax/File/Copy";
        this.linkDelete = "Ajax/File/Delete";
        this.linkRemove = "Ajax/File/Remove";
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
FileService = tslib_1.__decorate([
    Injectable()
], FileService);
export { FileService };
//# sourceMappingURL=file.js.map