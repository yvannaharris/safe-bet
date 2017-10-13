module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
      unique: true
    },
    karma: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  });

  User.associate = function(models) {
    
    User.hasMany(models.Bet, {
      onDelete: "cascade"
    });
  };

  return User;
};
