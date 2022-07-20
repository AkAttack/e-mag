const express = require('express')
const {
  getOrderItems, 
  getOrderItem, 
  createOrderItem, 
  deleteOrderItem, 
  updateOrderItem
} = require('../controllers/orderItemsControllers')

const router = express.Router()

// GET all OrderItems
router.get('/', getOrderItems)

// GET a single OrderItem
router.get('/:id', getOrderItem)

// POST a new OrderItem
router.post('/', createOrderItem)

// DELETE a OrderItem
router.delete('/:id', deleteOrderItem)

// UPDATE a OrderItem
router.patch('/:id', updateOrderItem)

module.exports = router