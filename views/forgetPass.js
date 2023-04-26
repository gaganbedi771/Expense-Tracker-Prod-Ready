function passReset(e){
    e.preventDefault();
    const email=e.target.email.value;
    axios.post("http://13.233.174.100:2000/password/forgotpassword ",{email:email})
    .then((result)=>{
        window.alert("Reset link sent, please check email");
    })
    .catch(err=>{
        console.log(err)
        throw new Error("Failed to send reset link");
    })
}