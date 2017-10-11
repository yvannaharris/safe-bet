
// Dependencies
// =============================================================
var path = require("path");

var express = require("express");

var router = express.Router();

var db = require("../models");

var mma = require("mma");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Event.findAll({
      where: {
        accepting_bets: true
      },
      order: [["id", "ASC"]],
      include: [{
        model: db.Match
      }]
    }).then(function (dbIndex) {
      var fighter = dbIndex[0].Matches[0].fighter;
      var opponent = dbIndex[0].Matches[0].opponent;
      var fighterArr = [];
      var matchesArr = [];
      for (var i = 0, i < dbIndex[0].Matches.length, i+2) {
        matchesArr.push(dbIndex[0].Matches[i]);
      }
      mma.fighter(fighter, function(data) {
        fighterArr.push(data);
        mma.fighter(opponent, function(data) {
        fighterArr.push(data);
        var fighters = {
          fighter: fighterArr[0],
          opponent: fighterArr[1],
          user: {
            username: req.session.username,
            id: req.session.id,
            karma: req.session.karma
          },
          matches: matchesArr
        }
        console.log(fighters);
        res.render("index", fighters)
        })
      })
    })
  });

  app.get("/sign-in", function (req, res) {
    res.render("sign-in", {
      username: req.session.username,
      karma: req.session.karma
    });
  });
  

};

//router.get("/", function (req,res) {
  // res.sendFile(path.join(__dirname, "../public/INDEX.html"));
  // Query to get object to send to handlebars
  // res.render("index", {data});
  // res.redirect("/"); (use this for create/post/delte - I left it here as a reminder)
//});

//module.exports = router;