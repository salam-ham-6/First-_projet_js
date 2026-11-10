const email="test@gmail.com"
const password="test123"

var btn = document.getElementById("loginForm")
btn.addEventListener('click',(event)=>{
    event.preventDefault()
    var EmailInput=document.getElementById("email").value
    var PasswordInput=document.getElementById("password").value
    if(email==EmailInput && password==PasswordInput){
        alert("hello again")

    }else{
        console.log("Error")
    }
})