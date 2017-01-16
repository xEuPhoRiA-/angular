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
    event: IEvent[];



    constructor(private _eventService: EventService, private _routeParams: RouteParams, private _router: Router) {
      let id = this._routeParams.get('id');
      this.pageTitle += `: ${id}`;
    }

    ngOnInit(): void {
        let id = this._routeParams.get('id');
        this._eventService.getEvent(id)
            .subscribe(event => this.event = event,
            error => this.errorMessage = <any>error);

    }

    onBack(): void {
      this._router.navigate(['Events']);
    }
}
