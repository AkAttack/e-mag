const mongoose = require("mongoose")

const CustomerInfosSchema = mongoose.Schema({
  namefirst: {
    type: String,
    required: true
  },
  namelast: {
    type: String,
    required: true
  },
  address: String,
  email: {
    type: String,
    required: true
  },
  phone: String,
  address: String,
  profilePic: String
}, {timestamps: true})

const CustomerInfosModel = mongoose.model("customer-infos", CustomerInfosSchema)
module.exports = CustomerInfosModel