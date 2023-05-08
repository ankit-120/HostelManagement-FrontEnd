let token = localStorage.getItem('token');
let BASE_URL='http://localhost:8080/hms/';
let submit = document.getElementById("submit");


//setting user name at navbar
document.getElementById("userSpan").innerText = localStorage.getItem("username");



//back button
let backBtn = document.getElementById("back");
backBtn.onclick = () =>{
    window.location.href = "admin.html"
}


submit.onclick = async (e) =>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    user={
        fullName : name,
        email : email,
        password : password
    };

    let data = JSON.stringify(user);
    let options={
        method:'POST',
        headers:{
            'Authorization':token,
            'Content-Type': 'application/json',
          },
        body:data
    }

    let response = await fetch(`${BASE_URL}admin/add`,options);
    if(response.status==201){
        let res = await response.json();
        console.log(res);
        window.location.href="admin.html";
    }else{
        window.location.href = "addAdmin.html";
    }
}