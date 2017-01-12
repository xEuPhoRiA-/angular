import { Injectable } from 'angular2/core';
import { IEvent } from './event';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class EventService {

    private _eventUrl = 'http://angular.dev/data.json';

    constructor(private _http: Http){

    }

    getEvents(): Observable<IEvent[]> {
      let allEvents: Observable<IEvent[]> = this._http.get(this._eventUrl)
          .map((response: Response) => <IEvent[]>response.json())
          .catch(this.handleError);
          return allEvents;
    }

    getEvent(id: any) {
      let singleEvent: Observable<IEvent[]> = this._http.get(this._eventUrl)
          .map((response:Response) => <IEvent[]>response.json().filter((response) => (response.code == id)))
          .do((response) => console.log(response))
          .catch(this.handleError);
          return singleEvent;
    }

    private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }

}
