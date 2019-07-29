const express=require('express');
const server=express();
const parser=require('body-parser');
const cors=require('cors');
const UserConstants=require('./utils/utils').UserConstants;
const userRoutes=require('./routes/users')

server.use(parser.json());
server.use(cors());

server.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message:UserConstants.messages.mainStatus
    })
})

server.use('/api/users',userRoutes);

const PORT=6669;
server.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
})