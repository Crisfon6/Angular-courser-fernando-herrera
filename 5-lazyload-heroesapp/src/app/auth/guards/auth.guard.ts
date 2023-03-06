import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    // return this.authService.auth.id ? true : false;

    return this.authService.checkAuth().pipe(
      tap((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // return this.authService.auth.id ? true : false;
    return this.authService.checkAuth().pipe(
      tap((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }
}
