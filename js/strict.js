"use strict";
a = 10; // throws an error that a is not defined since we are using strict mode. 
function add (){
	var a = 5; 
	var b = 5;
	var c = a + b;
	console.log(c);
}

