const users = require('../db/users').users;
const tempuser=require('../db/tempdata').tempdata;
class UserService{
    constructor(){
        this.users = users;
        this.tempuser=tempuser;
    }
    _all(){
        return this.tempuser;
    }
    _add(user){
        this.users.push(user);
        this.tempuser.push(user);
        return this.users;
    }
    _nextId(){
        return this.users.length + 1;
    }
}

module.exports.UserService = UserService;