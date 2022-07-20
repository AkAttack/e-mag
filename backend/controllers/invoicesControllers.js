const Invoice = require("../models/Invoices")

//get All Invoices 
const getInvoices = async (req, res) => {
  const Invoices = await Invoice.find({}).sort({createdAt: -1})

  res.status(200).json(Invoices)
}


//get Single Invoices
const getInvoice = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Invoice'})
  }

  const Invoice = await Invoice.findById(id)

  if (!Invoice) {
    return res.status(404).json({error: 'No such Invoice'})
  }

  res.status(200).json(Invoice)
}


//Create New Invoices
const createInvoice = async (req, res) => {
  //add doc to db
  try {
    const custInfo = await Invoice.create(req.body)
    res.json(custInfo)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete a Invoices
const deleteInvoice = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Invoice'})
  }

  const Invoice = await Invoice.findOneAndDelete({_id: id})

  if(!Invoice) {
    return res.status(400).json({error: 'No such Invoice'})
  }

  res.status(200).json(Invoice)
}


//update a Invoices
const updateInvoice = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Invoice'})
  }

  const Invoice = await Invoice.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!Invoice) {
    return res.status(400).json({error: 'No such Invoice'})
  }

  res.status(200).json(Invoice)
}

module.exports = {
  getInvoices,
  getInvoice,
  createInvoice,
  deleteInvoice,
  updateInvoice
}