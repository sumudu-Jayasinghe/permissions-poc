import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    mainMenu: string[];

    constructor(private _as: AuthenticationService, private router: Router) {
    }

    ngOnInit() {
        this.mainMenu = this._as.getMainMenu();
    }

    onMenuClick(m: string): void {
        this.router.navigate([m]);
    }

}
