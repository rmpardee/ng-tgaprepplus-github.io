// Wrap in an IFFE to not polute the global namespace
(function(app) {
  app.AppComponent = 
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Prep+</h1>'
    })
    .Class({
      constructor: function() {}
    });
// Call our IFFE with the app on the window if it already exists or initialize as an empty object if not
})(window.app || (window.app = {}));