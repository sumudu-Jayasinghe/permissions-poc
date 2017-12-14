import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AppGuard, LoginGuard} from './app-guard.guard';
import {AuthenticationService} from './authentication.service';
import { RatesComponent } from './rates/rates.component';
import { HasPermissionsDirective } from './has-permissions.directive';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        RatesComponent,
        HasPermissionsDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        AppGuard,
        LoginGuard,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
