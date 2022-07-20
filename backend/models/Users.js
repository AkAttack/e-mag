const mongoose = require("mongoose")

const UsersSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true})

const UsersModel = mongoose.model("ursers", UsersSchema)
module.exports = UsersModel