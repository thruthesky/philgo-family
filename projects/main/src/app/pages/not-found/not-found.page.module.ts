import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './not-found.page';
import { CommonModule } from '@angular/common';
import { UserLoginInfoComponentModule } from '../../components/user-login-info/user-login-info.component.module';


const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: NotFoundPage }
];



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        UserLoginInfoComponentModule
    ],
    exports: [],
    declarations: [
        NotFoundPage
    ],
    entryComponents: [
        NotFoundPage
    ],
    providers: [],
    bootstrap: [NotFoundPage]
})
export class NotFoundPageModule { }
