// Wrap in an IFFE to not polute the global namespace
(function(app) {
  app.AppModule = 
    ng.core.NgModule({
      imports: [ng.platformBrowser.BrowserModule],
      declarations: [app.AppComponent],
      bootstrap: [app.AppComponent]
    })
    .Class({
      constructor: function() {}
    });
// Call our IFFE with the app on the window if it already exists or initialize as an empty object if not
})(window.app || (window.app = {}));