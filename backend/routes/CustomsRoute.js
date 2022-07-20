const express = require('express')
const {
  getCustoms, 
  getCustom, 
  createCustom, 
  deleteCustom, 
  updateCustom
} = require('../controllers/customsControllers')

const router = express.Router()

// GET all Customs
router.get('/', getCustoms)

// GET a single Custom
router.get('/:id', getCustom)

// POST a new Custom
router.post('/', createCustom)

// DELETE a Custom
router.delete('/:id', deleteCustom)

// UPDATE a Custom
router.patch('/:id', updateCustom)

module.exports = router