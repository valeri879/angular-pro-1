import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	// isLoggedIn$ = false;
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
		private _http: HttpClient,
		private _router: Router
	) {
		this._checkLogin();
	}

	private _checkLogin(): void {
		localStorage.getItem('user') ? this.isLoggedIn$.next(true) : this.isLoggedIn$.next(false);
	}

  public login(data: any): Observable<any> {
    return this._http.post<any>('http://localhost:8000/api/login', data).pipe(
      tap(() => {
        this.isLoggedIn$.next(true);
				// isLoggedIn$ = true;
      })
    );
  }

	public logout(): void {
		localStorage.removeItem('user');
		this.isLoggedIn$.next(false);
		this._router.navigateByUrl('main');
	}
}
