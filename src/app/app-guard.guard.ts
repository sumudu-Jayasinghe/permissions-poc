import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';

@Injectable()
export class AppGuard implements CanActivate {

    constructor(private _as: AuthenticationService, private _router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this._as.isloggedIn()) {
            return true;
        } else {
            this._router.navigate(['login']);
            return false;
        }
    }
}

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private _as: AuthenticationService, private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this._as.isloggedIn()) {
            this._router.navigate(['home']);
            return false;
        } else {

            return true;
        }
    }
}
