
import { Component, Input, Output, EventEmitter , OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { SepEvent } from "../models/sep-event";
import { SepEventsService } from '../services/sep-events.service';


@Component({
    selector: 'event-details',
    templateUrl: '../views/events-details.component.html'
})

export class EventsDetailsComponent implements OnInit {
    constructor( @Inject(SepEventsService) private _eventsService:SepEventsService,

                @Inject(ActivatedRoute) private _route:ActivatedRoute  ) {

    }

    title : string = "Details of Event - ";
    event: SepEvent;
    eventId : number;

    ngOnInit():void{
        this._route.params.subscribe((params)=>
            this.eventId=params["id"]
    );
    this._eventsService.getSingleEvent(this.eventId).subscribe(
        data=>this.event=data,
        error=>console.log(error),
        ()=>console.log("Event details Service call completed")

    );
    }
    //@Input("receivedEvent") event : SepEvent;
    
    //@Input("receivedEventId") eventId : number;
    //@Output("onConfirmation") sendConfirmation: EventEmitter<string> = new EventEmitter<string>();

    // ngOnChanges(): void{
    //     this.event = this._eventsService.getSingleEvent(this.eventId);
    // }
    // onSendConfirmation() : void{
    //     this.sendConfirmation.emit("Received Event Sucessfully!");
    // }


}