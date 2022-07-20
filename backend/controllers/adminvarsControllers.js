const mongoose = require("mongoose")
const AdminVar = require("../models/AdminVars")

//get All AdminVars 
const getAdminVars = async (req, res) => {
  const AdminVars = await AdminVar.find({}).sort({createdAt: -1})

  res.status(200).json(AdminVars)
}


//get Single AdminVars
const getAdminVar = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such AdminVar'})
  }

  const AdminVars = await AdminVar.findById(id)

  if (!AdminVars) {
    return res.status(404).json({error: 'No such AdminVar'})
  }

  res.status(200).json(AdminVars)
}


//Create New AdminVars
const createAdminVar = async (req, res) => {
  //add doc to db
  try {
    const custInfo = await AdminVar.create(req.body)
    res.json(custInfo)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete a AdminVars
const deleteAdminVar = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such AdminVar'})
  }

  const AdminVars = await AdminVar.findOneAndDelete({_id: id})

  if(!AdminVars) {
    return res.status(400).json({error: 'No such AdminVar'})
  }

  res.status(200).json(AdminVars)
}


//update a AdminVars
const updateAdminVar = async (req, res) => {
  const { id } = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such AdminVar'})
  }

  const AdminVars = await AdminVar.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!AdminVars) {
    return res.status(400).json({error: 'No such AdminVar'})
  }

  res.status(200).json(AdminVars)
}

module.exports = {
  getAdminVars,
  getAdminVar,
  createAdminVar,
  deleteAdminVar,
  updateAdminVar
}