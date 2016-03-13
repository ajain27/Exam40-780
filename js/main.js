"use strict";
 window.onload = draw;

function draw() {
	var canvas = document.getElementById("canvas1"); // Getting the HTML element 
	var ctx = canvas.getContext('2d'); // getting the context to draw a 2 d object
	// ctx.shadowBlur=20;
	// ctx.shadowColor = "black"
	// ctx.fillStyle="red"; // fillStyle (r, g, b, alpha)
	// ctx.fillRect(20,20,100,80);	// fillRect (X, Y, width, height);
	// ctx.shadowOffsetX=20;

	// ctx.shadowBlur=20;
	// ctx.shadowColor="black";
	// ctx.fillStyle="red";
	// ctx.fillRect(20,20,100,80);
	ctx.lineWidth = 10;
	ctx.lineCap = "round";
	ctx.beginPath();
	ctx.moveTo(150,150);
	ctx.lineTo(240,240);
	ctx.lineTo(250,40);
	ctx.stroke();
	
	};

 	window.onload = load;
	function load(){
		var getValue = localStorage.getItem("text");
		if(getValue) {
			console.log(getValue);
			document.getElementById("inputField").value = getValue;
		}

	 }

	function save() {
		var val = document.getElementById("inputField").value;
		sessionStorage.setItem("username", val);
	}


	 function deleteText(){
	 	document.getElementById("inputField").value = ' ';
	 	sessionStorage.removeItem("username");
	 	
	 }

	var x = document.getElementById("demo");

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition, showError);
	    } else {
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }
	}

	function showPosition(position) {
	    var latlon = position.coords.latitude + "," + position.coords.longitude;

	    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
	    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
	}

	function showError(error) {
	    switch(error.code) {
	        case error.PERMISSION_DENIED:
	            x.innerHTML = "User denied the request for Geolocation."
	            break;
	        case error.POSITION_UNAVAILABLE:
	            x.innerHTML = "Location information is unavailable."
	            break;
	        case error.TIMEOUT:
	            x.innerHTML = "The request to get user location timed out."
	            break;
	        case error.UNKNOWN_ERROR:
	            x.innerHTML = "An unknown error occurred."
	            break;
	    }
	}



// var time = 0;
// while(time < 10){
// 	console.log('This is my time' + " " +  time);
// 	time ++;
// }