const express = require("express");
const { tripListFetch, fetchTrip, tripCreate } = require("./trips.controllers");
const passport = require("passport");
const upload = require("../../middleware/multer");


// express
const router = express.Router();

//Param Middleware
router.param("tripId", async (req, res, next, tripId) => {
  const trip = await fetchTrip(tripId, next);
  if (trip) {
    req.trip = trip;
    next();
  } else {
    next({ status: 404, message: "Trip Not Found!" });
  }
});

// Routers
router.get("/", tripListFetch);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  tripCreate
);

// router.delete("/:tripId",passport.authenticate("jwt", { session: false }), tripDelete);

// router.put("/:tripId", passport.authenticate("jwt", { session: false }), upload.single("image"), tripUpdate);


module.exports = router;
