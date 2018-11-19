let body = document.querySelector("body");
let isBlue = false;

setInterval(function() {
    if (isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "blue";
    }

    isBlue = !isBlue;
}, 1000);