
import { Component,OnInit, Inject } from '@angular/core';
import { Post } from "../models/post";
import { JphService } from "../services/jph.service";

@Component({
    selector: 'jph-posts',
    templateUrl: '../views/jph-posts-list.componenets.html'
})

export class JphPostsListComponents  {
    constructor(@Inject(JphService) private _jphService: JphService) { }
    title:String = "JSON Placeholder's post data !";
    posts:Post[] = [];
    
    ngOnInit():void{
        this._jphService.getAllPosts().subscribe(
            data=>this.posts=data,
            error=>console.log(error),
            ()=>console.log("Service call complete!!"),
        )
    }
    
}