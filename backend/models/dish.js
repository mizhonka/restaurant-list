const mongoose = require("mongoose");

const dishSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  review: Number,
  tried: Boolean,
  price: Number,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

dishSchema.set("toJSON", {
  transform:
    (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
});

module.exports = mongoose.model("Dish", dishSchema);
