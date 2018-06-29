import { Component, OnInit } from '@angular/core';
import { PhilGoApiService } from '../../../../../modules/philgo-api/philgo-api.module';

@Component({
    selector: 'app-user-login-info-component',
    templateUrl: 'user-login-info.component.html',
    styleUrls: ['./user-login-info.component.scss']
})

export class UserLoginInfoComponent implements OnInit {
    constructor(
        public api: PhilGoApiService
    ) { }

    ngOnInit() { }


    onLogin(login) {
        console.log('login: ', login);
    }
    onError(error) {
        console.log('error: ', error);
    }
}

