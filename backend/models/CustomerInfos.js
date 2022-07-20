const mongoose = require("mongoose")

const CustomerInfosSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: Number,
  profilePic: String
}, {timestamps: true})

const CustomerInfosModel = mongoose.model("customer-infos", CustomerInfosSchema)
module.exports = CustomerInfosModel