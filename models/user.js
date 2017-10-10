module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "password",
      validate: {
        len: [1]
      }
    },
    {
      karma: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
      }
    }
  });

  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Bet, {
      onDelete: "cascade"
    });
  };

  return User;
};
