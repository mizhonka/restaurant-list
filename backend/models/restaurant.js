const mongoose = require("mongoose")

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    visited: Boolean,
    review: Number,
    tags: [
        {
            type: String
        }
    ]
})

restaurantSchema.set("toJSON", {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id.toString(),
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model("Restaurant", restaurantSchema);
