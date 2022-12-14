import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
		private _http: HttpClient
	) { }

	getAllCategory(): Observable<any[]> {
		return this._http.get<any[]>(`${environment.api}/api/categories`);
	}

	deleteCategory(categoryId: string) {
		return this._http.delete(`${environment.api}/api/categories/${categoryId}`)
	}
}
