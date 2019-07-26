
function task(){
    url="http://localhost:5678/validate"
    fetch(url).then(res=>res.json()).then(res=>{
        if(res.access=="give"){
            document.location="topsecret.html"
        }
        else{
            document.location="login.html"
            alert("Access denied!. Please login again")
        }
    })
}