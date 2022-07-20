const Custom = require("../models/Customs")

//get All Customs 
const getCustoms = async (req, res) => {
  const Customs = await Custom.find({}).sort({createdAt: -1})

  res.status(200).json(Customs)
}


//get Single Customs
const getCustom = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Custom'})
  }

  const Custom = await Custom.findById(id)

  if (!Custom) {
    return res.status(404).json({error: 'No such Custom'})
  }

  res.status(200).json(Custom)
}


//Create New Customs
const createCustom = async (req, res) => {
  //add doc to db
  try {
    const custInfo = await Custom.create(req.body)
    res.json(custInfo)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete a Customs
const deleteCustom = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Custom'})
  }

  const Custom = await Custom.findOneAndDelete({_id: id})

  if(!Custom) {
    return res.status(400).json({error: 'No such Custom'})
  }

  res.status(200).json(Custom)
}


//update a Customs
const updateCustom = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Custom'})
  }

  const Custom = await Custom.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!Custom) {
    return res.status(400).json({error: 'No such Custom'})
  }

  res.status(200).json(Custom)
}

module.exports = {
  getCustoms,
  getCustom,
  createCustom,
  deleteCustom,
  updateCustom
}