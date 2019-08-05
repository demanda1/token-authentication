const mail=require('nodemailer')

class emailer{
    constructor(){
        this.smtpSetup = {
            service :"gmail",
            auth:{
                user:"ibmtechtraining007@gmail.com",
                pass:'India@786'
            }
        }
        this.mailer=mail.createTransport(this.smtpSetup);
    }
    email(userObj){
        this.mailer.sendMail({
            from:userObj.from,
            to:userObj.to,
            subject:userObj.subject,
            html:userObj.body
        },(err,response)=>{
            if(err){
                console.log(err);
                alert("Unable to semd mail")
                return ;
            }
            else{
                console.log(response)
                console.log('Email Sent');
                alert("An otp has been send in your given email id")
                return "email sent successfully ";
            }
        })
    }
}

module.exports=emailer 