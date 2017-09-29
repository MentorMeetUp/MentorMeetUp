const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

//matches with "api/users/:email"
router
	.route("/:email")
	.get(usersController.findByEmail);

// router
// 	.route("/")
// 	.get(usersController.findAll);

module.exports = router;
