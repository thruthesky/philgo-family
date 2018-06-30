import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PhilGoApiLoginComponentModule } from '../../../../../modules/philgo-api/components/login/login.component.module';
import { CommonModule } from '@angular/common';
import { UserLoginInfoComponentModule } from '../../components/user-login-info/user-login-info.component.module';
import { LoginPage } from './login.page';


const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: LoginPage }
];



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        UserLoginInfoComponentModule
    ],
    exports: [],
    declarations: [
        LoginPage
    ],
    entryComponents: [
        LoginPage
    ],
    providers: [],
    bootstrap: [LoginPage]
})
export class LoginPageModule { }
