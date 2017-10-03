const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var bodyParser = require("body-parser");
const routes = require("./routes");
// Requiring our models for syncing
var db = require("./models");
app.use(routes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routes
// =============================================================
// require("./routes/api/users.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
var callback;

exports.app = app;
exports.waitOnServer = function (cb) {
	callback = cb;
}

db.sequelize.sync({ }).then(function() {
  var server = app.listen(PORT, function() {
    console.log("App listening on PORT %s" + PORT);
  });

 if (typeof callback == "function") {
 	callback(server);
 }
});


