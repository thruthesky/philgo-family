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
import { ForumListPage } from './pages/forum/list/list.page';


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
