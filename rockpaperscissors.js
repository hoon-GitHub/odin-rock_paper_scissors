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
        } else { // (computer === SCISSORS)
            result = messages[1];
        }
    } else if (player === "PAPER") {
        if (computer === "ROCK") {
            result = messages[1];
        } else if (computer === "PAPER") {
            result = messages[0];
        } else { // (computer === SCISSORS)
            result = messages[2];
        }
    } else if (player === "SCISSORS") {
        if (computer === "ROCK") {
            result = messages[2];
        } else if (computer === "PAPER") {
            result = messages[1];
        } else { // (computer === SCISSORS)
            result = messages[0];
        }
    } else {
        result = "Invalid input.";
    }

    const display = document.querySelector(".display");
    display.textContent = result;
}

const btnR = document.querySelector(".rock")
const btnP = document.querySelector(".paper")
const btnS = document.querySelector(".scissors")

btnR.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice())
});
btnP.addEventListener("click", () => {
    playRound("PAPER", getComputerChoice())
});
btnS.addEventListener("click", () => {
    playRound("SCISSORS", getComputerChoice())
});