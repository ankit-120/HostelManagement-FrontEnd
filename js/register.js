let token = localStorage.getItem('token');
if(token==null){
    window.location.href = "admin.html";
}
else{
    let BASE_URL='http://localhost:8080/hms/';
    let submit = document.getElementById("submit");
    submit.onclick = async (e) =>{
        e.preventDefault();
    
        let firstName = document.getElementById("firstName").value;
        let middleName = document.getElementById("middleName").value;
        let lastName = document.getElementById("lastName").value;
        let contact = document.getElementById("contact").value;
        let aadhaarno = document.getElementById("aadhaarno").value;
        let gender = document.getElementById("gender").value;
        let course = document.getElementById("course").value;
        let email = document.getElementById("email").value;
        let street = document.getElementById("street").value;
        let city = document.getElementById("city").value;
        let state = document.getElementById("state").value;
    
        user = {
            firstName : firstName,
            middleName : middleName,
            roll:1234,
            lastName : lastName,
            mobile : contact,
            aadhaar : aadhaarno,
            gender : gender,
            course : course,
            email : email,
            street : street,
            city : city,
            state : state
        };
    
        let data = JSON.stringify(user);
        let options={
            method:'POST',
            headers: {
                'Authorization':token,
                'Content-Type': 'application/json',
              },
            body:data
        }
        let response = await fetch(`${BASE_URL}student/register`,options);
        if(response.status==201){
            let res = await response.json();
            console.log(res);
            window.location.href="admin.html"
        }
    }
}