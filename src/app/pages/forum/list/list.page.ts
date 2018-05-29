import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostListComponent } from '../../../modules/philgo-api/components/forum/post-list/post-list.component';
import { ApiPostData } from '../../../modules/philgo-api/providers/philgo-api.service';

@Component({
    selector: 'app-forum-list-page',
    templateUrl: 'list.page.html'
})
export class ForumListPage {
    @ViewChild('postListComponent') postListComponent: PostListComponent;
    post_id = '';
    mode: 'list' | 'write' = 'list';
    constructor(activated: ActivatedRoute) {
        activated.paramMap.subscribe(params => {
            this.init();
            this.post_id = params.get('post_id');
        });
    }
    init() {
        this.mode = 'list';
    }
    onWrite(event: ApiPostData) {
        this.postListComponent.write(event);
        this.postListComponent.display = true;
    }
    onEdit(event: ApiPostData) {
        this.postListComponent.edit(event);
        this.postListComponent.display = true;
    }
    onCancel() {
        this.mode = 'list';
    }
}



