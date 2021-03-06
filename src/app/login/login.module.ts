import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {AuthenticationService} from '../shared/services/authentication.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule
    ],
    declarations: [LoginComponent],
    providers: [AuthenticationService]
})
export class LoginModule {
}
