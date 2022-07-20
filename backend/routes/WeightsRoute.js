const express = require('express')
const {
  getWeights, 
  getWeight, 
  createWeight, 
  deleteWeight, 
  updateWeight
} = require('../controllers/weightsControllers')

const router = express.Router()

// GET all Weights
router.get('/', getWeights)

// GET a single Weight
router.get('/:id', getWeight)

// POST a new Weight
router.post('/', createWeight)

// DELETE a Weight
router.delete('/:id', deleteWeight)

// UPDATE a Weight
router.patch('/:id', updateWeight)

module.exports = router