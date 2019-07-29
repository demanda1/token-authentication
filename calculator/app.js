const express=require('express')
const server=express();
const parser=require('body-parser');
const cors=require('cors')
const calculator=require('./calculator')

server.use(cors())
server.use(parser.json());

server.use('/calci',calculator);


server.listen(9999,()=>{
    console.log("Server Strted at 9999")
})