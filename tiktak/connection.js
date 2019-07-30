const MongoClient = require('mongodb').MongoClient


class Connection{

    fetch(callback){
        MongoClient.connect("mongodb://localhost:27017",{ useNewUrlParser: true },(err,conn)=>{
            conn.db("tictac").collection('game').find({}).toArray((error,data)=>{
                if(!error){
                    console.log(data)
                    callback(data)
                }
            })
        })
    }
    
    add(gamedata){
        MongoClient.connect("mongodb://localhost:27017",{ useNewUrlParser: true },(err,conn)=>{
            conn.db("tictac").collection('game').insert(gamedata)
        })
    }

}

module.exports=Connection