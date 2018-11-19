// let keepAsking = true;

// while (keepAsking) {
//     let status = prompt("Are we there yet?");

//     if (status === "yes" || status === "yeah") {
//         alert("Yay, we finally made it");
//         keepAsking = false;
//     }
// }
// 







//Improved solution 
let answer = prompt("Are we there yet");

while (!answer.includes("yes") && !answer.includes("yeah")) {
    answer = prompt("Are we there yet");
}

alert("Yay... we made it");

//could have also used indexOf and checked for return value of -1... ie. string not found