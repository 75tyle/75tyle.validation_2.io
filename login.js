$(".login-form").hide();
$(".login").css("bakcground","none");

$(".login").click(function(){
    $(".signup-form").hide()
    $(".login-form").show()
    $(".signup").css("backgorund","none");
    $(".login").css("backgorund","#fff");
});

$(".signup").click(function(){
    $(".login-form").hide()
    $(".signup-form").show()
    $(".login").css("backgorund","none");
    $(".signup").css("backgorund","#fff");
});

$(".signup_btn").click(function(){
    var check_email = false
    var check_username = false
    var check_pass = false
  var email =  $(".input_email").val();
   var username = $(".input_username").val();
   var password = $(".input_pass").val();
   var data={
    email:email,
    username: username,
    password:password
   }
   console.log(data)
   if (IsEmail(data.email)){
    $(".input_email").css("border","2px solid green");
    check_email = true
   }else{
    $(".input_email").css("border","2px solid red");
   }

   if(data.password.length > 6){
    $(".input_pass").css("border","2px solid green");
    check_pass = true
   }else{
    $(".input_pass").css("border","2px solid red");
   }
   
   if(data.username.length > 6){
    $(".input_username").css("border","2px solid green");
    check_username = true
}else{
 $(".input_username").css("border","2px solid red");
}

if(check_email&&check_username&&check_pass){
    console.log("succes")
    localStorage.setItem("email",data.email)
    localStorage.setItem("password",data.password)
    $(".signup-form").hide()
    $(".login-form").show()
    $(".signup").css("backgorund","none");
    $(".login").css("backgorund","#fff");
}else{
    console.log("unsucces")
}
   
});
$(".login_btn").click(function(){
    
    var email = $('.email_input').val()
    var password = $('.pass_input').val()
    var signup_data = {
    email:localStorage.getItem("email"),
    password:localStorage.getItem("password")
    }

    if(email == signup_data.email && password == signup_data.password){
        console.log('succes')
        window.location.href = "http://127.0.0.1:5500/first.html"
    }else{
        console.log('unscucces')
    }
})
function IsEmail(email) {
    var regex =
/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }
}
