import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-forum-list-page',
    templateUrl: 'list.page.html'
})
export class ForumListPage {
    post_id = '';
    constructor( activated: ActivatedRoute ) {
        activated.paramMap.subscribe( params => {
            this.post_id = params.get('post_id');
        });
    }
}



