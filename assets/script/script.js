/**
 * script for the countdown
 */

 const countdown = () => {
    const countDate = new Date ("Mars 13, 2023 16:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // counting time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate day
    const showDay = Math.floor(gap / day);
    const showHour = Math.floor ((gap % day) / hour)
    const showMin = Math.floor ((gap % hour) / minute)
    const showSec = Math.floor ((gap % minute) / second)

    document.querySelector(".day").innerText = showDay;
    document.querySelector(".hour").innerText = showHour;
    document.querySelector(".min").innerText = showMin;
    document.querySelector(".secs").innerText = showSec;
};

countdown();


// const countDown = new Date("Mars 13, 2023 16:00:00").getTime();

// const x = setInterval(function() {
//     const now = new Date().getTime();
    
//     const distance = countDown - now;

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const sec = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("time-left").innerHTML = days + "d" + hours +"h" + min + "m" + sec + "s"

// },1000);