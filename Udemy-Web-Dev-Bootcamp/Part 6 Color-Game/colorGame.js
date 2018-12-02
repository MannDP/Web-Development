//generate random colours
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
const messageDisplay = document.querySelector("#message");
const header = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const squares = document.querySelectorAll(".square");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");

for (let i = 0; i < squares.length; i++) {
    //add initial background colors
    squares[i].style.backgroundColor = colors[i];

    //attach an event handler
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        const clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            header.style.backgroundColor = pickedColor;
            resetButton.innerHTML = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    resetButton.innerHTML = "New Colors";
    header.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";
});

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;

    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    header.style.backgroundColor = "#232323";
    resetButton.innerHTML = "New Colors";
    messageDisplay.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";

        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;

    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    header.style.backgroundColor = "#232323";
    resetButton.innerHTML = "New Colors";
    messageDisplay.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});