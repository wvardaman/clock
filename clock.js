function updateTime() {
  //get parts of current time
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
   //add leading zero's to minutes & seconds
  if (minutes < 10) {
    minutes = '0'  + minutes;  
  }
   if (seconds < 10) {
    seconds = '0' + seconds;  
  }
  
  //get time of day am or pm
  if (hours >= 12 && hours < 24){
    var timeOfDay = 'pm';
  }
  else {
    var timeOfDay = 'am';
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  
  //splice parts together
  var currentTime = hours + ":" + minutes + ":" +  seconds + " " + "<span>" + timeOfDay + "</span>";
  //get the clock div
  
  var myClock = document.getElementById("clock");
  
  // write the currentTime to clock div
  myClock.innerHTML = "<p>" + currentTime + "</p>";
  
 
}