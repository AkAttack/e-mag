const mongoose = require("mongoose")

const QuotationsSchema = mongoose.Schema({  
  cart: Array,
  customer: String,
  freightPrice: Number,
  totalWeight: Number,
  businessChargePrice: Number,
  customsTotal: Number,
  downpayment: Number,
  grandTotal: Number,
  freightType: String,
  notes: String,
}, {timestamps: true})

const QuotationsModel = mongoose.model("quotations", QuotationsSchema)
module.exports = QuotationsModel