import { Injectable, NgZone } from '@angular/core';
import { AngularLibraryService } from '../../../../modules/angular-library/angular-library';

@Injectable()
export class AppService {

    constructor(
        public ngZone: NgZone,
        public _: AngularLibraryService
    ) {


        _.windowResize().subscribe((event: Event) => {
            // console.log('window resized:', event);
            // this.render();÷
        });
    }

    render(ms = 10) {
        setTimeout(() => this.ngZone.run(() => { }), ms);
    }

}
