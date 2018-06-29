import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserLoginInfoComponent } from './user-login-info.component';
import { PhilGoApiModule } from '../../../../../modules/philgo-api/philgo-api.module';
import { PhilGoApiLoginComponentModule } from '../../../../../modules/philgo-api/components/login/login.component.module';

@NgModule({
    declarations: [
        UserLoginInfoComponent
    ],
    exports: [
        UserLoginInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PhilGoApiModule,
        PhilGoApiLoginComponentModule
    ],
    providers: []
})
export class UserLoginInfoComponentModule {}
