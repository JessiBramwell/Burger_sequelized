module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    eaten: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Burger.associate = function (models) {
    Burger.belongsTo(models.Restaurant, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Burger;
};

// ADD AN 'ORDER' OPTION TO RECIEVE DATA IN ALPHABETICAL ORDER