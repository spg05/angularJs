

import { Component, OnInit, Inject} from '@angular/core';
import { SepEvent} from "../models/sep-event";
import { SepEventsService } from "../services/sep-events.service";

@Component({
    selector: 'events-list',
    templateUrl: '../views/events-list.component.html'
})

export class EventsListComponent implements OnInit {
    constructor( @Inject(SepEventsService) private _eventsService:SepEventsService) {

     }

    title: string = "Synechron Events List";
    subTitle: string = "Published by synechron HR";
    childMessage : string ="";
    //searchChar:string ="ang";

    selectedEvent: SepEvent;

    ngOnInit():void{
        this.events = this._eventsService.getAllEvents();
    }
    onEventSelection(event : SepEvent):void{
        this.selectedEvent = event;
    }
   
   onChildConfirmation(msg:string) :void{
       this.childMessage = msg;
   }

    events: SepEvent[] = [];
   
}