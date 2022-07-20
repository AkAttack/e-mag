const mongoose = require("mongoose")

const OrderItemsSchema = mongoose.Schema({
  description: String,
  color: String,
  notes: String,
  URL: {
    type: String,
    required: true
  },
  size: String,
  weightLB: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  weightPrice:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'weights',
    required: true
  },  
  USTax: Number,
  totalPrice: Number,
  purchased: false,
  inGuyana: false,
  toCustomer: false
}, {timestamps: true})

const OrderItemsModel = mongoose.model("order-items", OrderItemsSchema)
module.exports = OrderItemsModel