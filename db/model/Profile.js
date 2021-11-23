const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema ({

bio: String,
image: String,
User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

}

);

module.exports = mongoose.model("Profile", ProfileSchema)