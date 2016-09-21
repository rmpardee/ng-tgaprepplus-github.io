"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import objectSprint from './sprints/objects';
var Sprint = (function () {
    function Sprint() {
    }
    return Sprint;
}());
exports.Sprint = Sprint;
var objectSprint = [
    {
        "name": "Objects",
        "slides": "//slides.com/telegraphprep/telegraphprepweek1-21-33/embed",
        "repo": "https://github.com/TelegraphPrep/08-2016-Arrays",
        "video": "https://vimeo.com/155787394/2e06e54e03"
    },
    {
        "name": "Arrays",
        "slides": "//slides.com/telegraphprep/telegraphprepweek1-21-33/embed",
        "repo": "https://github.com/TelegraphPrep/08-2016-Objects",
        "video": "https://vimeo.com/155754175/f02142b962"
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Prep+ Course Materials';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{ title }}</h1>\n    <div *ngIf=\"selectedSprint\">\n      <h2>{{ selectedSprint.name }}</h2>\n      <div>{{ selectedSprint.repo }}</div>\n    </div>\n    <ul class=\"objSprint\">\n      <li *ngFor=\"let sprint of objSprint\">\n        <span>{{ sprint.name }}</span>\n      </li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map