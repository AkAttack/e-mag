const mongoose = require("mongoose")

const QuotationsSchema = new mongoose.Schema({ 
  downpayment: Number,
  freightType: String,
  notes: String,

  quoteID: {type: String, required: true},
  customer: {type: Object, required: true}, 
  cart: {type: Array, required: true},
  adminInfo: Object,
  weightInfo: Object, 
  customsInfo: Object,
  updateSteps: Object,
  target: {type: Object, required: true},
}, {timestamps: true})

const QuotationsModel = mongoose.model("quotations", QuotationsSchema)
module.exports = QuotationsModel