const token=require('../db/tokens')
const jwt=require('jsonwebtoken')
const key=require('../db/key')
class validate{
  constructor(){
      this.token=token
  }
  authenticate(){
      let status="notok"
      console.log("reached")
      console.log(token[0].token)
    let isValid=false
    try{
        isValid = jwt.verify(token[0].token,key);
        console.log(isValid.desig)
        if(isValid.desig=="manager"){
            status="ok"
        }
    }catch(error){
        console.error(error);
    }   
    return status;
  }
}


module.exports=validate