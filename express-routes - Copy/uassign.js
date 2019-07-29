const server=require('express').Router();
const assignProject=require('./services/assignProject').AssignProject
const obj=new assignProject();

server.post('/assign',(req,res)=>{
    res.setHeader('content-type','application/json')
    res.end(JSON.stringify({
        projectdetail: obj.assign(req.body)
    }),res.redirect('/project.html'))
})


module.exports.uassign=server