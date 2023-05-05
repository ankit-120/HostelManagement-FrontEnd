let token=localStorage.getItem("token");
console.log(token)
if(!token) {
    console.log("inside if")
    window.location.href="login.html"
} else {
    let BASE_URL='http://localhost:8080/hms/';
    // let btn=document.getElementById("get")
    // btn.onclick = async () => {
    //     let options={
    //         method:'GET',
    //         headers: {
    //             'Authorization':'token',
    //         }
    //     }
    //     let response= await fetch(`${BASE_URL}student/`,options);
    //     if(response.status==200){
    //         let res=await response.json();
    //         console.log(res);
    //     } else {
    //         let res= await response.json();
    //         console.log(res.message)
    //     }
    // }
    console.log("outside")
    let logout=document.getElementById("logout")
    logout.onclick = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location.href="login.html"
    }
}
