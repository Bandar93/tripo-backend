const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const TripSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: String,
  image: String,
  description: String,
});

TripSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Trip", TripSchema);
