import { Component } from '@angular/core';
import { PhilGoApiService } from 'projects/modules/philgo-api/philgo-api.module';

@Component({
    selector: 'app-register-page',
    templateUrl: 'register.page.html'
})
export class RegisterPage {
    justRegistered = false;
    constructor(
        public api: PhilGoApiService
    ) {

    }
    onError( error ) {
        console.log('error', error);
    }
}
