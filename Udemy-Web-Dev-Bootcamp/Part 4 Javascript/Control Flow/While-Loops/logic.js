//Challenge 1
let counter_1 = -10;

console.log("Numbers between -10 and 19");
while (counter_1 <= 19) {
    console.log(counter_1);
    ++counter_1;
}

//Challenge 2
let counter_2 = 10;

console.log("Even Numbers between 10 and 40");
while (counter_2 <= 40) {
    if (!(counter_2 % 2)) {
        console.log(counter_2);
    }
    counter_2++;
}

//Challenge 3
let counter_3 = 300;

console.log("Odd Numbers between 300 and 333");
while (counter_3 <= 333) {
    if (counter_3 % 2) {
        console.log(counter_3);
    }
    ++counter_3;
}

//Challenge 4
let counter_4 = 5;

console.log("All numbers divisble by 5 and 3 between 5 and 50");
while (counter_4 < 50) {
    if (counter_4 % 5 === 0 && counter_4 % 3 === 0) {
        console.log(counter_4);
    }
    ++counter_4;
}