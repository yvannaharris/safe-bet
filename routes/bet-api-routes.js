var db = require("../models");

module.exports = function(app) {
    var query = {}
    app.get("/api/bets", (req, res) => {
        db.Bet.findAll({
            where: query,
            include: [{
                model: db.User
            },
            {
                model: db.Match
            }]
        }).then((dbBet) => {
            res.json(dbBet);
        });
    });

    app.get("/api/bets/:id", (req, res) => {
        db.Bet.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: db.User,
                },
                {
                    model: db.Match,
                    include: [{
                        model: db.Event
                    }]
                }
            ]
        }).then((dbUser) => {
            res.json(dbUser);
        });
    });

    app.post("/api/bets/", (req, res) => {
        db.Bet.create(req.body).then((dbBet) => {
            res.json(dbBet);
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

    app.post("/bets/:matchid", (req, res) => {
        db.Bet.create({
            amount: req.body.amount,
            UserId: req.session.userid,
            MatchId: req.params.matchid
        }).then((dbBet) => {
            res.redirect("/");
        });
    });
}
