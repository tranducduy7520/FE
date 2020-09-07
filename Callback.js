var action = {
    status: "enable",
    act: function (start, waiting) {
        waiting();
        start();
    }
}

var onWaiting = function () {
    setTimeout(function () { console.log("Waiting...") }, 1000);
    setTimeout(function () { console.log(3) }, 2000);
    setTimeout(function () { console.log(2) }, 3000);
    setTimeout(function () { console.log(1) }, 4000);
}

var onStart = function () {
    setTimeout(function () { console.log("Start!!!")},4100);
}

action.act(onWaiting, onStart);
