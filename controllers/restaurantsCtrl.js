var app = require("../server");


var db = app.get("db");

module.exports = {
  getRestaurants: function(req, res) {
    db.read_restaurants(function(err, restaurants) {
      if (err) console.log(err);
      else res.send(restaurants);
    })
  },
  // getRestaurants: function(req, res) {
  //   db.read_restaurants(function(err, restaurants) {
  //     if (err) console.log(err);
  //     else res.send(restaurants);
  //   })
  // },
  addRestaurant: function(req, res) {
    var restaurant = req.body;
    db.add_restaurant([restaurant.name, restaurant.address, restaurant.city, restaurant.state, restaurant.zipcode, restaurant.phone_number, restaurant.title, restaurant.salary, restaurant.post_date, restaurant.expertise, restaurant.description, restaurant.phone_area], function(err, restaurant) {
      if (err) console.log(err);
      else res.send(restaurant);
    })
  }
}
