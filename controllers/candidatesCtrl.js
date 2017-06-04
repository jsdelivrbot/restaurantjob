var app = require("../server");


var db = app.get("db");

module.exports = {
  getCandidates: function(req, res) {
    db.read_candidates(function(err, candidates) {
      if (err) console.log(err);
      else res.send(candidates);
    })
  }
}
