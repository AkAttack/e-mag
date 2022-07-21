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

  const OrderItems = await OrderItem.findById(id)

  if (!OrderItems) {
    return res.status(404).json({error: 'No such OrderItem'})
  }

  res.status(200).json(OrderItems)
}


//Create New OrderItems
const createOrderItem = async (req, res) => {
  //add doc to db
  try {
    const OrderItems = await OrderItem.create(req.body)
    res.json(OrderItems)
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

  const OrderItems = await OrderItem.findOneAndDelete({_id: id})

  if(!OrderItems) {
    return res.status(400).json({error: 'No such OrderItem'})
  }

  res.status(200).json(OrderItems)
}


//update a OrderItems
const updateOrderItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such OrderItem'})
  }

  const OrderItems = await OrderItem.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!OrderItems) {
    return res.status(400).json({error: 'No such OrderItem'})
  }

  res.status(200).json(OrderItems)
}

module.exports = {
  getOrderItems,
  getOrderItem,
  createOrderItem,
  deleteOrderItem,
  updateOrderItem
}