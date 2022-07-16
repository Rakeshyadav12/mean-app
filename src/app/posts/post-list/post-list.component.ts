import { PostService } from './../posts.service';
import { Post } from './../post.model';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{

  // posts=[
  //   {title: "First Post", content:"This is first post content"},
  //   {title: "Second Post", content:"This is Second post content"},
  //   {title: "Third Post", content:"This is Third post content"}
  // ]

  posts: Post[] =[];
  public postsSub: Subscription = new Subscription;

  constructor(public postService: PostService){  }

  ngOnInit(){
    this.postService.getPosts();
    this.postsSub = this.postService
      .getPostUpdateListener()
      .subscribe((posts : Post[]) => {
        this.posts =posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
