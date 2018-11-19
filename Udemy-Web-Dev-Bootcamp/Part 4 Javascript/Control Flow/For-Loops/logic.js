//Challenge 1
console.log("Numbers between -10 and 19");
for (let counter = -10; counter <= 19; counter++) {
    console.log(counter);
}

//Challenge 2

console.log("Even Numbers between 10 and 40");
for (let counter = 10; counter <= 40; counter++) {
    if (!(counter % 2)) {
        console.log(counter);
    }
}

//Challenge 3

console.log("Odd Numbers between 300 and 333");
for (let counter = 300; counter <= 333; ++counter) {
    if (counter % 2) {
        console.log(counter);
    }
}

//Challenge 4

console.log("All numbers divisble by 5 and 3 between 5 and 50");
for (let counter = 5; counter < 50; ++counter) {
    if (counter % 5 === 0 && counter % 3 === 0) {
        console.log(counter);
    }
}