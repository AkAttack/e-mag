const express = require('express')
const {
  getQuotations, 
  getQuotation, 
  createQuotation, 
  deleteQuotation, 
  updateQuotation
} = require('../controllers/quotationsControllers')

const router = express.Router()

// GET all Quotations
router.get('/', getQuotations)

// GET a single Quotation
router.get('/:id', getQuotation)

// POST a new Quotation
router.post('/', createQuotation)

// DELETE a Quotation
router.delete('/:id', deleteQuotation)

// UPDATE a Quotation
router.patch('/:id', updateQuotation)

module.exports = router