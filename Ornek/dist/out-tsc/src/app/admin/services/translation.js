import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
let TranslationService = class TranslationService {
    constructor(http) {
        this.http = http;
        this.linkIndex = "Ajax/Translation/Index";
        this.linkInsert = "Ajax/Translation/Insert";
        this.linkUpdate = "Ajax/Translation/Update";
        this.linkInsertUpload = "Ajax/Translation/InsertUpload";
        this.linkUpdateUpload = "Ajax/Translation/UpdateUpload";
        this.linkCopy = "Ajax/Translation/Copy";
        this.linkDelete = "Ajax/Translation/Delete";
        this.linkRemove = "Ajax/Translation/Remove";
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
TranslationService = tslib_1.__decorate([
    Injectable()
], TranslationService);
export { TranslationService };
//# sourceMappingURL=translation.js.map