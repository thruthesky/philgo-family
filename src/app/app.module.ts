import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { HeaderComponent } from './components/header/header.component';
import { RegisterPage } from './pages/register/register.page';
import { LoginPage } from './pages/login/login.page';
import { ForumListPage } from './pages/forum/list/list.page';
import { HttpClientModule } from '@angular/common/http';
import { PhilGoApiModule, PhilGoApiService } from 'projects/modules/philgo-api/philgo-api.module';

import { environment } from '../environments/environment';
import {
  PhilGoApiRegisterComponentModule
} from 'projects/modules/philgo-api/components/user-register-and-profile/user-register-and-profile.component.module';
import { PhilGoApiLoginComponentModule } from 'projects/modules/philgo-api/components/login/login.component.module';
import { PhilGoApiForumComponentModule } from 'projects/modules/philgo-api/components/forum/forum.component.module';


const routes: Routes = [
  { path: 'forum/:post_id', component: ForumListPage },
  { path: 'forum/view/:idx', component: ForumListPage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'profile', component: RegisterPage },
  { path: '', component: HomePage, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    RegisterPage,
    LoginPage,
    ForumListPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PhilGoApiModule,
    PhilGoApiRegisterComponentModule,
    PhilGoApiLoginComponentModule,
    PhilGoApiForumComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    api: PhilGoApiService
  ) {

    // _.setUserLanguage().subscribe(re => {
    //   console.log('_.loadUserLanguage(): success: ', re);
    //   console.log(_.t('welcome', { name: '재호' }));
    // }, e => {
    //   console.log('_.loadUserLanguage(): failed: ', e);
    // });

    api.setServerUrl(environment.philgoServerUrl);
    api.setFileServerUrl(environment.philgoFileServerUrl);
  }
}
