const express = require("express")
const app = express()
const mongoose = require("mongoose")

const URI = "mongodb+srv://admin:admin@cluster-e-mag.ul4jqdy.mongodb.net/emag?retryWrites=true&w=majority"

mongoose.connect(URI)

app.listen(3001, () => console.log("listening on port 3001"))

