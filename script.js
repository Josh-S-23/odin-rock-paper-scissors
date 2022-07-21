function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3 + 1);

    if (computerChoice == 1) {
        computerChoice = "Rock";
    }
    else if (computerChoice == 2) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "Paper") {

        return "You Lose! Paper beats Rock";
    }
    if (playerSelection == "paper" && computerSelection == "Scissors") {

        return "You Lose! Scissors beats Paper";
    }
    if (playerSelection == "scissors" && computerSelection == "Rock") {

        return "You Lose! Rock beats Scissors";
    }
    if (playerSelection == "rock" && computerSelection == "Scissors") {

        return "You Win! Rock beats Scissors";
    }
    if (playerSelection == "paper" && computerSelection == "Rock") {

        return "You win! Paper beats Rock";
    }
    if (playerSelection == "scissors" && computerSelection == "Paper") {

        return "You win! Scissors beats Paper";
    }
    if (playerSelection == "rock" && computerSelection == "Rock") {

        return "Draw!"
    }
    if (playerSelection == "paper" && computerSelection == "Paper") {

        return "Draw!"
    }
    if (playerSelection == "scissors" && computerSelection == "Scissors") {

        return "Draw!"
    }
}


function game() {

    let computerScore = 0;
    let playerScore = 0;

    console.log("Welcome to a 5 round game of Rock, Paper, Scissors! Good luck and have fun!");

    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Please enter rock, paper, or scissors").toLowerCase();

        if (playerSelection == "rock" && computerSelection == "Paper") {

            computerScore++;
        }
        if (playerSelection == "paper" && computerSelection == "Scissors") {

            computerScore++;
        }
        if (playerSelection == "scissors" && computerSelection == "Rock") {

            computerScore++;
        }
        if (playerSelection == "rock" && computerSelection == "Scissors") {

            playerScore++;
        }
        if (playerSelection == "paper" && computerSelection == "Rock") {

            playerScore++;
        }
        if (playerSelection == "scissors" && computerSelection == "Paper") {

            playerScore++;
        }

        console.log(playRound(playerSelection, computerSelection));
    }

    console.log("Final score is Player: " + playerScore, "Computer: " + computerScore);

    if (computerScore > playerScore) {

        return console.log("You have lost the game!");
    }
    else if (playerScore > computerScore) {

        return console.log("You have won the game!");
    }
    else {

        return console.log("The game has finished in a draw!");
    }
}


const computerSelection = getComputerChoice();

game();














