var $container=document.getElementsByClassName("container")[0];//Getting the container element
var $content=document.getElementById("content");//Getting the content element that contain 2 forms
var $form1=document.getElementById("loginbox");//Form 1
var $form2=document.getElementById("signupbox");//Form 2
var $username=document.forms["signin"]["Username"];//Getting Username in Signin Form
var $password=document.forms["signin"]["password"];//Getting password in Signin form
var $signup=document.getElementById("signup")//Getting the signup button in form 1
var $textvalues=document.getElementById("textvalues");//This element display msg when user authentication is wrong
var $up=document.getElementsByClassName("up");//When User input up username in signup form this msg popup
var $username1=document.forms["signup"]["Username"];//Getting username in Signup
var $password1=document.forms["signup"]["password"];//Getting Password in Signup
var $password11=document.forms["signup"]["re-password"];////Getting Re enter Password in Signup
var $signin=document.getElementById("submit")//getting Sumbit button in Signin form
var $submit1=document.getElementById("submit1");//getting Sigin button in form 2

function changing(){
    $textvalues.innerHTML="";
    $up[0].innerHTML="";
    $up[1].innerHTML="";
    $up[2].innerHTML="";
}

function submitting(){
    if(!localStorage.getItem($username.value)){//check if Username is found or not
              $textvalues.innerHTML="Invalid Username";
              $textvalues.style.color="red";
              $username.focus();
              return false;
    }
    
    else if($password.value!=localStorage.getItem($username.value)){//Check if user enter the right Password
        $textvalues.innerHTML=" Invalid Password "
        $textvalues.style.color="red";
        $password.focus();
        return false;
    }
    return true;
}

function signupPage(){//Signup Form Validation
    if($username1.value.length<8){
        $wrong[0].innerHTML="Username must have minimum 7 character";
        $wrong[0].style.color="red";
        $username1.focus();
        return false;
    }