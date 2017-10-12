
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
  var opsComplete = 0;

  app.get("/fights", function(req, res) {
    var fightersObj;
    var renderArr = [];
    db.Event.findAll({
      where: {
        accepting_bets: true
      },
      order: [["id", "ASC"]],
      include: [{
        model: db.Match
      }]
    }).then(function (dbIndex) {
        var fighterArr = [];
        var matchesArr = [];
            for (j = 0; j < dbIndex[0].Matches.length; j+=2) {
                matchesArr.push(dbIndex[0].Matches[j]);
                var fighter = dbIndex[0].Matches[j].fighter;
                var opponent = dbIndex[0].Matches[j].opponent;
                //Changed to query database instead of Google
                matchesArr.push(dbIndex[0].Matches[j]);
                db.Fighter.findOne({
                    where: {
                        name: fighter
                    }
                }).then(function(data) {
                    fighterArr.push(data);
                    db.Fighter.findOne({
                        where: {
                            name: opponent
                        }
                    }).then(function(data) {
                        fighterArr.push(data);
                        fightersObj = {
                            fighter: fighterArr[fighterArr.length - 2],
                            opponent: fighterArr[fighterArr.length - 1],
                            user: {
                                username: req.session.username,
                                id: req.session.id,
                                karma: req.session.karma
                            },
                            matches: matchesArr
                        };
                        renderArr.push(fightersObj);
                        endOp(dbIndex, renderArr, res);
                    });
                });
            }
    });
});

  app.get("/sign-in", function (req, res) {
    res.render("sign-in", {
      username: req.session.username,
      karma: req.session.karma
    });
  });
  

function toObject(arr) {
    var rv = {};
    for (i = 0; i < arr.length; i++) rv[i] = arr[i];
    return rv;
}

function endOp(dbIndex, renderArr, res) {
    if (renderArr.length == dbIndex[0].Matches.length / 2) {
        var fighters = toObject(renderArr);
        console.log(JSON.stringify(fighters, null, 2));
        res.render("fights", fighters);
    }
}

};



//router.get("/", function (req,res) {
  // res.sendFile(path.join(__dirname, "../public/INDEX.html"));
  // Query to get object to send to handlebars
  // res.render("index", {data});
  // res.redirect("/"); (use this for create/post/delte - I left it here as a reminder)
//});

//module.exports = router;
