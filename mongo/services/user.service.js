const MongoClient=require('mongodb').MongoClient;
const UserConstants=require('../utils/utils').UserConstants;

class UserService{
    fetchUsers(callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('users').find({}).toArray((error,users)=>{
                if(!error){
                    console.log(users);
                    callback(users);
                }
            })
        })
}


add(_user,callback){
    MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
        conn.db(UserConstants.mongo.db).collection('users').insert(_user,(err,response)=>{
            callback(err,response);
        })
    })      
}

update(id){
    console.log(id)
    MongoClient.connect(UserConstants.mongo.url,{ useNewUrlParser: true },(err,conn)=>{
        conn.db(UserConstants.mongo.db).collection('users').updateOne({id:id},{$set:{id:3}})
    })
}

}

module.exports=UserService
