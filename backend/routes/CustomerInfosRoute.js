const express = require('express')
const {
  getCustomerInfos, 
  getCustomerInfo, 
  createCustomerInfo, 
  deleteCustomerInfo, 
  updateCustomerInfo
} = require('../controllers/customerInfosControllers')

const router = express.Router()

// GET all CustomerInfos
router.get('/', getCustomerInfos)

// GET a single CustomerInfo
router.get('/:id', getCustomerInfo)

// POST a new CustomerInfo
router.post('/', createCustomerInfo)

// DELETE a CustomerInfo
router.delete('/:id', deleteCustomerInfo)

// UPDATE a CustomerInfo
router.patch('/:id', updateCustomerInfo)

module.exports = router