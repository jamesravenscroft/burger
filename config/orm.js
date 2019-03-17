var mysql = require("mysql");
In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

* `selectAll()`
* `insertOne()`
* `updateOne()`

* Export the ORM object in `module.exports`.



//Sample below
// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the burger object
var burger = {
  // Select all burger table entries
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;