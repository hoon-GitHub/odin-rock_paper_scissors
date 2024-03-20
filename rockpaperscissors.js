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
    if (player === "ROCK") {
        if (computer === "ROCK") {
            result = "Draw.";
        } else if (computer === "PAPER") {
            result = `You lose! ${computer} beats ${player}.`;
        } else {
            result = `You win! ${player} beats ${computer}.`;
        }
    } else if (player === "PAPER") {
        if (computer === "ROCK") {
            result = `You win! ${player} beats ${computer}.`;
        } else if (computer === "PAPER") {
            result = "Draw.";
        } else {
            result = `You lose! ${computer} beats ${player}.`;
        }
    } else if (player === "SCISSORS") {
        if (computer === "ROCK") {
            result = `You lose! ${computer} beats ${player}.`;
        } else if (computer === "PAPER") {
            result = `You win! ${player} beats ${computer}.`;
        } else {
            result = "Draw.";
        }
    } else {
        result = "Invalid input.";
    }
    return result;
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));