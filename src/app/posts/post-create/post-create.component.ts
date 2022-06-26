import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})

export class PostCreateComponent{

  newPost='It\'s me';
  
  onAddPost(){
    this.newPost="I am Jockey Chan";
  }
}
