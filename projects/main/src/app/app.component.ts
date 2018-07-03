import { Component } from '@angular/core';
import { AppService } from './providers/app.service';
import { AngularLibrary as _ } from './../../../modules/angular-library/angular-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app ';
  constructor(
    public a: AppService
    // public api: PhilGoApiService,
    // public _: AngularLibraryService
  ) {
    this.title = 'app ' + _.version;
  }
}


