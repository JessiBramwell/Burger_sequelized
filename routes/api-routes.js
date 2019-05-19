const db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {

    db.Restaurant.findAll({})
      .then(function (rest_data) {

        db.Burger.findAll({
          include: [db.Restaurant]

        }).then(function (burger_data) {

          var view_obj = {
            restaurants: rest_data,
            burgers: burger_data
          };
          res.render("index", view_obj);
          // console.log(view_obj.burgers);

        });
      });
  });

  app.post("/api/burgers", function (req, res) {

    db.Burger.create(req.body).then(function (result) {
      res.json(result);

    }).catch(function (err) {
      res.json(err);

    });
  });

  app.post("/api/restaurant", function (req, res) {

    db.Restaurant.create(req.body).then(function (result) {
      res.json(result);

    }).catch(function (err) {
      res.json(err);

    });
  });

  app.put("/api/burgers/:id", function (req, res) {
    console.log(req.params.id, req.body);

    db.Burger.update({
      eaten: req.body
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (result) {
        res.json(result)


      }).chatch(function (err) {
        res.json(err)

      });
  });

  app.delete("/api/burgers/:id", function (req, res) {

    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);

    });
  });
}