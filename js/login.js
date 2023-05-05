let BASE_URL='http://localhost:8080/hms/';
let login=document.getElementById("login")
login.onclick = async (e) => {
    e.preventDefault();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    user = {
        username:email,
        password:password
    }
    let data=JSON.stringify(user);
    let options={
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:data
    }
    let response= await fetch(`${BASE_URL}login`,options);
    if(response.status==200){
        console.log("inside response")
        let res= await response.json();
        console.log(res.token)
        localStorage.setItem("token","Bearer "+res.token);
        localStorage.setItem("username",res.user.email);
        window.location.href="admin.html"
    }
    console.log("leaving page")
}