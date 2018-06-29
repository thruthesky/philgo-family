import { Component } from '@angular/core';
import { AngularLibraryService } from './../../../modules/angular-library/angular-library';
import { PhilGoApiService } from '../../../modules/philgo-api/philgo-api.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app ';
  constructor(
    public api: PhilGoApiService,
    public _: AngularLibraryService
  ) {
    this.title = 'app ' + _.version;
  }
}

