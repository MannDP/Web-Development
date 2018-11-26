const player1Button = document.querySelector("#p1");
const player2Button = document.getElementById("p2");
const resetButton = document.querySelector("#reset");
const inputField = document.querySelector("#setScoreLimit");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let scoreLimit = 5;

inputField.addEventListener("change", function() {
    resetGame();
    scoreLimit = Number(event.target.value);
    document.querySelector("#upperScoreLimit").textContent = event.target.value;
});

player1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === scoreLimit) {
            gameOver = true;
            document.querySelector("#p1Display").classList.add("winner");
        }
        setPlayerScore();
    }
});

player2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === scoreLimit) {
            gameOver = true;
            document.querySelector("#p2Display").classList.add("winner");
        }
        setPlayerScore();
    }
});

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    setPlayerScore();
    document.querySelector("#p1Display").classList.remove("winner");
    document.querySelector("#p2Display").classList.remove("winner");
}

resetButton.addEventListener("click", function() {
    resetGame();
});

function setPlayerScore() {
    document.querySelector("#p1Display").textContent = p1Score;
    document.querySelector("#p2Display").textContent = p2Score;
}
