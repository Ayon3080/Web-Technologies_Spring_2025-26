function collect_data(){
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;


    if(!email){
        document.getElementById("emailErr").innerHTML="Email is required";
    }
    else if(!email.include("@")){
        document.getElementById("emailErr").innerHTML="Email must contain @";
 
    }
 
    else{
        document.getElementById("emailErr").innerHTML="";
 
 
    }


    
 
    if(!password){
        document.getElementById("passwordErr").innerHTML="Password is required";
    }
     else if(password.length<6){
         document.getElementById("passwordErr").innerHTML="Password must be at least 6 char";
 
 
     }
     else if(!password.include("#")){
        document.getElementById("passwordErr").innerHTML="Password must contain #";
 
    }
 
    else{
        document.getElementById("PasswordErr").innerHTML="";
 
    }
    var wrongCount=0;
    if(!vaild){
    wrongCount++;
document.getElementById("Count").innerHTML="Wrong Submit";
 
}
   
    return false;
 
}
/*var wrongCount=0;
if(!vaild){
    wrongCount++;
document.getElementById("Count").innerHTML="Wrong Submit";
 
}*/
function getEmail(){
    const email= document.getElementById("email").value;
    console.log(email);
}
function getPassword(){
    const password= document.getElementById("password").value;
    console.log(password);
}