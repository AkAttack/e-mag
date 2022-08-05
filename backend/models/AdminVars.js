const mongoose = require("mongoose")

const AdminVarsSchema = mongoose.Schema({
  businessCharges: {
    type: Number,
    required: true
  },
  thresholdBAmount: {
    type: Number,
    required: true
  },
  USDRates: {
    type: Number,
    required: true
  },
  usTaxPercent: Number
}, {timestamps: true})

const AdminVarsModel = mongoose.model("admin-vars", AdminVarsSchema)
module.exports = AdminVarsModel