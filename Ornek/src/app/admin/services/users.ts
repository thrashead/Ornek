import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers } from '../models/IUsers';

@Injectable()
export class UsersService {
	private linkIndex: string = "Ajax/Users/Index";
	private linkInsert: string = "Ajax/Users/Insert";
	private linkUpdate: string = "Ajax/Users/Update";
	private linkCopy: string = "Ajax/Users/Copy";
	private linkDelete: string = "Ajax/Users/Delete";
	private linkRemove: string = "Ajax/Users/Remove";

	constructor(private http: HttpClient) {
	}

	getIndex(): Observable<Array<IUsers>> {
		return this.http.get<Array<IUsers>>(this.linkIndex);
	}

	postInsert(model: any): Observable<IUsers> {
		return this.http.post<IUsers>(this.linkInsert, model);
	}

	getUpdate(id: string): Observable<IUsers> {
		let params = new HttpParams().set("id", id);
		return this.http.get<IUsers>(this.linkUpdate, { params: params });
	}

	postUpdate(model: any): Observable<IUsers> {
		return this.http.post<IUsers>(this.linkUpdate, model);
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
