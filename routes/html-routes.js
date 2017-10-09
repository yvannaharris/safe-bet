
// Dependencies
// =============================================================
var path = require("path");

var express = require("express");

var router = express.Router();

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/INDEX.html"));
    // Query to get object to send to handlebars
    // res.render("index", {data});
    // res.redirect("/"); (use this for create/post/delte - I left it here as a reminder)
  });

};

//router.get("/", function (req,res) {
  // res.sendFile(path.join(__dirname, "../public/INDEX.html"));
  // Query to get object to send to handlebars
  // res.render("index", {data});
  // res.redirect("/"); (use this for create/post/delte - I left it here as a reminder)
//});

//module.exports = router;