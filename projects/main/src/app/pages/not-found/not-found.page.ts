import { Component, OnInit } from '@angular/core';
import { AppService } from '../../providers/app.service';

@Component({
    selector: 'app-not-found-page',
    templateUrl: 'not-found.page.html'
})

export class NotFoundPage implements OnInit {
    constructor(
        public a: AppService
    ) { }

    ngOnInit() { }
}

