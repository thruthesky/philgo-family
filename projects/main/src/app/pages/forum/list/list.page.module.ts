import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';




import { UserLoginInfoComponentModule } from '../../../components/user-login-info/user-login-info.component.module';
import { ForumListPage } from './list.page';
import { PhilGoApiForumComponentModule } from '../../../../../../modules/philgo-api/components/forum/forum.component.module';
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: ForumListPage }
];



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        UserLoginInfoComponentModule,
        PhilGoApiForumComponentModule
    ],
    exports: [],
    declarations: [
        ForumListPage
    ],
    entryComponents: [
        ForumListPage
    ],
    providers: [],
    bootstrap: [ForumListPage]
})
export class ForumListPageModule { }
