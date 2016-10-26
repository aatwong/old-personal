//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

//Returns the appropriate greeting based on time of day
function Greet() {
  var date = new Date();
  var hour = date.getHours();
  if (hour >= 18) {
    greeting = "Good evening";
  } else if (hour >= 12) {
    greeting = "Good afternoon";
  } else if (hour >= 3) {
    greeting = "Good morning";
  } else {
    greeting = "Hello";
  }
  document.write(greeting);
}
