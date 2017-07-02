var stopDate = Date.parse("2017-07-15");

function getDateDifferenz() {
    var timeNow = new Date();
    var DateDifferenz = stopDate - timeNow;
    function get(DateDifferenz) {
        return {
            "seconds": Math.floor(DateDifferenz / 1000),
            "minutes": Math.floor(DateDifferenz / 1000 / 60), 
            "hours":   Math.floor(DateDifferenz / 1000 / 60 / 60),
            "days":    Math.floor(DateDifferenz / 1000 / 60 / 60 / 24)
        };   
    }
    var seconds = get(DateDifferenz).seconds % 60; // in 1 minute
    var minutes = get(DateDifferenz).minutes % 60; // in 1 hour
    var hours   = get(DateDifferenz).hours   % 24; // in 1 day
    var days    = get(DateDifferenz).days;
    return {
        "Total": DateDifferenz, 
        "seconds": seconds,
        "minutes": minutes,
        "hours": hours,
        "days": days
    };
}

function initTimer(id) {
    var timer = document.getElementById(id);
    var timerRepeat = setInterval(function() {
        var get = getDateDifferenz();
        timer.innerHTML = get.days    + " days "   +
                          get.hours   + " hours "  +
                          get.minutes + " minutes "+
                          get.seconds + " seconds "  
        if (get.Total <= 0) {
            clearInterval(timerRepeat);
        }
    }, 1000);
}

initTimer("timer");
