var action = {
    status: "enable",
    act: function (start, waiting) {
        waiting();
        start();
    }
}


var onWaiting = function () {
    setTimeout(function () { console.log("Waiting...") }, 1000);
    var countdown = 5;
    setInterval(function () {
        if (countdown > 0) {
            console.log(countdown);
            countdown--;
        } else {
            clearInterval(this);
        }
    }, 1000);
}

var onStart = function () {
    var timeoutStartId = setTimeout(function () { console.log("Start!!!") }, 10000);
    clearTimeout(timeoutStartId);
}

action.act(onWaiting, onStart);
