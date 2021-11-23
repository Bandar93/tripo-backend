const Profile = require("../../db/model/Profile");

exports.ProfileUpdate = async (req, res, next) => {
    try {
      if (req.file) req.body.image = `/${req.file.path}`;
      await Profile.updateOne(req.body);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  };
