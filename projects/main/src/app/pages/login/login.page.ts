import { Component, OnInit } from '@angular/core';
import { AppService } from '../../providers/app.service';

@Component({
    selector: 'app-login-page',
    templateUrl: 'login.page.html'
})

export class LoginPage implements OnInit {
    constructor(
        public a: AppService
    ) { }

    ngOnInit() { }

}
