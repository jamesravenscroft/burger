var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
 
  burger.selectAll(function(burgerData) {
   
    res.render("index", { burger_data: burgerData });
    console.log("this is burgerData " + burgerData);
  });
});

// post route -> back to index
router.post("/burgers/insertOne", function(req, res) {
 
  burger.insertOne(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function(result) {
    
    console.log("this is result " + result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
console.log("this is router from BurgContr " + router);

//old code
// // Dependencies
// var express = require("express");
// var burger= require("../models/burger.js");


// var router = express.Router();

// // Import the model (burger.js) to use its database functions.
// // var burger = require('');

// // Create the routes and associated logic
// router.get('/', function(req, res) {
//   burger.selectAll(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     // console.log(hbsObject);
//     res.render('index', hbsObject);
//   });
// });

// router.post('/burgers', function(req, res) {
//   burger.insertOne([
//     'burger_name'
//   ], [
//     req.body.burger_name
//   ], function(data) {
//     res.redirect('/');
//   });
// });

// router.put('/burgers/:id', function(req, res) {
//   var condition = 'id = ' + req.params.id;

//   burger.updateOne({
//     devoured: true
//   }, condition, function(data) {
//     res.redirect('/');
//   });
// });

// // Export routes for server.js to use.
// module.exports = router;

// // var mysql = require("..burger.js");