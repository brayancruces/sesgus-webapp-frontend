import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

@Injectable()
export class SesgusService {
	private baseUrl = '';

	constructor(
		private _httpClient: HttpClient,
	) {
		this.baseUrl = `https://03ef-2800-200-e640-2804-f9b7-ca2d-220a-e856.ngrok.io/analyze`;
	}


	getAnalize(bodyRequest: any): Observable<any>{
		return this._httpClient.post<any>(`${this.baseUrl}`, bodyRequest);
	}

}