import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginapiService } from './loginapi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
constructor(private loginService: LoginapiService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.isLoggedIn()){
        return true;
      }

      window.location.href="user/login";
    return false;
  }
  
}
