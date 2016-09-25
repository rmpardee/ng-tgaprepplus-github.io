var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', './data/resources'], function (require, exports, core_1, resources_1) {
    "use strict";
    var ResourcesComponent = (function () {
        function ResourcesComponent() {
            this.title = 'Resources';
            this.resourcesData = resources_1.resourcesDataObj;
        }
        ResourcesComponent = __decorate([
            core_1.Component({
                selector: 'resources',
                template: "\n    <h2>{{ title }}</h2>\n    <ul class=\"objSprint\">\n      <li *ngFor=\"let resource of resourcesData\">\n        <a target=\"_blank\" href=\"{{ resource.link }}\">{{ resource.name }}</a>\n      </li>\n    </ul>\n  "
            }), 
            __metadata('design:paramtypes', [])
        ], ResourcesComponent);
        return ResourcesComponent;
    }());
    exports.ResourcesComponent = ResourcesComponent;
});
//# sourceMappingURL=app.resourcesComponent.js.map