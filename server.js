var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var massive = require("massive");
var config = require("./config");
var session = require("express-session");
var app = module.exports = express();

console.log(massive, "massive")
var db = massive.connectSync({
  connectionString: config.pgAdmin
});
app.set("db", db);


var port = config.port;
var restaurantsCtrl = require("./controllers/restaurantsCtrl");
var candidatesCtrl = require("./controllers/candidatesCtrl");


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/api/restaurants", restaurantsCtrl.getRestaurants);
app.get("/api/candidates", candidatesCtrl.getCandidates);

app.listen(port, function() {
  console.log("listen on port ", port);
});
