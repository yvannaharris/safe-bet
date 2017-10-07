var db = require("../models");

module.exports = function(app) {
    app.get("/api/users", (req, res) => {
        db.User.findAll({}).then((dbUser) => {
            res.json(dbUser);
        });
    });

    app.get("/api/users/:id," (req, res) => {
        db.User.findOne(req.params.id).then((dbUser) => {
            res.json(dbUser);
        });
    });

    app.post("/api/users/", (req, res) => {
        db.User.insertOne(req.body.name, req.body.password).then((dbUser) => {
            res.json(dbUser);
        });
    });

    app.delete("/api/users/:id", (req, res) => {
        db.User.destroy(req.params.id).then((dbUser) => {
            res.json(dbUser);
        });
    });
}
