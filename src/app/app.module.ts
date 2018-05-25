import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { HeaderComponent } from './components/header/header.component';
import { PhilGoApiModule, PhilGoApiService } from './modules/philgo-api/philgo-api.module';
import { RegisterPage } from './pages/register/register.page';
import { PhilGoApiComponentModule } from './modules/philgo-api/philgo-api.component.module';
import { LoginPage } from './pages/login/login.page';
import { ForumPage } from './pages/forum/forum.page';


const routes: Routes = [
  { path: 'forum/:post_id', component: ForumPage },
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
    ForumPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PhilGoApiModule,
    PhilGoApiComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(api: PhilGoApiService) {
    api.setServerUrl('https://local.philgo.com/api.php');
    api.setFileServerUrl('https://local.philgo.com/index.php'); // must end with index.php
  }
}
