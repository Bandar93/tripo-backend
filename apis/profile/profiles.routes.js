const express = require("express");
const upload = require("../../middleware/multer");
const passport = require("passport");
const { profileUpdate, fetchProfile, findProfile  } = require("./profiles.controllers");
const router = express.Router()


router.param("profileId", async (req, res, next, profileId) => {
  const profile = await findProfile(profileId, next);
  if (profile) {
    req.profile = profile;
    next();
  } else {
    next({ status: 404, message: "Profile Not Found!" });
  }
});

router.get("/", fetchProfile);

router.put(
    "/:profileId",
    passport.authenticate("jwt", { session: false }),
    upload.single("image"),
    profileUpdate
  );

  
module.exports = router;