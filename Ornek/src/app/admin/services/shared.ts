import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
	private linkLogin: string = "Ajax/Shared/Login";
	private linkLogout: string = "Ajax/Shared/Logout";
	private linkLoginControl: string = "Ajax/Shared/LoginControl";

	constructor(private http: HttpClient) {
	}

	postLogin(user: any): Observable<boolean> {
		return this.http.post<boolean>(this.linkLogin, user);
	}

	getLogout(): Observable<boolean> {
		return this.http.get<boolean>(this.linkLogout);
	}

	getLoginControl(): Observable<boolean> {
		return this.http.get<boolean>(this.linkLoginControl);
	}
}
