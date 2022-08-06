const express = require("express")
const app = express()
const mongoose = require("mongoose")
const pdf = require('html-pdf');
const cors = require("cors")

const adminvarsRoutes = require("./routes/AdminVarsRoute")
const customerInfosRoutes = require("./routes/CustomerInfosRoute")
const customsRoutes = require("./routes/CustomsRoute")
const invoicesRoutes = require("./routes/InvoicesRoute")
const orderitemsRoutes = require("./routes/OrderItemsRoute")
const quotationsRoutes = require("./routes/QuotationsRoute")
const usersRoutes = require("./routes/UsersRoute")
const weightsRoutes = require("./routes/WeightsRoute")

const styleSheet = require("./documents/styles")
const pdfTemplate = require('./documents/index');

const URI =  "mongodb+srv://admin:admin@cluster-e-mag.ul4jqdy.mongodb.net/emag?retryWrites=true&w=majority"

app.use(cors())

app.use(express.json()) //needed for req.body reading

//routes for adminVars
app.use("/api/adminvars", adminvarsRoutes)

//routes for customerInfos
app.use("/api/customerInfos", customerInfosRoutes)

//routes for customs
app.use("/api/customs", customsRoutes)

//routes for invoices
app.use("/api/invoices", invoicesRoutes)

//routes for orderitems
app.use("/api/orderitems", orderitemsRoutes)

//routes for quotations
app.use("/api/quotations", quotationsRoutes)

//routes for users
app.use("/api/users", usersRoutes)

//routes for weights
app.use("/api/weights", weightsRoutes)

//to send info for PDF Creation
app.post('/api/create-pdf', (req, res) => {
  console.log("Creating PDF...")
  pdf.create(pdfTemplate(req.body, styleSheet), {}).toFile('result.pdf', (err) => {
      if(err) {
          res.send(Promise.reject());
      }
      console.log("PDF Processed")
      res.send(Promise.resolve());
  });
});

//to get Created PDF
app.get('/api/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})


mongoose.connect(URI)
  .then(() => {
    app.listen("3001", () => console.log("listening on Port: 3001"))
  })
  .catch(err => console.log(err))
  

