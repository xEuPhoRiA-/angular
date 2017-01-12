import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { EventService } from './event.service';
import { IEvent } from './event';



@Component({
  templateUrl: 'app/events/event-detail.component.html',
  providers: [EventService]
})


export class EventDetailComponent implements OnInit {
    pageTitle: string = 'Event Detail';
    errorMessage: string;
    events: IEvent[];
    eventName: string;
    eventDate: string;
    eventTime: string;
    eventCode: string;
    eventDesc: Array<string>;
    eventLoc: string;
    eventDur: string;
    eventFee: string;
    eventRating: string;
    eventUrl: string;




    constructor(private _eventService: EventService, private _routeParams: RouteParams, private _router: Router) {
      let id = this._routeParams.get('id');
      this.pageTitle += `: ${id}`;
    }

    ngOnInit(): void {
        let id = this._routeParams.get('id');
        this._eventService.getEvent(id)
            .subscribe(event => this.events = event,
            error => this.errorMessage = <any>error);

    }

    onBack(): void {
      this._router.navigate(['Events']);
    }
}


// let eventName: string = this.eventDetails[0].name;
// let eventDate: string = this.event.date;
// let eventTime: string = this.event.time;
// let eventCode: string = this.event.name;
// let eventDesc: Array<string> = this.event.name;
// let eventLoc: string = this.event.name;
// let eventDur: string = this.event.name;
// let eventFee: string = this.event.name;
// let eventRating: string = this.event.name;
// let eventUrl: string = this.event.name;
