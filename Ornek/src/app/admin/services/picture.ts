import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPicture } from '../models/IPicture';

@Injectable()
export class PictureService {
	private linkIndex: string = "Ajax/Picture/Index";
	private linkInsert: string = "Ajax/Picture/Insert";
	private linkUpdate: string = "Ajax/Picture/Update";
	private linkInsertUpload: string = "Ajax/Picture/InsertUpload";
	private linkUpdateUpload: string = "Ajax/Picture/UpdateUpload";
	private linkCopy: string = "Ajax/Picture/Copy";
	private linkDelete: string = "Ajax/Picture/Delete";
	private linkRemove: string = "Ajax/Picture/Remove";

	constructor(private http: HttpClient) {
	}

	getIndex(): Observable<Array<IPicture>> {
		return this.http.get<Array<IPicture>>(this.linkIndex);
	}

	postInsert(model: any): Observable<IPicture> {
		return this.http.post<IPicture>(this.linkInsert, model);
	}

	postInsertUpload(model: any): Observable<IPicture> {
		return this.http.post<IPicture>(this.linkInsertUpload, model);
	}

	getUpdate(id: string): Observable<IPicture> {
		let params = new HttpParams().set("id", id);
		return this.http.get<IPicture>(this.linkUpdate, { params: params });
	}

	postUpdate(model: any): Observable<IPicture> {
		return this.http.post<IPicture>(this.linkUpdate, model);
	}

	postUpdateUpload(model: any): Observable<IPicture> {
		return this.http.post<IPicture>(this.linkUpdateUpload, model);
	}

	getCopy(id: string): Observable<boolean> {
		let params = new HttpParams().set("id", id);
		return this.http.get<boolean>(this.linkCopy, { params: params });
	}

	getDelete(id: string): Observable<boolean> {
		let params = new HttpParams().set("id", id);
		return this.http.get<boolean>(this.linkDelete, { params: params });
	}

	getRemove(id: string): Observable<boolean> {
		let params = new HttpParams().set("id", id);
		return this.http.get<boolean>(this.linkRemove, { params: params });
	}
}
