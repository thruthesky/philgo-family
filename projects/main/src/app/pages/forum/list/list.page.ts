/**
 * @file list.page.ts
 * @description
 *      글 읽기와 목록을 한 페이지에서 모두 한다.
 *      글 번호가 들어오면 해당 글을 읽어서, 맨 위에 app-post-view-component 로 보여주고
 *      app-post-list-component 로 해당 게시판 목록을 보여준다.
 */
import { Component, ViewChild, OnInit } from '@angular/core';
import { AppService } from '../../../providers/app.service';
import { PostListComponent } from '../../../../../../modules/philgo-api/components/forum/post-list/post-list.component';
import { ApiPostData, PhilGoApiService } from '../../../../../../modules/philgo-api/providers/philgo-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-forum-list-page',
    templateUrl: 'list.page.html'
})
export class ForumListPage implements OnInit {
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

    /**
     * mode of template view
     */
    mode: 'list' | 'write' = 'list';

    error = { code: 0, message: '' };
    constructor(
        public router: Router,
        public activated: ActivatedRoute,
        public api: PhilGoApiService,
        public a: AppService
    ) {

        console.log('ListPage::constructor()');
        // this.testWrite();
    }

    /**
     * Test purpose only.
     *
     */
    testWrite() {
        setTimeout(() => this.onClickCreate(), 200);
    }

    /**
     * Loads post or post list.
     */
    ngOnInit() {
        this.activated.paramMap.subscribe(params => {
            this.init();
            this.post_id = params.get('post_id');
            this.idx = params.get('idx');
            if (this.idx) {
                this.api.getPost(this.idx).subscribe(post => {
                    console.log('DSIPLAY POST: ListPage::ngAfterView() post', post);
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
                console.log('DISPLAY FORUM: route: post_id: ', this.post_id);
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
     * Post write success handler.
     * 글 작성이 완료된 후 호출된다.
     *
     * @description
     *  글 작성 후, 그냥 글 읽기 페이지로 이동(전체 앱을 리로딩하지 않고)을 하거나,
     *  페이지 이동을 하지 않고 템플릿을 업데이트하여, 끼워 넣기 해서 보여 줄 수 있다.
     *  코딩은 글 작성 후, 글 읽기 페이지로 이동하는 것이 편하다.
     *  글 읽기 페이지는 결과적으로 글 목록 페이지와 같다.
     *  하지만 페이지 이동하지 않고 그냥 보여주는 것이 훨씬 부드럽다.
     *
     * @param post 금방 작성된 글
     */
    onWriteSuccess(post: ApiPostData) {

        /**
         * Redirect to post view page.
         */
        // this.router.navigateByUrl(this.api.urlForumView(post.idx));

        /**
         * Do not redirect. Instead, insert the post on top and display it.
         */
        this.mode = 'list';
        this.post = post;
        this.postListComponent.addPostOnTop( post );
        this.postListComponent.display = true;

    }
    /**
     * 글 수정을 완료하면 이 함수가 호출된다.
     * @param post post 수정된 글
     */
    onEditSuccess(post: ApiPostData) {
        this.mode = 'list';
        this.postListComponent.editPost(post);
        this.postListComponent.display = true;
    }
    /**
     * 글 작성 중에 FORM 이 취소되면 list mode 를 list 로 해서, 글 목록을 보여 준다.
     */
    onFormCancel() {
        this.mode = 'list';
    }
    /**
     * 글 작성 버튼이 클릭되면, list mode 를 write 를 해서, 글 목록을 숨긴다.
     */
    onClickCreate() {
        this.mode = 'write';
    }
}



