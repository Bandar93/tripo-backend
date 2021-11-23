const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const TripSchema = mongoose.Schema({
  name: String,
  // REVIEW: we dont have slugs in mobile apps, remove it

  slug: String,
  image: String,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// REVIEW: we dont have slugs in mobile apps, remove it
TripSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Trip", TripSchema);
