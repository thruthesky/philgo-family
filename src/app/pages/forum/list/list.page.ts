import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostListComponent } from '../../../modules/philgo-api/components/forum/post-list/post-list.component';
import { ApiPostData, PhilGoApiService } from '../../../modules/philgo-api/providers/philgo-api.service';

@Component({
    selector: 'app-forum-list-page',
    templateUrl: 'list.page.html'
})
export class ForumListPage implements AfterViewInit {
    @ViewChild('postListComponent') postListComponent: PostListComponent;
    /**
     * post id from route
     */
    post_id: string = null;
    /**
     * post view idx from route
     */
    idx: string = null;
    /**
     * post loaded from server for showing
     */
    post: ApiPostData = null;
    /**
     * forum name from post or post list.
     */
    forumName: string = null;
    mode: 'list' | 'write' = 'list';

    error = { code: 0, message: '' };
    constructor(
        public router: Router,
        public activated: ActivatedRoute,
        public api: PhilGoApiService
    ) {

        // this.testWrite();
    }

    testWrite() {
        setTimeout(() => this.mode = 'write', 100);
    }

    ngAfterViewInit() {

        this.activated.paramMap.subscribe(params => {
            this.init();
            this.post_id = params.get('post_id');
            this.idx = params.get('idx');
            if (this.idx) {
                this.api.getPost(this.idx).subscribe(post => {
                    console.log('ListPage::ngAfterView() post', post);
                    this.post = post;
                    this.post_id = post.post_id;
                    this.forumName = this.post.config_subject;
                    this.postListComponent.init(this.post.post_id);
                    this.postListComponent.loadPage();
                }, e => {
                    console.log('e', e);
                    this.error = e;
                    // alert(e.message);
                });
            } else if (this.post_id) {
                console.log('route: post_id: ', this.post_id);
                this.postListComponent.init(this.post_id);
                this.postListComponent.loadPage(res => {
                    this.forumName = res.config_subject;
                });
            }
        });

    }

    init() {
        this.mode = 'list';
    }
    /**
     * 글 작성 후, 그냥 페이지 이동을 한다. 그게 편한 것 같다.
     * @param post 금방 작성된 글
     */
    onWriteSuccess(post: ApiPostData) {

        this.router.navigateByUrl(this.api.urlForumView(post.idx));

        // this.mode = 'list';
        // this.postListComponent.write(post);
        // this.postListComponent.display = true;

    }
    onEditSuccess(post: ApiPostData) {
        this.mode = 'list';
        this.postListComponent.edit(post);
        this.postListComponent.display = true;
    }
    onFormCancel() {
        this.mode = 'list';
    }
    onClickCreate() {
        this.mode = 'write';
    }
}



