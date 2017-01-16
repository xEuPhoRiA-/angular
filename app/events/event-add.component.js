System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var AddEvent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AddEvent = (function () {
                function AddEvent(builder) {
                    this.builder = builder;
                    this.ename = new common_1.Control("", common_1.Validators.compose([
                        common_1.Validators.required]));
                    this.ecode = new common_1.Control("", common_1.Validators.compose([
                        common_1.Validators.required]));
                    this.edate = new common_1.Control("", common_1.Validators.compose([
                        common_1.Validators.required]));
                    this.etime = new common_1.Control("", common_1.Validators.compose([
                        common_1.Validators.required]));
                    this.eloc = new common_1.Control("", common_1.Validators.compose([
                        common_1.Validators.required]));
                    this.edur = new common_1.Control("", common_1.Validators.compose([
                        common_1.Validators.required]));
                    this.efee = new common_1.Control("", common_1.Validators.compose([
                        common_1.Validators.required]));
                    this.erate = new common_1.Control("", common_1.Validators.compose([
                        common_1.Validators.required]));
                    this.form = builder.group({
                        ename: this.ename,
                        ecode: this.ecode,
                        edate: this.edate,
                        etime: this.etime,
                        eloc: this.eloc,
                        edur: this.edur,
                        efee: this.efee,
                        erate: this.erate
                    });
                }
                AddEvent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/events/event-add.component.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AddEvent);
                return AddEvent;
            }());
            exports_1("AddEvent", AddEvent);
        }
    }
});

//# sourceMappingURL=event-add.component.js.map
