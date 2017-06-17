var app = require("../server");


var db = app.get("db");

module.exports = {
  getCandidates: function(req, res) {
    db.read_candidates(function(err, candidates) {
      if (err) console.log(err);
      else res.send(candidates);
    })
  },
  // getCandidate: function(req, res) {
  //   db.read_candidate_by_id(function(err, candidate) {
  //     if (err) console.log(err);
  //     else res.send(candidate);
  //   })
  // },
  addCandidate: function(req, res) {
    var candidate = req.body;
    db.add_candidate([candidate.name, candidate.city, candidate.state, candidate.zipcode, candidate.phone_number, candidate.title, candidate.desire_salary, candidate.register_date, candidate.expertise, candidate.description, candidate.relocate], function(err, candidates) {
      if (err) console.log(err);
      else res.send(candidate);
    })
  }
}
