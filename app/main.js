// Wrap in an IFFE to not polute the global namespace
(function(app) {
  // When the DOM is loaded, call the bootstrapModule function passing in our AppModule
  // AppModule tells it the bootstrap component is our AppComponent, and renders that component's template inside the my-app element tag on the DOM
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });
// Call our IFFE with the app on the window if it already exists or initialize as an empty object if not
})(window.app || (window.app = {}));