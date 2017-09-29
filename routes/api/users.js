const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
// router.route("/")
//   .post(usersController.create);

// Matches with "/api/users/:skill"
router
  .route("/:skill")
  .get(usersController.findAll)
  // .put(usersController.update)


// matches with "api/users/:email"
router
	.route("/signIn/:email")
	.get(usersController.findByEmail)

module.exports = router;