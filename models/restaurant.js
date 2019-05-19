module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });

  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.Burger, {
      onDelete: "cascade"
    });
  };
  
  return Restaurant;
};