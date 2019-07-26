const server=require('express').Router()
const Validate=require('../Services/validateservices')
const validate=new Validate()


server.get('/',(req,res)=>{
    res.setHeader('content-type','application/json')
    status=validate.authenticate()
    console.log(status)
    if(status=="ok"){
        console.log("allok")
    res.end(JSON.stringify({
        access:"give"
    }))
    }
    else{
    res.end(JSON.stringify({
        access:"deny"
    }))
    }
})

module.exports=server