module.exports = function(sequelize, DataTypes) {
  var Bet = sequelize.define("Bet", {
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      karma_received: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });

  Bet.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Bet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Bet.belongsTo(models.Match, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Bet;
};
