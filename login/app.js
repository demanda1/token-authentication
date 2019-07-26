const express=require('express')
const app=express()
const cors=require('cors')
const parser= require('body-parser')
const loginRoute=require('./Route/loginRoute')
const authenticate=require('./Services/securityservices')
const path=require('path')
const validate=require('./Route/validateRoute')

app.use(cors())
app.use(parser.json())

/*app.use('/login',(req,res,next)=>{
    validate(req,res,next)
})*/

app.use('/validate',validate)

app.get('/profile',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("reached")
})

app.use('/login',loginRoute)

app.listen(5678,()=>{
    console.log("server started at 5678")
})