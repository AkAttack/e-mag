const mongoose = require("mongoose")

const QuotationsSchema = mongoose.Schema({
  quoteId: {
    type: String,
    required: true
  },  
  ofOrderItems: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "order-items",
    required: true
  },
  doneByUser: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users',
    required: true
  },
  orderFor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer-infos",
    required: true
  },
  freight: Number,
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