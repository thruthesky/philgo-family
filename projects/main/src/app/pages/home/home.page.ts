import { Component, OnInit } from '@angular/core';
import { AppService } from '../../providers/app.service';

@Component({
    selector: 'app-home-page',
    templateUrl: 'home.page.html'
})

export class HomePage implements OnInit {
    constructor(
        public a: AppService
    ) { }

    ngOnInit() { }

}
