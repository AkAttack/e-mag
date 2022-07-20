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
router.get('/adminvars', getAdminVars)

// GET a single AdminVar
router.get('/adminvars/:id', getAdminVar)

// POST a new AdminVar
router.post('/adminvars/', createAdminVar)

// DELETE a AdminVar
router.delete('/adminvars/:id', deleteAdminVar)

// UPDATE a AdminVar
router.patch('/adminvars:id', updateAdminVar)

module.exports = router