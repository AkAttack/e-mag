const express = require('express')
const {
  getAdminVars, 
  getAdminVar, 
  createAdminVar, 
  deleteAdminVar, 
  updateAdminVar
} = require('../controllers/adminVarsControllers')

const router = express.Router()

// GET all AdminVars
router.get('/', getAdminVars)

// GET a single AdminVar
router.get('/:id', getAdminVar)

// POST a new AdminVar
router.post('/', createAdminVar)

// DELETE a AdminVar
router.delete('/:id', deleteAdminVar)

// UPDATE a AdminVar
router.patch('/:id', updateAdminVar)

module.exports = router