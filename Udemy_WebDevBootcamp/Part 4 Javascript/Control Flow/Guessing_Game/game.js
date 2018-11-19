let rightNumber = 25;
let guessNum;
let gameStatus = true;

while (gameStatus) {
    guessNum = Number(prompt("What is your guess"));

    if (guessNum < rightNumber) {
        alert("You guessed too low");
    } else if (guessNum > rightNumber) {
        alert("You guessed too high");
    } else {
        alert("You got it right!");
        gameStatus = false;
    }

}