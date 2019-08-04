import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFile } from '../models/IFile';

@Injectable()
export class FileService {
	private linkIndex: string = "Ajax/File/Index";
	private linkInsert: string = "Ajax/File/Insert";
	private linkUpdate: string = "Ajax/File/Update";
	private linkInsertUpload: string = "Ajax/File/InsertUpload";
	private linkUpdateUpload: string = "Ajax/File/UpdateUpload";
	private linkCopy: string = "Ajax/File/Copy";
	private linkDelete: string = "Ajax/File/Delete";
	private linkRemove: string = "Ajax/File/Remove";

	constructor(private http: HttpClient) {
	}

	getIndex(): Observable<Array<IFile>> {
		return this.http.get<Array<IFile>>(this.linkIndex);
	}

	postInsert(model: any): Observable<IFile> {
		return this.http.post<IFile>(this.linkInsert, model);
	}

	postInsertUpload(model: any): Observable<IFile> {
		return this.http.post<IFile>(this.linkInsertUpload, model);
	}

	getUpdate(id: string): Observable<IFile> {
		let params = new HttpParams().set("id", id);
		return this.http.get<IFile>(this.linkUpdate, { params: params });
	}

	postUpdate(model: any): Observable<IFile> {
		return this.http.post<IFile>(this.linkUpdate, model);
	}

	postUpdateUpload(model: any): Observable<IFile> {
		return this.http.post<IFile>(this.linkUpdateUpload, model);
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
