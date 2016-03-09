function todayDate () {
	 var today = new Date();
	 var day = today.getDay();
	 var hours = today.getHours();
	 var hoursIn12 = hours;
	 var morEve = 'AM';
	 if(hoursIn12 >=12 ) {
	 	hoursIn12 = hours - 12;
	 	morEve = "PM";
	 }
	 var minutes = today.getMinutes();
	 var seconds = today.getSeconds();
	 var weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','friday','Saturday'];
	 document.getElementById("date").innerHTML = "Today is " +  weekDay[day] + " . ";
	 document.getElementById("time").innerHTML = "Current time is " +  hoursIn12 +  " " + morEve +  " " + ":" +  " " + minutes + ":" +  " " +seconds;

}