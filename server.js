var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require('method-override');



var appPORT = process.env.PORT || 3306;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// app.use(methodOverride('_method'));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(appPORT, function() {
  console.log("Listening on port:%s", appPORT);
});
console.log("this is routes " + routes);
console.log("this is app.set " + app.set);
// console.log(exphbs);

//old code below
// var express = require("express");
// var bodyParser = require("body-parser");
// var PORT = process.env.PORT || 3307;

// var app = express();
// require("./config/connection.js")
// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// Parse application body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller");

// app.use(routes);

// Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:%s" + PORT);
// });
