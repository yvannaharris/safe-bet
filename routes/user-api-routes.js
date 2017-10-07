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

    app.get("/api/users/:id," (req, res) => {
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
}
