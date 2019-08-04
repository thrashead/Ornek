import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoryT } from '../models/ICategoryT';

@Injectable()
export class CategoryTService {
	private linkIndex: string = "Ajax/CategoryT/Index";
	private linkInsert: string = "Ajax/CategoryT/Insert";
	private linkUpdate: string = "Ajax/CategoryT/Update";
	private linkCopy: string = "Ajax/CategoryT/Copy";
	private linkDelete: string = "Ajax/CategoryT/Delete";
	private linkRemove: string = "Ajax/CategoryT/Remove";

	constructor(private http: HttpClient) {
	}

	getIndex(): Observable<Array<ICategoryT>> {
		return this.http.get<Array<ICategoryT>>(this.linkIndex);
	}

	getInsert(): Observable<ICategoryT> {
		return this.http.get<ICategoryT>(this.linkInsert);
	}

	postInsert(model: any): Observable<ICategoryT> {
		return this.http.post<ICategoryT>(this.linkInsert, model);
	}

	getUpdate(id: string): Observable<ICategoryT> {
		let params = new HttpParams().set("id", id);
		return this.http.get<ICategoryT>(this.linkUpdate, { params: params });
	}

	postUpdate(model: any): Observable<ICategoryT> {
		return this.http.post<ICategoryT>(this.linkUpdate, model);
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
