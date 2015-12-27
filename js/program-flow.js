"use strict"
var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");
console.log(items);

try{
	for (var i = 0; i < items.length; i++) {
		
	items[i].addEventListener("click", editItem);		
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", updateItemOnEnter);
}

}catch(e){
	document.write("Error: Cannot click since " + e.message + "<br/>");
	// console.log(e);
}

function editItem (){
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
}

function updateItem (){
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function updateItemOnEnter (event){
	if(event.which === 13) {
		updateItem.call(this);
	}
}


// function celebrityName (firstName) {
// 	var nameIntro = "This celebrity is ";

// 	function lastName (theLastName){
// 		return nameIntro + firstName + " " + lastName;
// 	}
// 	return lastName;
// }

// var mjName = celebrityName ("Michael"); 
// mjName ("Jackson");
// console.log(mjName);

var person = {
firstName: "Ankit",
lastName:"Jain",
showFullName: function (){	
	console.log(this.firstName + " " + this.lastName);
	},
}
person.showFullName();

var user = {
	data:[
	{name:"Ankit", Age:29},
	{name:"Nitika", Age:31},
	],

	clickHandler:function  (argument){
		var random = ((Math.random()*2|0) + 1) - 1;
		console.log(this.data[random].name + " " + this.data[random].Age);
	}
}

// $("button").click(user.clickHandler.bind(user));