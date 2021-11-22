const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  //   recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipes" }],
  //   categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Categories" }],
});

module.exports = model("User", UserSchema);
