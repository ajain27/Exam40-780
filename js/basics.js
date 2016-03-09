function todayDate () {
	 var today = new Date();
	 var day = today.getDay();
	 var hours = today.getHours();
	 var hoursIn12 = hours;
	 var morEve = 'AM';
	 if(hoursIn12 > 12 ) {
	 	hoursIn12 = hours - 12;
	 	morEve = "PM";
	 } else if(hoursIn12 = 12){
	 	// hoursIn12 == "00 AM"
	 }
	 var minutes = today.getMinutes();
	 var seconds = today.getSeconds();
	 var weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','friday','Saturday'];
	 document.getElementById("date").innerHTML = "Today is " +  weekDay[day] + " . ";
	 document.getElementById("time").innerHTML = "Current time is " +  hoursIn12 +  " " + morEve +  " " + ":" +  " " + minutes + ":" +  " " +seconds;

}

function printThis () {
	window.print();
}

function getDate () {
 var today = new Date();
 var date = today.getDate();
 var month = today.getMonth() + 1;
 var year = today.getFullYear();
 var m = month;
 if(m < 10) {
 	m = "0" + m;
 }

 var d = date;
 if(d < 10) {
 	d = "0" + d;
 }

	 document.getElementById("getDate").innerHTML = "Today is " +  m +  "-" + d +  "-" + year ;
}