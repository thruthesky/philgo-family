import { Component } from '@angular/core';
import { PhilGoApiService } from 'projects/modules/philgo-api/philgo-api.module';
@Component({
    selector: 'app-header-component',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    constructor(
        public api: PhilGoApiService
    ) {

    }
}
