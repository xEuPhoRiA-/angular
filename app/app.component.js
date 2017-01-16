System.register(['angular2/core', './events/event-list.component', './events/event-detail.component', './events/event-add.component', './home/welcome.component', './events/event.service', 'angular2/http', 'angular2/router', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, event_list_component_1, event_detail_component_1, event_add_component_1, welcome_component_1, event_service_1, http_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_list_component_1_1) {
                event_list_component_1 = event_list_component_1_1;
            },
            function (event_detail_component_1_1) {
                event_detail_component_1 = event_detail_component_1_1;
            },
            function (event_add_component_1_1) {
                event_add_component_1 = event_add_component_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Local Events App';
                }
                AppComponent = __decorate([
                    //Loads all features
                    core_1.Component({
                        selector: 'events-app',
                        template: "\n    <div>\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <a class=\"navbar-brand\">{{pageTitle}}</a>\n            <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['Welcome']\" >Home</a></li>\n                <li><a [routerLink]=\"['Events']\" >Event List</a></li>\n                <li><a [routerLink]=\"['AddEvent']\" >Add Event</a></li>\n            </ul>\n        </div>\n    </nav>\n    <router-outlet></router-outlet>\n    </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [event_service_1.EventService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/events', name: 'Events', component: event_list_component_1.EventListComponent },
                        { path: '/events/:id', name: 'EventDetail', component: event_detail_component_1.EventDetailComponent },
                        { path: '/events/add', name: 'AddEvent', component: event_add_component_1.AddEvent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
