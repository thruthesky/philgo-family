import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectPage } from './app.redirect';

const routes: Routes = [
  { path: 'redirect', component: RedirectPage },
  {
    path: 'profile',
    loadChildren: './pages/register/register.page.module#RegisterPageModule'
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.page.module#RegisterPageModule'
  },
  {
    path: 'help',
    loadChildren: './pages/help/help.page.module#HelpPageModule'
  },
  {
    path: '', pathMatch: 'full',
    loadChildren: './pages/home/home.page.module#HomePageModule'
  },
  /**
   * Defaults
   */
  { path: '**', loadChildren: './pages/not-found/not-found.page.module#NotFoundPageModule' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}



