import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './register.page';
import { PhilGoApiModule } from '../../../../../modules/philgo-api/philgo-api.module';
import {
    PhilGoApiRegisterComponentModule
} from '../../../../../modules/philgo-api/components/user-register-and-profile/user-register-and-profile.component.module';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: RegisterPage }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes),
        PhilGoApiModule,
        PhilGoApiRegisterComponentModule
    ],
    exports: [],
    declarations: [
        RegisterPage
    ],
    entryComponents: [
        RegisterPage
    ],
    providers: [],
    bootstrap: [RegisterPage]
})
export class RegisterPageModule { }
