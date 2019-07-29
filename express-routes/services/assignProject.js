const assignment=require('../db/assignment').assignment;
const tempuser=require('../db/tempdata').tempdata;
class AssignProject{
    assign(details){
        assignment.push(details);
        var i=-1;
        tempuser.forEach((u)=>{
            i++;
            console.log(i);
            console.log(details)
            if(u.name==details.uname){
                tempuser.splice(i,1)
                console.log(tempuser)
            }
        })
        console.log(assignment)
    }
}

module.exports.AssignProject=AssignProject