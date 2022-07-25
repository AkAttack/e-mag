const mongoose = require("mongoose")

const CustomerInfosSchema = mongoose.Schema({
  nameFirst: {
    type: String,
    required: true
  },
  nameLast: {
    type: String,
    required: true
  },
  address: String,
  email: {
    type: String,
    required: true
  },
  mobile: Number,
  profilePic: String
}, {timestamps: true})

const CustomerInfosModel = mongoose.model("customer-infos", CustomerInfosSchema)
module.exports = CustomerInfosModel