const routes=require('express').Router();
const UserService=require('../services/user.service')
const userService=new UserService();
const UserConstants= require('../utils/utils').UserConstants;

routes.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message: UserConstants.messages.userServiceStatus
    })
})

routes.get('/',(rq,rs)=>{
    userService.fetchUsers((users)=>{
        rs.status(200).json({
            message:'User Fetched',
            users:users
        })
    })
})

routes.post('/add',((rq,rs)=>{
    userService.add(rq.body,(err,result)=>{
        if(err){
            rs.status(400).json({
                message:'Unable to process the request'
            })
        }
        else{
            rs.status(200).json({
               message:'User created Successfully',
               result:result 
            })
        }
    })
}))

routes.get('/update/:id',((rq,rs)=>{
    console.log(rq.params.id)
    userService.update(rq.params.id,
        /*(err,result)=>{
        if(err){
            rs.status(400).json({
                message:'Unable to process the request'
            })
        }
        else{
            rs.status(200).json({
               message:'User updated Successfully',
               result:result 
            })
        }
    }*/)
}))

module.exports=routes