var db = require("../models");

module.exports = function(app) {
  var query = {}
  // Find all Authors and return them to the user with res.json
  app.get("/api/events", function(req, res) {
    db.Event.findAll({
      where: query,
      include: [{
        model: db.Match
      }]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.get("/api/events/:id", function(req, res) {
     // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Event.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: db.Match,
        where: {
          eventID: req.params.id
        }
      }]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

};
