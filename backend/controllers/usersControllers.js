const User = require("../models/Users")

//get All Users 
const getUsers = async (req, res) => {
  const Users = await User.find({}).sort({createdAt: -1})

  res.status(200).json(Users)
}


//get Single Users
const getUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such User'})
  }

  const User = await User.findById(id)

  if (!User) {
    return res.status(404).json({error: 'No such User'})
  }

  res.status(200).json(User)
}


//Create New Users
const createUser = async (req, res) => {
  //add doc to db
  try {
    const custInfo = await User.create(req.body)
    res.json(custInfo)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete a Users
const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such User'})
  }

  const User = await User.findOneAndDelete({_id: id})

  if(!User) {
    return res.status(400).json({error: 'No such User'})
  }

  res.status(200).json(User)
}


//update a Users
const updateUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such User'})
  }

  const User = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!User) {
    return res.status(400).json({error: 'No such User'})
  }

  res.status(200).json(User)
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser
}