const mongoose = require("mongoose")

const InvoicesSchema = mongoose.Schema({
  invoiceId: {
    type: String,
    required: true
  },  
  quoteId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'quotations',
    required: true
  },  
  notes: String,
  cashReceived: Number,
  orderStatus: String,
}, {timestamps: true})

const InvoicesModel = mongoose.model("invoices", InvoicesSchema)
module.exports = InvoicesModel