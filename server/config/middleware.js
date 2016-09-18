var routes = require('./routes.js');

//export middleware
module.exports = function (app, express) {
  
  //use express router mini-app
  var router = express.Router();

  //inject router into routes
  routes(router);

  //use router for all requests
  app.use('/api', router);
};