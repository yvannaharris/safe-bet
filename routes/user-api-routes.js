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

    app.post("/api/users/", (req, res) => {
        db.User.create(req.body).then((dbUser) => {
            res.json(dbUser);
        });
    });

    app.delete("/api/users/:id", (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbUser) => {
            res.json(dbUser);
        });
    });

    app.get("/api/user/authenticate", function (req, res) {
        console.log("start");
        req.session.username = "cat";
        // res.json({text: req.session.username});
        res.send("username " + req.session.username);
        console.log(req.session.username)
    });

    app.get("/api/user/test", function (req, res) {
        res.json(req.session.username);
    });
}
