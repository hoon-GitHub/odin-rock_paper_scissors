function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    let temp = Math.floor((Math.random() * 3));
    console.log(temp);
    console.log(choice[temp]);
    return choice[temp];
}

getComputerChoice();