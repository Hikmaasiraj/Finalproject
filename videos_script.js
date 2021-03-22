


 var countDownDate = new Date("April 6, 2021 15:37:25").getTime();

var runTime = setInterval(function() {

    // Get today's date and time
    var current = new Date().getTime();
      
    
    var timeLeft = countDownDate - current;
      


    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      

    document.getElementById("timer").innerHTML =  days  +  " days " +  hours +  "hours "
    + minutes + "minutes " + seconds + "secendes ";
      
   
    if (timeLeft < 0) {
      clearInterval(runTime);
      document.getElementById("timer").innerHTML = "Times Up!";
    }
  }, 1000);