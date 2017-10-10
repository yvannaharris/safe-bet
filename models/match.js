module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define("Match", {
    fighter: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    opponent: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    result: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        isIn: [["TBD", "Win", "Loss", "Draw"]]
      }
    }
  });

  Match.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Match.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false
      }
    });

    Match.hasMany(models.Bet, {
      onDelete: "cascade"
    });
  };

  return Match;
};
