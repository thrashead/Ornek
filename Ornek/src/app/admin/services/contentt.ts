import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContentT } from '../models/IContentT';

@Injectable()
export class ContentTService {
	private linkIndex: string = "Ajax/ContentT/Index";
	private linkInsert: string = "Ajax/ContentT/Insert";
	private linkUpdate: string = "Ajax/ContentT/Update";
	private linkCopy: string = "Ajax/ContentT/Copy";
	private linkDelete: string = "Ajax/ContentT/Delete";
	private linkRemove: string = "Ajax/ContentT/Remove";

	constructor(private http: HttpClient) {
	}

	getIndex(): Observable<Array<IContentT>> {
		return this.http.get<Array<IContentT>>(this.linkIndex);
	}

	getInsert(): Observable<IContentT> {
		return this.http.get<IContentT>(this.linkInsert);
	}

	postInsert(model: any): Observable<IContentT> {
		return this.http.post<IContentT>(this.linkInsert, model);
	}

	getUpdate(id: string): Observable<IContentT> {
		let params = new HttpParams().set("id", id);
		return this.http.get<IContentT>(this.linkUpdate, { params: params });
	}

	postUpdate(model: any): Observable<IContentT> {
		return this.http.post<IContentT>(this.linkUpdate, model);
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
