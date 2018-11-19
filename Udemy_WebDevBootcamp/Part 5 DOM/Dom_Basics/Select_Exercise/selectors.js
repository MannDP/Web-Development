//Challenge: Find 4 ways to select the first paragraph on the page

//Way 1
let tag1 = document.getElementById("first");
console.dir(tag1);

//Way 2
let tag2 = document.getElementsByClassName("special")[0];
console.dir(tag2);

//Way 3
let tag3 = document.querySelector("#first");
console.dir(tag3);

//Way 4
let tag4 = document.querySelectorAll("#first");
console.dir(tag4);
