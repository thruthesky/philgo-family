import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './providers/app.service';

@Component({
    selector: 'app-redirect-page',
    template: `
        <main class="px-5 md-px-0 py-5">TEXT - REDIRECTING</main>
    `
})
export class RedirectPage {
    constructor(
        public activatedRoute: ActivatedRoute,
        public route: Router,
        public a: AppService
    ) {
        activatedRoute.queryParamMap.subscribe( re => {
            this.route.navigateByUrl( re.get('url') );
        });
    }
}

