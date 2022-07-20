const mongoose = require("mongoose")

const AdminVarsSchema = mongoose.Schema({
  businessCharges: {
    type: Number,
    required: true
  },
  tresholdBCharge: {
    type: Number,
    required: true
  },
  USDRates: {
    type: Number,
    required: true
  }
}, {timestamps: true})

const AdminVarsModel = mongoose.model("admin-vars", AdminVarsSchema)
module.exports = AdminVarsModel