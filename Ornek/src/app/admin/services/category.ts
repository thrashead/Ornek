import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../models/ICategory';

@Injectable()
export class CategoryService {
	private linkIndex: string = "Ajax/Category/Index";
	private linkInsert: string = "Ajax/Category/Insert";
	private linkUpdate: string = "Ajax/Category/Update";
	private linkCopy: string = "Ajax/Category/Copy";
	private linkDelete: string = "Ajax/Category/Delete";
	private linkRemove: string = "Ajax/Category/Remove";

	constructor(private http: HttpClient) {
	}

	getIndex(): Observable<Array<ICategory>> {
		return this.http.get<Array<ICategory>>(this.linkIndex);
    }

    getInsert(): Observable<ICategory> {
        return this.http.get<ICategory>(this.linkInsert);
    }

	postInsert(model: any): Observable<ICategory> {
		return this.http.post<ICategory>(this.linkInsert, model);
	}

	getUpdate(id: string): Observable<ICategory> {
		let params = new HttpParams().set("id", id);
		return this.http.get<ICategory>(this.linkUpdate, { params: params });
	}

	postUpdate(model: any): Observable<ICategory> {
		return this.http.post<ICategory>(this.linkUpdate, model);
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
