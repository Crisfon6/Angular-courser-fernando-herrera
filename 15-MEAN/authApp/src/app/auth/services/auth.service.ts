import { AuthStatus, CheckTokenResponse, LoginResponse, RegisterResponse, RegisterUser, User } from '../interfaces';
import { environments } from 'src/app/environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, throwError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environments.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus | null>(AuthStatus.checking);

  //! For the world
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor() {
    this.chekAuthStatus().subscribe();
  }

  login(email: string, password: string): Observable<boolean> {
    const url = this.baseUrl + '/auth/login';
    const body = { email, password };
    return this.http.post<LoginResponse>(url, body)
      .pipe(
        tap(({ user, token }) => {
          this.setAuthentication(user, token);

        }),
        map(() => true),
        catchError(err => {
          return throwError(() => err.error.message)
        })
      );
  }
  chekAuthStatus(): Observable<boolean> {
    const url = this.baseUrl + '/auth/check-token';
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return of(false)
    };

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    return this.http.get<CheckTokenResponse>(url, { headers })
      .pipe(
        map(({ token, user }) => {
          this.setAuthentication(user, token);
          return true;
        }),
        catchError(() => {
          this._authStatus.set(AuthStatus.notAuthenticated);
          return of(false)
        })
      );
  }
  register(newUser: RegisterUser): Observable<boolean>{
    const url = `${this.baseUrl}/auth/register`;
    return this.http.post<RegisterResponse>(url, newUser)
      .pipe(
        map(({ user, token }) => {
          this.setAuthentication(user, token);
          return true;
        }),
        catchError((err) => {
          return  throwError(() => err.error.message)
        })
      );
  }
  private setAuthentication(user: User, token: string) {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);
  }
  logout() {
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }
}
