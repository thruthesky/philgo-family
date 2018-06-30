import { Injectable, NgZone } from '@angular/core';
import { AngularLibraryService } from '../../../../modules/angular-library/angular-library';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable()
export class AppService {

    currentUrl = '';
    constructor(
        public ngZone: NgZone,
        public router: Router,
        public _: AngularLibraryService
    ) {


        _.windowResize().subscribe((event: Event) => {
            // console.log('window resized:', event);
            // this.render();÷
        });

        this.reloadSameUrl();
    }

    render(ms = 10) {
        setTimeout(() => this.ngZone.run(() => { }), ms);
    }

    reloadSameUrl() {
        this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationStart) {
                if (this.router.url === e.url) {
                    this.router.navigate(['/redirect'], { queryParams: { url: e.url } });
                }
            } else if (e instanceof NavigationEnd) {
                this.currentUrl = this.router.url;
            }
            /**
             * Scroll the page to the top after transitioning into another page.
             */
            if (e instanceof NavigationEnd) {
                this._.scrollToTop();
            }
        });
    }
}
