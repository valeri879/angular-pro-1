import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

export interface Main {
 title: string;
 descr: string;
 courses: { title: string; descr: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
		private _http: HttpClient 
	) { }

	getMain(): Observable<Main> {
		return this._http.get<Main>('assets/main.json');
	}
}
