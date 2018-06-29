import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPage } from './help.page';
import { UserLoginInfoComponentModule } from '../../components/user-login-info/user-login-info.component.module';
import { CommonModule } from '@angular/common';



const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HelpPage }
];



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        UserLoginInfoComponentModule
    ],
    exports: [],
    declarations: [
        HelpPage
    ],
    entryComponents: [
        HelpPage
    ],
    providers: [],
    bootstrap: [HelpPage]
})
export class HelpPageModule { }
