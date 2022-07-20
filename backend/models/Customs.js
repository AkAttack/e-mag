const mongoose = require("mongoose")

const CustomsSchema = new mongoose.Schema({
  VAT: {
    type: Number,
    required: true
  },
  duty: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
}, {timestamps: true})

const CustomsModel = mongoose.model("customs", CustomsSchema)
module.exports = CustomsModel