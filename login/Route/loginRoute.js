const server=require('express').Router()
const Login=require('../Services/Loginservice')
const login=new Login()

server.get('/signin/:id/:pass',(req,res)=>{
    console.log("entered")
    res.setHeader('content-type','application/json')
    detail=login.signin(req.params.id,req.params.pass)
    if(detail!=undefined){
        res.redirect('/profile')
    }
    else{
        res.redirect('/unauthorize')
    }
})

module.exports=server