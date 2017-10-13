var db = require("../models");

module.exports = function(app) {
    var query = {}
    app.get("/api/users", (req, res) => {
        db.User.findAll({
            where: query,
            include: [{
                model: db.Bet
            }]
        }).then((dbUser) => {
            res.json(dbUser);
        });
    });

    app.get("/api/users/:id", (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: db.Bet,
                where: {
                  userID: req.params.id
                }
            }]
        }).then((dbUser) => {
            res.json(dbUser);
        });
    });

    app.post("/authenticate", function (req, res) {
        console.log(req.body);
        db.User.findOne({
            where: {
                username: req.body.username
            }
        }).then((dbUser) => {
            console.log(dbUser);
            if (dbUser == null) {
                console.log("please enter a valid username!");
                // alert("Please enter a valid username");
                req.session.username = "";
                req.session.userid = "";
                req.session.karma = "";
                res.redirect("/sign-in");
            }
            else {
                req.session.username = dbUser.username;
                req.session.userid = dbUser.id;
                req.session.karma = dbUser.karma;
                console.log(req.session);
                res.redirect("/sign-in");
            }
        })
    });

    app.get("/test", function (req, res) {
        res.send({
            username: req.session.username,
            karma: req.session.karma,
            id: req.session.userid
        });
    });

}
