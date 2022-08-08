const mongoose = require("mongoose")
const QuotationsModel = require("../models/Quotations")

//get All Quotations 
const getQuotations = async (req, res) => {
  const Quotations = await QuotationsModel.find({}).sort({createdAt: -1})

  res.status(200).json(Quotations)
}


//get Single Quotations
const getQuotation = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Quotation'})
  }

  const Quotations = await QuotationsModel.findById(id)

  if (!Quotations) {
    return res.status(404).json({error: 'No such Quotation'})
  }

  res.status(200).json(Quotations)
}


//Create New Quotations
const createQuotation = async (req, res) => {
  //add doc to db
  try {
    const Quotations = await QuotationsModel.create(req.body)
    res.json(Quotations)
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

  const Quotations = await QuotationsModel.findOneAndDelete({_id: id})

  if(!Quotations) {
    return res.status(400).json({error: 'No such Quotation'})
  }

  res.status(200).json(Quotations)
}


//update a Quotations
const updateQuotation = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Quotation'})
  }

  const Quotations = await QuotationsModel.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!Quotations) {
    return res.status(400).json({error: 'No such Quotation'})
  }

  res.status(200).json(Quotations)
}

module.exports = {
  getQuotations,
  getQuotation,
  createQuotation,
  deleteQuotation,
  updateQuotation
}