const mma = require('mma');
const db = require('../models');
const sleep = require('sleep');

db.Event.findAll({
    order: [["id", "ASC"]],
    include: [{
        model: db.Match
    }]
    }).then(function (dbIndex) {
        var fightersArr = [];
        for (i = 0; i < dbIndex.length; i++) {
            for (j = 0; j < dbIndex[i].Matches.length; j++) {
                fightersArr.push(dbIndex[i].Matches[j].fighter);
            }
        }
        // Tends to crash by the time it gets to index 69
        // Re-write to i = 69 and wait a few minutes before trying again
        // It may help to have proxies
        for (i = 0; i < fightersArr.length; i++) {
            console.log(fightersArr[i]);
            mma.fighter(fightersArr[i], function(data) {
                db.Fighter.create({
                    name: data.name,
                    record: data.record,
                    age: data.age,
                    height: data.height,
                    weight: data.weight,
                    weight_class: data.weight_class,
                    knockouts: data.wins.knockouts,
                    submissions: data.wins.submissions,
                    decisions: data.wins.decisions,
                    strike_attempts: data.strikes.attempted,
                    strike_successes: data.strikes.successful
                });
            });
        }
    });

