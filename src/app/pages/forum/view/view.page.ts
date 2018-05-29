import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhilGoApiService } from '../../../modules/philgo-api/philgo-api.module';
import { ApiPostData } from '../../../modules/philgo-api/providers/philgo-api.service';
import { PostListComponent } from '../../../modules/philgo-api/components/forum/post-list/post-list.component';
interface Show {
    mode: 'write' | 'view' | 'edit';
}
@Component({
    selector: 'app-forum-view-page',
    templateUrl: 'view.page.html'
})
export class ForumViewPage implements AfterViewInit {

    @ViewChild('postListComponent') postListComponent: PostListComponent;
    post: ApiPostData;


    show: Show = <any> {};

    constructor(
        public activated: ActivatedRoute,
        public api: PhilGoApiService
    ) {
    }
    init() {
        this.show.mode = 'view';
    }
    ngAfterViewInit() {
        this.activated.paramMap.subscribe(params => {
            this.init();
            console.log('idx: ', params.get('idx'));
            this.api.getPost(params.get('idx')).subscribe(post => {
                console.log('post', post);
                this.post = post;
                console.log('postlistcompoennt: ', this.postListComponent);
                this.postListComponent.init(post.post_id);
                this.postListComponent.loadPage();
            }, e => alert(e.message));
        });
    }
}


