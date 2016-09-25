var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', './data/sprints'], function (require, exports, core_1, sprints_1) {
    "use strict";
    var Sprint = (function () {
        function Sprint() {
        }
        return Sprint;
    }());
    exports.Sprint = Sprint;
    var SprintsComponent = (function () {
        function SprintsComponent() {
            this.title = 'Sprints';
            this.sprints = sprints_1.sprintDataObj;
        }
        SprintsComponent.prototype.onSelect = function (sprint) {
            this.selectedSprint = sprint;
        };
        SprintsComponent = __decorate([
            core_1.Component({
                selector: 'sprints',
                template: "\n    <h2>{{ title }}</h2>\n    <ul class=\"objSprint\">\n      <li *ngFor=\"let sprint of sprints\" (click)=\"onSelect(sprint)\">\n        <span>{{ sprint.name }}</span>\n      </li>\n    </ul>\n    <div *ngIf=\"selectedSprint\">\n      <h2>{{ selectedSprint.name }}</h2>\n      <ul>\n        <li><a target=\"_blank\" href=\"{{ selectedSprint.slides }}\">{{ selectedSprint.name }} Slides</a></li>\n        <li><a target=\"_blank\" href=\"{{ selectedSprint.repo }}\">{{ selectedSprint.name }} Repo</a></li>\n      </ul>\n    </div>\n  "
            }), 
            __metadata('design:paramtypes', [])
        ], SprintsComponent);
        return SprintsComponent;
    }());
    exports.SprintsComponent = SprintsComponent;
});
//# sourceMappingURL=app.sprintsComponent.js.map