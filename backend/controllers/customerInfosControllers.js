const CustomerInfo = require("../models/CustomerInfos")

//get All CustomerInfos 
const getCustomerInfos = async (req, res) => {
  const CustomerInfos = await CustomerInfo.find({}).sort({createdAt: -1})

  res.status(200).json(CustomerInfos)
}


//get Single CustomerInfos
const getCustomerInfo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such CustomerInfo'})
  }

  const CustomerInfo = await CustomerInfo.findById(id)

  if (!CustomerInfo) {
    return res.status(404).json({error: 'No such CustomerInfo'})
  }

  res.status(200).json(CustomerInfo)
}


//Create New CustomerInfos
const createCustomerInfo = async (req, res) => {
  //add doc to db
  try {
    const custInfo = await CustomerInfo.create(req.body)
    res.json(custInfo)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete a CustomerInfos
const deleteCustomerInfo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such CustomerInfo'})
  }

  const CustomerInfo = await CustomerInfo.findOneAndDelete({_id: id})

  if(!CustomerInfo) {
    return res.status(400).json({error: 'No such CustomerInfo'})
  }

  res.status(200).json(CustomerInfo)
}


//update a CustomerInfos
const updateCustomerInfo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such CustomerInfo'})
  }

  const CustomerInfo = await CustomerInfo.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!CustomerInfo) {
    return res.status(400).json({error: 'No such CustomerInfo'})
  }

  res.status(200).json(CustomerInfo)
}

module.exports = {
  getCustomerInfos,
  getCustomerInfo,
  createCustomerInfo,
  deleteCustomerInfo,
  updateCustomerInfo
}