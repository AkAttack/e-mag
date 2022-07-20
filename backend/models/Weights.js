const mongoose = require("mongoose")

const WeightsSchema = new mongoose.Schema({
  min: {
    type: Number,
    required: true
  },
  max: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
}, {timestamps: true})

const WeightsModel = mongoose.model("weight", WeightsSchema)
module.exports = WeightsModel