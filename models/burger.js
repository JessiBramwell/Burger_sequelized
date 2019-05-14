// // DEPENDENCIES
// var orm = require("../config/orm.js");

// // burger object
// var burger = {
//   all: function (callback) {
//     orm.all("burgers", function (res) {
//       callback(res);
//     });
//   },
//   create: function (cols, vals, callback) {
//     orm.create("burgers", cols, vals, function (res) {
//       callback(res);
//     });
//   },
//   update: function (colValues, condition, callback) {
//     orm.update("burgers", colValues, condition, function (res) {
//       callback(res);
//     });
//   },
//   delete: function (condition, callback) {
//     orm.delete("burgers", condition, function (res) {
//       callback(res)
//     });
//   }
// }

module.exports = function(sequelize, DataTypes) {
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
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });
  return Burger;
};