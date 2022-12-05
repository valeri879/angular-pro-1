import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
		private _http: HttpClient
	) { }

	getProfile() {
		return this._http.get('http://localhost:8000/api/user');
	}
}
