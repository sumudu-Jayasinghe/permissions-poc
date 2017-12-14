import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {UserInfo} from './models/user-info';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isLoggedIn: boolean;

    constructor(private _as: AuthenticationService) {

    }

    ngOnInit(): void {
        this.isLoggedIn = this._as.isloggedIn();
        this._as.loginUserInfo.subscribe((ui: UserInfo) => {
            this.isLoggedIn = !!ui;
        });
    }
}
