// let button = document.getElementsByTagName("button")[0];
// let body = document.getElementsByTagName("body")[0];
// let isWhite = true;
// button.addEventListener("click", function() {
//     if (isWhite) {
//         body.style.background = "purple";
//     } else {
//         body.style.background = "white";
//     }
//     isWhite = !isWhite;
// });

//! Scalable implementation
let button = document.querySelector("button");
button.addEventListener("click", function() {
    document.body.classList.toggle("purple");
});
