const express = require("express");
const { tripListFetch, fetchTrip } = require("./trips.controllers");

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

module.exports = router;
