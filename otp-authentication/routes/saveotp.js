const mongoclient=require('mongodb').MongoClient
const server=require('express').Router()

server.get('/',(req,res,next)=>{
    console.log(json.parse(req.body))
    if(req.body.uname!=undefined && req.body.uemail!=undefined){
        data={
            id:1,
            name:req.body.uname,
            email:req.body.uemail,
            otp:req.body.otp
        }
        console.log("11")
        mongoclient.connect("mongo://localhost:27017",(error,connection)=>{
            connection.db("ibm_training").collection("registration").insert(data,(err,res)=>{
                if(err){
                   console.log("registration failed") 
                }
                else{
                    console.log("data-saved")
                    next()
                }
            })
        })
    }
})

module.exports=server