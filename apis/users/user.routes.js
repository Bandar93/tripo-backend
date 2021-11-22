const express = require("express");
const { signup, signin } = require("./user.controllers");
const passport = require("passport");

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", passport.authenticate("local", { session: false }), signin);

module.exports = router;