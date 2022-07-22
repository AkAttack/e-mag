const mongoose = require("mongoose")

const OrderItemsSchema = mongoose.Schema({
  description: String,
  color: String,
  notes: String,
  url: {
    type: String,
    required: true
  },
  size: String,
  weightLB: {
    type: Number,
    required: true
  },
  itemPrice: {
    type: Number,
    required: true
  },
  weightPrice:{
    type: Number,
    required: true
  },  
  USTax: Number,
  totalPrice: Number,
  purchased: Boolean,
  inGuyana: Boolean,
  toCustomer: Boolean
}, {timestamps: Boolean})

const OrderItemsModel = mongoose.model("order-items", OrderItemsSchema)
module.exports = OrderItemsModel