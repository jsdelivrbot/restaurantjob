var app = require("../server");


var db = app.get("db");

module.exports = {
  getRestaurants: function(req, res) {
    db.read_restaurants(function(err, restaurants) {
      if (err) console.log(err);
      else res.send(restaurants);
    })
  }
}
