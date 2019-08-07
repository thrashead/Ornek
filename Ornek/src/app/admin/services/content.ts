import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContent } from '../models/IContent';

@Injectable()
export class ContentService {
	private linkIndex: string = "Ajax/Content/Index";
	private linkInsert: string = "Ajax/Content/Insert";
	private linkUpdate: string = "Ajax/Content/Update";
	private linkCopy: string = "Ajax/Content/Copy";
	private linkDelete: string = "Ajax/Content/Delete";

	constructor(private http: HttpClient) {
	}

	getIndex(): Observable<Array<IContent>> {
		return this.http.get<Array<IContent>>(this.linkIndex);
	}

	getInsert(): Observable<IContent> {
		return this.http.get<IContent>(this.linkInsert);
	}

	postInsert(model: any): Observable<IContent> {
		return this.http.post<IContent>(this.linkInsert, model);
	}

	getUpdate(id: string): Observable<IContent> {
		let params = new HttpParams().set("id", id);
		return this.http.get<IContent>(this.linkUpdate, { params: params });
	}

	postUpdate(model: any): Observable<IContent> {
		return this.http.post<IContent>(this.linkUpdate, model);
	}

	getCopy(id: string): Observable<boolean> {
		let params = new HttpParams().set("id", id);
		return this.http.get<boolean>(this.linkCopy, { params: params });
	}

	getDelete(id: string): Observable<boolean> {
		let params = new HttpParams().set("id", id);
		return this.http.get<boolean>(this.linkDelete, { params: params });
	}
}
