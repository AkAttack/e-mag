const Weight = require("../models/Weights")

//get All Weights 
const getWeights = async (req, res) => {
  const Weights = await Weight.find({}).sort({createdAt: -1})

  res.status(200).json(Weights)
}


//get Single Weights
const getWeight = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Weight'})
  }

  const Weight = await Weight.findById(id)

  if (!Weight) {
    return res.status(404).json({error: 'No such Weight'})
  }

  res.status(200).json(Weight)
}


//Create New Weights
const createWeight = async (req, res) => {
  //add doc to db
  try {
    const custInfo = await Weight.create(req.body)
    res.json(custInfo)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete a Weights
const deleteWeight = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Weight'})
  }

  const Weight = await Weight.findOneAndDelete({_id: id})

  if(!Weight) {
    return res.status(400).json({error: 'No such Weight'})
  }

  res.status(200).json(Weight)
}


//update a Weights
const updateWeight = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Weight'})
  }

  const Weight = await Weight.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!Weight) {
    return res.status(400).json({error: 'No such Weight'})
  }

  res.status(200).json(Weight)
}

module.exports = {
  getWeights,
  getWeight,
  createWeight,
  deleteWeight,
  updateWeight
}