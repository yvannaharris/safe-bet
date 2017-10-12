// Dependencies
// =============================================================
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
      var fighterMatch = dbIndex[0].Matches[0];
      var opponentMatch = dbIndex[0].Matches[0+1];
      var fighterArr = [];
      var matchesArr = [];
        //TEMPORARY FIX SINCE FOR LOOP EXCEEDS MEMORY
        matchesArr.push(dbIndex[0].Matches[0]);
        matchesArr.push(dbIndex[0].Matches[2]);
        matchesArr.push(dbIndex[0].Matches[4]);
        matchesArr.push(dbIndex[0].Matches[6]);
        matchesArr.push(dbIndex[0].Matches[8]);
        matchesArr.push(dbIndex[0].Matches[10]);
        matchesArr.push(dbIndex[0].Matches[12]);
        matchesArr.push(dbIndex[0].Matches[14]);
        matchesArr.push(dbIndex[0].Matches[16]);
        matchesArr.push(dbIndex[0].Matches[18]);
        matchesArr.push(dbIndex[0].Matches[20]);
        matchesArr.push(dbIndex[0].Matches[22]);
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
          matches: matchesArr,
          fMatch: fighterMatch,
          oMatch: opponentMatch
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

  app.get("matches/:eventid/:matchid", function (req, res) {
    db.Event.findAll({
      where: {
        id: req.params.id
      },
      include: [{
        model: db.Match
      }]
    }).then(function (dbIndex) {
      var fighter = dbIndex[0].Matches[req.params.matchid].fighter;
      var opponent = dbIndex[0].Matches[req.params.matchid].opponent;
      var fighterMatch = dbIndex[0].Matches[req.params.matchid];
      var opponentMatch = dbIndex[0].Matches[parseInt(req.params.matchid)+1];
      var fighterArr = [];
      var matchesArr = [];
        //TEMPORARY FIX SINCE FOR LOOP EXCEEDS MEMORY
        matchesArr.push(dbIndex[0].Matches[0]);
        matchesArr.push(dbIndex[0].Matches[2]);
        matchesArr.push(dbIndex[0].Matches[4]);
        matchesArr.push(dbIndex[0].Matches[6]);
        matchesArr.push(dbIndex[0].Matches[8]);
        matchesArr.push(dbIndex[0].Matches[10]);
        matchesArr.push(dbIndex[0].Matches[12]);
        matchesArr.push(dbIndex[0].Matches[14]);
        matchesArr.push(dbIndex[0].Matches[16]);
        matchesArr.push(dbIndex[0].Matches[18]);
        matchesArr.push(dbIndex[0].Matches[20]);
        matchesArr.push(dbIndex[0].Matches[22]);
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
          matches: matchesArr,
          fMatch: fighterMatch,
          oMatch: opponentMatch
        }
        console.log(fighters);
        res.render("index", fighters)
        })
      })
    })
  });

};

//router.get("/", function (req,res) {
  // res.sendFile(path.join(__dirname, "../public/INDEX.html"));
  // Query to get object to send to handlebars
  // res.render("index", {data});
  // res.redirect("/"); (use this for create/post/delte - I left it here as a reminder)
//});

//module.exports = router;
