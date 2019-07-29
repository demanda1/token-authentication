function check(){
    let num1=parseInt(document.getElementById('num1').value)
    let val= document.getElementById('operand').value
    let num2=parseInt(document.getElementById('num2').value)
    console.log(num1)
    console.log(num2)
    console.log(val)
    url="http://localhost:9999/calci/"
    fetch(url,{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:{
            num1:num1,
            operand:val,
            num2:num2
        }}).then(res=>json()).then(res=>{
            console.log(res)
            document.getElementById('result').value=res.result
        })

}