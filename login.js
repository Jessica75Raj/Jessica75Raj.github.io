function validate(){
    var email= document.getElementById("1").value;
    var pswrd= document.getElementById("2").value;
    if(email=="j@gmail.com" && pswrd == "U@123"){
        window.location = "https://in.bookmyshow.com" ;
        alert("Login successful");
        return false;
    }
    else{
        alert("Login failed");
    }
}