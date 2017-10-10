// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/matches", function(req, res) {
    var query = {};

    db.Match.findAll({
      where: query,
      include: [{
        model: db.Event
      }]
    }).then(function(dbMatch) {
      res.json(dbMatch);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/matches/:id", function(req, res) {
    db.Match.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: db.Event
      }]
    }).then(function(dbMatch) {
      console.log(dbMatch);
      res.json(dbMatch);
    });
  });
  
};
