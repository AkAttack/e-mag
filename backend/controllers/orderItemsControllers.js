const mongoose = require("mongoose")
const OrderItem = require("../models/OrderItems")

//get All OrderItems 
const getOrderItems = async (req, res) => {
  const OrderItems = await OrderItem.find({}).sort({createdAt: -1})

  res.status(200).json(OrderItems)
}


//get Single OrderItems
const getOrderItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such OrderItem'})
  }

  const OrderItem = await OrderItem.findById(id)

  if (!OrderItem) {
    return res.status(404).json({error: 'No such OrderItem'})
  }

  res.status(200).json(OrderItem)
}


//Create New OrderItems
const createOrderItem = async (req, res) => {
  //add doc to db
  try {
    const custInfo = await OrderItem.create(req.body)
    res.json(custInfo)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete a OrderItems
const deleteOrderItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such OrderItem'})
  }

  const OrderItem = await OrderItem.findOneAndDelete({_id: id})

  if(!OrderItem) {
    return res.status(400).json({error: 'No such OrderItem'})
  }

  res.status(200).json(OrderItem)
}


//update a OrderItems
const updateOrderItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such OrderItem'})
  }

  const OrderItem = await OrderItem.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!OrderItem) {
    return res.status(400).json({error: 'No such OrderItem'})
  }

  res.status(200).json(OrderItem)
}

module.exports = {
  getOrderItems,
  getOrderItem,
  createOrderItem,
  deleteOrderItem,
  updateOrderItem
}