function login(){
    id=document.getElementById('userid').value
    pass=document.getElementById('password').value
    url=`http://localhost:5678/login/signin/${id}/${pass}`
    fetch(url)
    document.location="profilepage.html"
}