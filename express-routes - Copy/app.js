const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const authenticate = require('./services/security').authenticate;
const userRoutes = require('./apis/users').userRoutes;
const projectRoutes = require('./apis/projects').projectRoutes;
const setContentHeader = require('./services/utils').setContentHeader;
const assignroute=require('./uassign').uassign;
const assign=require('./db/assignment').assignment;
// apply json parser
server.use(parser.json());
// apply cors
server.use(cors());

server.get('/status',(req,res)=>{
    setContentHeader(res);
    res.json({message:"Server is Running....."})
});

// un authorized access api
server.get('/unauthorize',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        message : "Oops! you seem to have tried with Invalid access or no access"
    }));
})

server.get('/project/:pname',(req,res)=>{
    info=[];
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('content-type','application/json')
    assign.forEach((u)=>{
        if(req.params.pname==u.pname){
            info.push(u)
        }
    })
    res.end(JSON.stringify(info))
})

// enable authentication 
server.use('/users',(req,res,next)=>{
    authenticate(req,res,next);
});

server.use('/projects',(req,res,next)=>{
    authenticate(req,res,next);
});

// add routes to server
server.use('/users',userRoutes);
server.use('/projects',projectRoutes);

server.use('/uassign',assignroute);


// PORT Binding
server.listen(1269,()=>{
    console.log('Server started at 1269');
});
