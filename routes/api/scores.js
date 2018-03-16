const router = require("express").Router();
const scoreController = require("../../controllers/scoreController");


router.route("/")
  .post(scoreController.create);  

router.route("/user")
  .post(scoreController.signUp);

router.route("/user/logIn")
  .put(scoreController.logIn);

router.route("/user/logOut")
  .put(scoreController.logOut);

router.route("/user/:loggedIn")
  .get(scoreController.loggedIn);

router.route("/:firstName/:lastName")
	.get(scoreController.findAll);

router.route("/:id")
  .delete(scoreController.remove);

module.exports = router;