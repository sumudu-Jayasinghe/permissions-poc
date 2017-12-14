import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {UserInfo} from './models/user-info';

@Injectable()
export class AuthenticationService {

    loginUserInfo: BehaviorSubject<UserInfo> = new BehaviorSubject(null);

    constructor(private _router: Router) {
    }

    doLogin(ui: UserInfo): void {
        this.loginUserInfo.next(ui);
        this._router.navigate(['home']);

    }

    doLogout(): void {
        this.loginUserInfo.next(null);
    }

    isloggedIn(): boolean {
        const i = this.loginUserInfo && this.loginUserInfo.getValue();
        return !!i;
    }


    getMainMenu(): any[] {
        const userInfo: UserInfo = this.loginUserInfo.getValue();
        if (userInfo) {
            return (userInfo.uiPermissions && Object.keys(userInfo.uiPermissions)) || [];
        } else {
            return [];
        }

    }

    hasPermissions(pattern: string): boolean {
        if (pattern) {
            const propArray = pattern.split(':');
            const ui: UserInfo = this.loginUserInfo.getValue();
            return this.isPropertyExist(ui.uiPermissions, propArray);
        }

    }

    private isPropertyExist(obj: any, prp: string[]): boolean {
        if (obj && prp.length) {
            const next = prp.shift();
            return !!obj[next] && (!prp.length || this.isPropertyExist(obj[next], prp));
        } else {
            return false;
        }
    }
}
