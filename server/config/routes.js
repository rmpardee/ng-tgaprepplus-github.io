module.exports = function(app) {

  // main route 
  app.route('/')
    .get(function(req, res) {
      response.render('././index.html');
    })
    .post(function(req, res) {
      // res.send();
    });
};