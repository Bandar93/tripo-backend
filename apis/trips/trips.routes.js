const express = require("express");
const { tripListFetch, fetchTrip , tripDelete, tripUpdate} = require("./trips.controllers");
const passport = require("passport");



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

router.delete("/:tripId",passport.authenticate("jwt", { session: false }), tripDelete);

router.put("/:tripId", passport.authenticate("jwt", { session: false }), upload.single("image"), tripUpdate);


module.exports = router;
