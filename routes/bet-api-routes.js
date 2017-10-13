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
            res.redirect("/fightcards");
        });
    });

    app.post("/karma/:id", (req, res) => {
        db.Bet.findOne({
                where: {
                    id: req.params.id
                },
                include: [{
                    model: db.User
                },
                {
                    model: db.Match
                }]
            }).then((dbBet)=> {
                if (dbBet.Match.result == "TBD") {
                    res.redirect("/userbets");
                }
                else {
            db.Bet.update({
                    karma_received: true
                },
                {
                    where: {
                        id: req.params.id
                    }
            }).then((dbBet) => {
                db.Bet.findOne({
                    where: {
                        id: req.params.id
                    },
                    include: [{
                        model: db.User
                    },
                    {
                        model: db.Match
                    }]
                }).then((dbBet)=> {
                    var betAmount = dbBet.amount;
                    var oldAmount = dbBet.User.karma;
                    var newKarma = 0;
                    if (dbBet.Match.result == "Win") {
                        newKarma = parseFloat(betAmount) + parseFloat(oldAmount);
                    }
                    else if (dbBet.Match.result == "Loss") {
                        newKarma = parseFloat(oldAmount) - parseFloat(betAmount);
                    }
                    else if (dbBet.Match.result == "Draw") {
                        newKarma = parseFloat(oldAmount);
                    }
                    else {
                        newKarma = parseFloat(oldAmount);
                    }
                    db.User.update({
                            karma: newKarma
                        },
                        {
                            where: {
                                id: req.session.userid
                            }
                    }).then((dbUser) => {
                        req.session.karma = newKarma;
                        res.redirect("/userbets");
                    });
                });                     
            });
             }
        })
    });

}
