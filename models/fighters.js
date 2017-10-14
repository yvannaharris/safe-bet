module.exports = function(sequelize, DataTypes) {
    var Fighter = sequelize.define("Fighter", {
        name: {
            type: DataTypes.STRING,
        },
        record: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.STRING,
        },
        height: {
            type: DataTypes.STRING,
        },
        weight: {
            type: DataTypes.STRING,
        },
        weight_class: {
            type: DataTypes.STRING,
        },
        knockouts: {
            type: DataTypes.STRING,
        },
        submissions: {
            type: DataTypes.STRING,
        },
        decisions: {
            type: DataTypes.STRING,
        },
        strike_attempts: {
            type: DataTypes.STRING,
        },
        oldid: {
            type: DataTypes.INTEGER,
        },
        strike_successes: {
            type: DataTypes.STRING,
        }
    },{
        timestamps: false
    });
    return Fighter;
}
