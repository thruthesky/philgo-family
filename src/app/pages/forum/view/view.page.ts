import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhilGoApiService } from '../../../modules/philgo-api/philgo-api.module';
import { ApiPostData } from '../../../modules/philgo-api/providers/philgo-api.service';
import { PostListComponent } from '../../../modules/philgo-api/components/forum/post-list/post-list.component';
import { CommentEditComponent } from '../../../modules/philgo-api/components/forum/comment-edit/comment-edit.component';
import { PostViewComponent } from '../../../modules/philgo-api/components/forum/post-view/post-view.component';

@Component({
    selector: 'app-forum-view-page',
    templateUrl: 'view.page.html'
})
export class ForumViewPage implements AfterViewInit {

    @ViewChild('listComponent') listComponent: PostListComponent;
    @ViewChild('editComponent') editComponet: CommentEditComponent;
    @ViewChild('viewComponent') viewComponet: PostViewComponent;
    post: ApiPostData;

    displayMeta = true;


    constructor(
        public activated: ActivatedRoute,
        public api: PhilGoApiService
    ) {
    }

    ngAfterViewInit() {
        this.activated.paramMap.subscribe(params => {
            console.log('idx: ', params.get('idx'));
            this.api.getPost(params.get('idx')).subscribe(post => {
                console.log('post', post);
                this.post = post;
                console.log('postlistcompoennt: ', this.listComponent);
                this.listComponent.init(post.post_id);
                this.listComponent.loadPage();
            }, e => alert(e.message));
        });
    }
    activateEdit() {
        this.displayMeta = false;
        this.listComponent.display = false;
        this.viewComponet.mode = 'edit';
        this.editComponet.display = true;
    }
    activateView() {
        this.displayMeta = true;
        this.listComponent.display = true;
        this.viewComponet.mode = 'view';
        this.editComponet.display = false;
    }
    onClickPostWrite() {
        this.activateEdit();
    }
    /**
     * Post created event handler.
     * @param post post that was just created.
     */
    onWrite(post) {
        this.listComponent.write(post);
        this.activateView();
    }
    /**
     * Post edited event handler.
     * @param post post that was just edited.
     */
    onEdit(post) {
        this.listComponent.edit(post);
        this.activateView();
    }
    /**
     * Post form cancel event handler.
     */
    onCancel() {
        this.activateView();
    }
}


