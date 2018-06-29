import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
// import { PhilGoApiLoginComponentModule } from '../../../../../modules/philgo-api/components/login/login.component.module';
import { CommonModule } from '@angular/common';
import { UserLoginInfoComponentModule } from '../../components/user-login-info/user-login-info.component.module';


const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomePage }
];



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        UserLoginInfoComponentModule
    ],
    exports: [],
    declarations: [
        HomePage
    ],
    entryComponents: [
        HomePage
    ],
    providers: [],
    bootstrap: [HomePage]
})
export class HomePageModule { }
