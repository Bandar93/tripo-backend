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
// fetchTrip not fully tested till I have the create trip - Zainab
//  Can't finish this till I have the 'User' model -Zainab

// exports.tripCreate = async (req, res, next) => {
//   try {

//   } catch (error) {
//     next(error);
//   }
// };

exports.tripDelete = async (req, res, next) => {
  try {
    const foundTrip = req.trip;

    await foundTrip.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.TripUpdate = async (req, res, next) => {
  try {
    //if (req.file) req.body.image = 

    const foundTrip = req.trip;

    await foundTrip.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};