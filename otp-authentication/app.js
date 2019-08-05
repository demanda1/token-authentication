const express = require("express")
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const otpRoute=require('./routes/otpRoute')

app.use(cors())
app.use(parser.json())

app.use('/register',otpRoute)

const PORT=5000
app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}`)
})