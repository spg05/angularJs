import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { JphPostsListComponents } from './components/jph-post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { JphService } from './services/jph.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [JphPostsListComponents],
    declarations: [JphPostsListComponents],
    providers: [JphService],
})
export class JphModule { }
