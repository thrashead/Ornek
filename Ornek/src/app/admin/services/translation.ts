import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITranslation } from '../models/ITranslation';

@Injectable()
export class TranslationService {
	private linkIndex: string = "Ajax/Translation/Index";
	private linkInsert: string = "Ajax/Translation/Insert";
	private linkUpdate: string = "Ajax/Translation/Update";
	private linkInsertUpload: string = "Ajax/Translation/InsertUpload";
	private linkUpdateUpload: string = "Ajax/Translation/UpdateUpload";
	private linkCopy: string = "Ajax/Translation/Copy";
	private linkDelete: string = "Ajax/Translation/Delete";
	private linkRemove: string = "Ajax/Translation/Remove";

	constructor(private http: HttpClient) {
	}

	getIndex(): Observable<Array<ITranslation>> {
		return this.http.get<Array<ITranslation>>(this.linkIndex);
	}

	postInsert(model: any): Observable<ITranslation> {
		return this.http.post<ITranslation>(this.linkInsert, model);
	}

	postInsertUpload(model: any): Observable<ITranslation> {
		return this.http.post<ITranslation>(this.linkInsertUpload, model);
	}

	getUpdate(id: string): Observable<ITranslation> {
		let params = new HttpParams().set("id", id);
		return this.http.get<ITranslation>(this.linkUpdate, { params: params });
	}

	postUpdate(model: any): Observable<ITranslation> {
		return this.http.post<ITranslation>(this.linkUpdate, model);
	}

	postUpdateUpload(model: any): Observable<ITranslation> {
		return this.http.post<ITranslation>(this.linkUpdateUpload, model);
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
