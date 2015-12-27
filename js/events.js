//Java scrip Events 
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var confirm = document.getElementById("inputConfirm");
var sin = document.getElementById("inputSin");

// $('#login').click(function(){

// 	$('#loginForm').load('/html/login.html');

// });

email.addEventListener("click", function (){
	alert("Enter the email");
});

password.addEventListener("mouseenter", function (){
	console.log("Enter a strong password");
});


confirm.addEventListener("blur", function (){
	console.log("Confirm");
});

sin.addEventListener("blur", function (){
	var sinvalue = sin.value;
	var re = /[0-9]|\./;
	if(re.test(sinvalue)){	
		console.log("Yes");
	}else {
		this.style.borderColor = "red";
	}
});
