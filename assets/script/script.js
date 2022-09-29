/**
 * script for the countdown
 */

const countDown = new Date("Mars 13, 2023 16:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    
    const distance = countDown - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time-left").innerHTML = days + "d" + hours +"h" + min + "m" + sec + "s"

},1000);