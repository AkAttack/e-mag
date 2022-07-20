const express = require('express')
const {
  getInvoices, 
  getInvoice, 
  createInvoice, 
  deleteInvoice, 
  updateInvoice
} = require('../controllers/invoicesControllers')

const router = express.Router()

// GET all Invoices
router.get('/', getInvoices)

// GET a single Invoice
router.get('/:id', getInvoice)

// POST a new Invoice
router.post('/', createInvoice)

// DELETE a Invoice
router.delete('/:id', deleteInvoice)

// UPDATE a Invoice
router.patch('/:id', updateInvoice)

module.exports = router