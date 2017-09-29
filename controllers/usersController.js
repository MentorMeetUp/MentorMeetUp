const db = require("../models");
module.exports = {


findByEmail: function(req, res) {
  };  db.Users
      .findOne({
      where: {
        email: req.params.email
    }
}).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
}
