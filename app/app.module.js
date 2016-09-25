var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '@angular/platform-browser', './components/app.component', './components/app.resourcesComponent', './components/app.sprintsComponent'], function (require, exports, core_1, platform_browser_1, app_component_1, app_resourcesComponent_1, app_sprintsComponent_1) {
    "use strict";
    var AppModule = (function () {
        function AppModule() {
        }
        AppModule = __decorate([
            core_1.NgModule({
                imports: [platform_browser_1.BrowserModule /*, Ng2BootstrapModule*/],
                declarations: [app_component_1.AppComponent, app_resourcesComponent_1.ResourcesComponent, app_sprintsComponent_1.SprintsComponent],
                bootstrap: [app_component_1.AppComponent, app_resourcesComponent_1.ResourcesComponent, app_sprintsComponent_1.SprintsComponent]
            }), 
            __metadata('design:paramtypes', [])
        ], AppModule);
        return AppModule;
    }());
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map