const express = require("express");
const upload = require("../../middleware/multer");
const passport = require("passport");
const { ProfileUpdate } = require("./profiles.controllers");
const router = express.Router()

router.put(
    "/",
    passport.authenticate("jwt", { session: false }),
    upload.single("image"),
    ProfileUpdate
  );

  
module.exports = router;