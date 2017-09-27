const db = require("../models");
module.exports = function(app){
findByEmail: function(req, res) {
    db.Users
      .findOne(req.params.email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
}
};