let age = Number(prompt("Please enter your age"));

if (age < 0) {
    console.log("error: age cannot be negative");
}
if (age === 21) {
    console.log("Happy 21st Birthday");
}
if (age % 2) {
    console.log("Your age is odd");
}
if (isSquare(age)) {
    console.log("perfect square");
}

function isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};