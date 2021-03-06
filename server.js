// DEPENDENCIES
const express = require('express');
const exphbs = require('express-handlebars');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8080;

// MODELS
const db = require("./models");

// PARSE BODY AS JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SERVE PUBLIC FILES
app.use(express.static("public"));

// SETUP HANDLEBARS
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")

// ROUTES
require("./routes/api-routes.js")(app);

// START SERVER
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, () => {
    console.log('Server listening on: ' + PORT);
  });
});