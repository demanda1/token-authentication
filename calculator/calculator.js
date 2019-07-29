const server = require('express').Router();

server.post('/',(req,res)=>{
    res.setHeader('content-type','application/json');
    console.log("happy")
    if(req.body.operand=="+"){
        res.end(JSON.stringify({
            result: parseInt(req.body.num1)+ parseInt(req.body.num2)
        }))
    }
    if(req.body.operand=="-"){
        res.end(JSON.stringify({
            result: parseInt(req.body.num1)- parseInt(req.body.num2)
        }))
    }
    if(req.body.operand=="*"){
        res.end(JSON.stringify({
            result: parseInt(req.body.num1)* parseInt(req.body.num2)
        }))
    }
    if(req.params.operand=="div"){
        res.end(JSON.stringify({
            result: parseInt(req.body.num1)/ parseInt(req.body.num2)
        }))
    }
})

module.exports=server