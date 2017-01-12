System.register(['angular2/core', 'angular2/router', './event.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, event_service_1;
    var EventDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            EventDetailComponent = (function () {
                function EventDetailComponent(_eventService, _routeParams, _router) {
                    this._eventService = _eventService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.pageTitle = 'Event Detail';
                    var id = this._routeParams.get('id');
                    this.pageTitle += ": " + id;
                }
                EventDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._eventService.getEvent(id)
                        .subscribe(function (event) { return _this.events = event; }, function (error) { return _this.errorMessage = error; });
                };
                EventDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['Events']);
                };
                EventDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/events/event-detail.component.html',
                        providers: [event_service_1.EventService]
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService, router_1.RouteParams, router_1.Router])
                ], EventDetailComponent);
                return EventDetailComponent;
            }());
            exports_1("EventDetailComponent", EventDetailComponent);
        }
    }
});
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

//# sourceMappingURL=event-detail.component.js.map
