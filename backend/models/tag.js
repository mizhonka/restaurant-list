const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

tagSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    (returnedObject.id = returnedObject._id.toString()),
      delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Tag", tagSchema);
