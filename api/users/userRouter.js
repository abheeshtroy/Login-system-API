const { createUser } = require("./userController.js");

const router = require("express").Router();

router.post("/", createUser);

module.exports = router;