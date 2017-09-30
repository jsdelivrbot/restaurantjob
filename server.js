var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var massive = require("massive");
var config = require("./config");
var session = require("express-session");
var app = module.exports = express();

var db = massive.connectSync({
  // connectionString: config.pgAdmin
  connectionString: config.elephantsql
});
app.set("db", db);


var port = config.port;
var passport = require("./service/passport");
var restaurantsCtrl = require("./controllers/restaurantsCtrl");
var candidatesCtrl = require("./controllers/candidatesCtrl");


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use(session({ secret: config.secret}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "/#!/details",
  failureRedirect: "/#!/signIn"
}));
app.post("/auth/local", passport.authenticate("local", {
  successRedirect: "/me"
  // failureRedirect: "/me"
}));

app.get("/api/restaurants", restaurantsCtrl.getRestaurants);
// app.get("/api/restaurant", restaurantsCtrl.getRestaurant);
app.post("/api/restaurant", restaurantsCtrl.addRestaurant);

app.get("/api/candidates", candidatesCtrl.getCandidates);
app.post("/api/candidate", candidatesCtrl.addCandidate);
app.post("/api/register", candidatesCtrl.register);
app.put("/api/update",  candidatesCtrl.updateProfile);
app.get("/me", candidatesCtrl.me);
app.get("/logout", candidatesCtrl.logout);

app.listen(port, function() {
  console.log("listen on port ", port);
});
