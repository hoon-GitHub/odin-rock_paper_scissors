// Randomly select and return the computer's choice
function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    let temp = Math.floor((Math.random() * 3));
    return choice[temp];
}

// Play a round and return the result
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toUpperCase();
    const computer = computerSelection.toUpperCase();

    console.log(player);
    console.log(computer);

    let result = "";
    const messages = [`** Draw! **`,
        `** You win! ${player} beats ${computer}. **`,
        `** You lose! ${computer} beats ${player}. **`
    ];

    if (player === "ROCK") {
        if (computer === "ROCK") {
            result = messages[0];
        } else if (computer === "PAPER") {
            result = messages[2];
            scoreC++;
        } else { // (computer === SCISSORS)
            result = messages[1];
            scoreP++;
        }
    } else if (player === "PAPER") {
        if (computer === "ROCK") {
            result = messages[1];
            scoreP++;
        } else if (computer === "PAPER") {
            result = messages[0];
        } else { // (computer === SCISSORS)
            result = messages[2];
            scoreC++;
        }
    } else if (player === "SCISSORS") {
        if (computer === "ROCK") {
            result = messages[2];
            scoreC++;
        } else if (computer === "PAPER") {
            result = messages[1];
            scoreP++;
        } else { // (computer === SCISSORS)
            result = messages[0];
        }
    } else {
        result = "Invalid input.";
    }
    display.textContent = result;
}


const btnR = document.querySelector(".rock")
const btnP = document.querySelector(".paper")
const btnS = document.querySelector(".scissors")
const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");

let scoreP = 0;
let scoreC = 0;
const playerWin = "** Your score is 5! You WIN! Resetting scores and new round begins.. **";
const computerWin = "** Computer's score is 5! You LOSE! Resetting scores and new round begins.. **";

btnR.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice());
    console.log(scoreP, scoreC);
    display2.textContent = "";
    if (scoreP === 5) {
        display2.textContent = playerWin;
        scoreP = 0;
        scoreC = 0;
    };
    if (scoreC === 5) {
        display2.textContent = computerWin;
        scoreP = 0;
        scoreC = 0;
    };
});

btnP.addEventListener("click", () => {
    playRound("PAPER", getComputerChoice());
    console.log(scoreP, scoreC);
    display2.textContent = "";
    if (scoreP === 5) {
        display2.textContent = playerWin;
        scoreP = 0;
        scoreC = 0;
    };
    if (scoreC === 5) {
        display2.textContent = computerWin;
        scoreP = 0;
        scoreC = 0;
    };
});

btnS.addEventListener("click", () => {
    playRound("SCISSORS", getComputerChoice());
    console.log(scoreP, scoreC);
    display2.textContent = "";
    if (scoreP === 5) {
        display2.textContent = playerWin;
        scoreP = 0;
        scoreC = 0;
    };
    if (scoreC === 5) {
        display2.textContent = computerWin;
        scoreP = 0;
        scoreC = 0;
    };
});