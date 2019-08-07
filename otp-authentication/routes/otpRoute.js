const server=require('express').Router()
const mailclient=require('../services/mailservice')
const mailer=new mailclient()
const mongoclient=require('mongodb').MongoClient
let otpfinal;

server.post('/send',(req,res)=>{

    console.log("happy")
    if(req.body.uname!=undefined && req.body.uemail!=undefined){
        console.log("1")
        var currentdate = new Date();
         time=currentdate.getTime()
        data={
            id:1,
            name:req.body.uname,
            email:req.body.uemail,
            otp:req.body.otp,
            time:time

        }
        console.log("11")
        mongoclient.connect("mongodb://localhost:27017",(error,connection)=>{
            connection.db("ibm_training").collection("registration").insert(data,(err,res)=>{
                if(err){
                   console.log("registration failed") 
                }
                else{
                    console.log("data-saved")
                    
                }
            })
        })
    mailbody={
        to:req.body.uemail,
        from:'ibmtechtraining007@gmail.com',
        subject:"One Time Password",
        body:`<div>Dear ${req.body.uname},</div>
                 <div>To complete your registration, your One time Password is,</div>
                 <div>${req.body.otp}</div>
                 <div> <a href="http://localhost:5000/register/autovalidate/${req.body.otp}">
                 click here</a> to complete your registration process.</div> `
    }
    res.end(JSON.stringify({
        message:mailer.email(mailbody)
    }))
    }
    else{
        console.log("3")
        res.end(JSON.stringify({
            message:"please enter name and email"
        }))
    }

})
server.get('/autovalidate/:otp',(req,res)=>{
    console.log("autovalidate");
    console.log(req.params.otp);
    var currentdate = new Date();
    otpfinal=req.params.otp;
    mongoclient.connect("mongodb://localhost:27017",{ useNewUrlParser: true },(error,connection)=>{
            connection.db("ibm_training").collection("registration").find({otp:req.params.otp},{}).toArray((err,data)=>{
                if(err){
                   console.log("registration failed") 
                }
                else{
                    console.log("data-saved")
                    if((data[0].otp==req.params.otp)&&((currentdate.getTime()-data[0].time)<=120000000))
                    {   
                        
                        path="C:\\Users\\DeepakMandal\\Desktop\\fsdrepo\\ibm-fst-072019\\ibm-fsd-000ggg\\JAVA\\ibm-fst-072019\\nodejs\\otp-authentication"
                        
                        res.sendFile(path+"\\passwordpage.html");
                    }
                    else{
                        console.log(data[0].otp)
                    }
                }
            })
        })
})


server.get('/verify',(req,res)=>{
    console.log("verifyyyyy");
    mongoclient.connect("mongodb://localhost:27017",{ useNewUrlParser: true },(error,connection)=>{
            connection.db("ibm_training").collection("registration").find({}).toArray((err,data)=>{
                if(err){
                   console.log("registration failed") 
                }
                else{
                    console.log("data-saved")
                     res.end(JSON.stringify({
                         data:data
                     }))
                }
            })
        })
})

server.get('/update/:email/:pass',(req,res)=>{
    console.log(req.params.email)
    console.log(req.params.pass)
    mongoclient.connect("mongodb://localhost:27017",{ useNewUrlParser: true },(error,connection)=>{
    connection.db("ibm_training").collection("registration").update({email:req.params.email},{$set: {pass:req.params.pass}, $unset:{otp:""}},{upsert:true})
        res.end()
})
})

server.get('/updatedirect/:pass',(req,res)=>{
    console.log(req.params.pass)
    mongoclient.connect("mongodb://localhost:27017",{ useNewUrlParser: true },(error,connection)=>{
    connection.db("ibm_training").collection("registration").updateMany({otp:otpfinal},{$set: {pass:req.params.pass}, $unset:{otp:"", time:""}},{upsert:true})
    res.end()
})
})

server.get('/reset/:email/:text/:time',(req,res)=>{
    console.log(req.params.email)
    console.log(req.params.text)
    mongoclient.connect("mongodb://localhost:27017",{ useNewUrlParser: true },(error,connection)=>{
    connection.db("ibm_training").collection("registration").updateMany({email:req.params.email},{$set: {otp:req.params.text, time:req.params.time}},{upsert:true})
    mailbody={
        to:req.params.email,
        from:"deepakmandal8796@gmail.com",
        subject:"Reset OTP",
        body:`<div>New OTP is ${req.params.text}</div>`
    }
    res.end(JSON.stringify({
        message:mailer.email(mailbody)
    }))
})
})

module.exports=server