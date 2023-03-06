import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, tap, of, map } from 'rxjs';
import { Auth } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string;
  private _auth: Auth | undefined;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiEndpointHeroes;
  }
  get auth() {
    return { ...this._auth };
  }
  login(id: number): Observable<Auth> {
    const url = `${this.baseUrl}/usuarios/${id}`;
    return this.http.get<Auth>(url).pipe(
      tap((auth) => {
        this._auth = auth;
      }),
      tap((auth) => localStorage.setItem('id', auth.id))
    );
  }
  logout() {
    this._auth = undefined;
    localStorage.clear();
  }
  checkAuth(): Observable<boolean> {
    if (!localStorage.getItem('id')) {
      return of(false);
    }
    const url = `${this.baseUrl}/usuarios/${localStorage.getItem('id')}`;

    return this.http.get<Auth>(url).pipe(
      map((auth) => {
        this._auth = auth;
        return true;
      })
    );
  }
}
