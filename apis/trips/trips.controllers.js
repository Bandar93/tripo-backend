const Trip = require("../../db/model/Trip");

exports.tripListFetch = async (req, res, next) => {
  try {
    const trips = await Trip.find();
    return res.json(trips);
  } catch (error) {
    next(error);
  }
};

exports.fetchTrip = async (tripId, next) => {
  try {
    const trip = await Trip.findById(tripId);
    return trip;
  } catch (error) {
    next(error);
  }
};

exports.tripCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.file.path = req.file.path.replace("\\", "/");
      req.body.image = `/${req.file.path}`;
    }
    req.body.owner = req.user._id;
    const newTrip = await Trip.create(req.body);
    await newTrip.populate({
      path: "owner",
      select: "username",
    });


