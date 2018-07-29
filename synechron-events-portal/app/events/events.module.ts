
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EventsListComponent } from './components/events-list.component';
import { EventsDetailsComponent } from './components/event-details.component';

import { FirstLetterCapitalPipe } from './pipes/first-letter-capital.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

import { SepEventsService } from './services/sep-events.service';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule
    ],
    exports: [EventsListComponent],
    declarations: [
        EventsListComponent,
        EventsDetailsComponent,
        //JphPostsListComponents,
        FirstLetterCapitalPipe,
        FilterByPipe
    ],
    providers: [SepEventsService],
})
export class EventsModule { }
