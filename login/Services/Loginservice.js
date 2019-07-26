const employee=require('../db/employee')
const key=require('../db/key')
const jwt=require('jsonwebtoken')
const tokens=require('../db/tokens')

class Login{
    constructor(){
        this.employee=employee
    }
    signin(id, pass){
        let token=""
       return this.employee.find((u)=>{
            if(u.id==id && u.password==pass){
               let temp={
                    id:u.id,
                    token:this.tokenGenerate(u)
                }
                tokens.push(temp)
                console.log(tokens)
                return true;
             }
        })
    }

    tokenGenerate(user){
        let data={
            id:user.id,
            desig:user.designation
        }
        let token=jwt.sign(data,key,{ expiresIn:"15m"})
        return token;
    }
}

module.exports=Login