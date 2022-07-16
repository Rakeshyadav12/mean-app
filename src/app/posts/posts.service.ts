import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class PostService{
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(public http: HttpClient){}
  getPosts(){
    let url = "http://localhost:3000/api/posts";
    this.http.get<{message: string, posts: Post[]}>(url)
      .subscribe( (res) => {
        this.posts = res.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    let url = 'http://localhost:3000/api/posts';
    const post: Post = {id: "1",title: title, content: content};
    this.http.post<{message: string}>(url,post)
      .subscribe( (response) => {
        console.log(response.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      })
  }
}
