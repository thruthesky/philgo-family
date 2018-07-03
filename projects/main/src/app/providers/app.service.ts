import { Injectable, NgZone } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { PhilGoApiService } from '../../../../modules/philgo-api/philgo-api.module';
import { AngularLibrary as _ } from '../../../../modules/angular-library/angular-library';


@Injectable()
export class AppService {

    currentUrl = '';
    constructor(
        public ngZone: NgZone,
        public router: Router,
        public philgo: PhilGoApiService
    ) {

        console.log('Main::AppService::constructor()');


        // _.setUserLanguage().subscribe(re => {
        //     console.log('_.loadUserLanguage(): success: ', re);
        // }, e => {
        //     console.error('_.loadUserLanguage(): failed: ', e);
        // });

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
                _.scrollToTop();
            }
        });
    }

    md() {
        return _.md();
    }
    lg() {
        return _.lg();
    }
}
