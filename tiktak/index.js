const express=require('express')
const server=express()
const parse=require('body-parser')
const cors=require('cors')
const Connect=require('./connection')
const connect=new Connect()
server.use(cors())
server.use(parse.json())

server.post('/fetch',(req,res)=>{
    console.log("entered")
    connect.add(req.body)
    res.end()
})

server.get('/',(req,res)=>{
    console.log("pahuch gaye")
    connect.fetch((data)=>{
        res.end(JSON.stringify({
            gamedata:data
        }))
    })
})

const PORT=9999
server.listen(PORT,()=>{
    console.log("server started at port 9999")
})