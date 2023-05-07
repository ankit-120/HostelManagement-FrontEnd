let token=localStorage.getItem("token");
console.log(token)
// if(!token) {
//     console.log("inside if")
//     window.location.href="login.html"
// } else {
    let BASE_URL='http://localhost:8080/hms/';
    let btn=document.getElementById("get")
    let res;
    btn.onclick = async () => {
        let options={
            method:'GET',
            headers: {
                'Authorization':token,
            }
        }
        let response= await fetch(`${BASE_URL}student/`,options);
        if(response.status==200){
            res=await response.json();
            console.log(res);
        } else {
            res= await response.json();
            console.log(res.message)
        }
        console.log(res)
        // localStorage.setItem("data",JSON.stringify(res));
        sessionStorage.setItem("data",JSON.stringify(res));
        window.location.href="getStudent.html";
    }






    console.log("outside")
    let logout=document.getElementById("logout")
    logout.onclick = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location.href="login.html"
    }
// }
