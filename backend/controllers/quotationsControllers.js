const Quotation = require("../models/Quotations")

//get All Quotations 
const getQuotations = async (req, res) => {
  const Quotations = await Quotation.find({}).sort({createdAt: -1})

  res.status(200).json(Quotations)
}


//get Single Quotations
const getQuotation = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Quotation'})
  }

  const Quotation = await Quotation.findById(id)

  if (!Quotation) {
    return res.status(404).json({error: 'No such Quotation'})
  }

  res.status(200).json(Quotation)
}


//Create New Quotations
const createQuotation = async (req, res) => {
  //add doc to db
  try {
    const custInfo = await Quotation.create(req.body)
    res.json(custInfo)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete a Quotations
const deleteQuotation = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Quotation'})
  }

  const Quotation = await Quotation.findOneAndDelete({_id: id})

  if(!Quotation) {
    return res.status(400).json({error: 'No such Quotation'})
  }

  res.status(200).json(Quotation)
}


//update a Quotations
const updateQuotation = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Quotation'})
  }

  const Quotation = await Quotation.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!Quotation) {
    return res.status(400).json({error: 'No such Quotation'})
  }

  res.status(200).json(Quotation)
}

module.exports = {
  getQuotations,
  getQuotation,
  createQuotation,
  deleteQuotation,
  updateQuotation
}