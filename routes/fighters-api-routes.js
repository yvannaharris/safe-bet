var db = require("../models");

module.exports = function(app) {
  var query = {}
  // Find all Authors and return them to the user with res.json
  app.get("/api/fighters", function(req, res) {
    db.Fighter.findAll({
      where: query
    }).then(function(dbFighter) {
      res.json(dbFighter);
    });
  });

  app.get("/api/fighters/:id", function(req, res) {
     // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Fighter.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbFighter) {
      res.json(dbFighter);
    });
  });

};
