import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { AngularLibraryServiceModule } from '../../../modules/angular-library/angular-library.module';
import { AppService } from './providers/app.service';
import { RedirectPage } from './app.redirect';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { PhilGoApiService, PhilGoApiModule } from '../../../modules/philgo-api/philgo-api.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RedirectPage
  ],
  entryComponents: [
    RedirectPage
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PhilGoApiModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    api: PhilGoApiService
  ) {
    api.setServerUrl(environment.philgoServerUrl);
    api.setFileServerUrl(environment.philgoFileServerUrl);
  }
}
