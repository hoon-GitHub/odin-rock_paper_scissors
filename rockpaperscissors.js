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
    return result;
}

// Play the game 5 times
function playGame() {
    for (let i = 0; i < 5; i++) {
        let player = prompt("Your choice:");
        let computer = getComputerChoice();
        console.log(playRound(player, computer));
    }
}

playGame();