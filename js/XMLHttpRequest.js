"use strict";	
var xhr = new XMLHttpRequest();
// console.log(xhr);

xhr.open("GET", "../XML.txt", true);

xhr.onreadystatechange = function (argument){
	if(xhr.readyState === 4) {       // This 4 is the code that checks when everything is loaded. 
		var status = xhr.status;
		if((status >= 200 && status < 300) || status === 300){
			console.log(status);
			console.log(xhr.responseText);			
		} else {
			console.log("Something Bad Happened"); 	
		}

	}
}
// xhr.send(null);


var getRequestBody = function (argument){
	var form = document.getElementById("myForm");
	values = [];

	for (var i = 0, l = form.elements.length; i < l; i++) {
		var el = form.elements[i], // form has a property called elemets which has all the elements in the form 
		name = encodeURIComponenet(el.name), // We need to encode to pass these values to the URL
		value = encodeURIComponenet(el.value), // same 
		complete = name + "= " + value;
		values.push(complete);
	};
	return values.join("&");
	alert("This is it");
}



// console.log(xhr.responseText);