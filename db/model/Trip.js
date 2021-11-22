const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const TripSchema = mongoose.Schema({
  name: String,
  slug: String,
  image: String,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

TripSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Trip", TripSchema);
