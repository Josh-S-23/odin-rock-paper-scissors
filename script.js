const computerSelection = getComputerChoice();
const container = document.querySelector('.container');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const finalWinner = document.querySelector('#finalWinner');
const title = document.querySelector('#title');
const gameDesc = document.querySelector('#gameDesc');

title.setAttribute('style', 'color: purple; text-align: center; margin-top: 70px; margin-bottom: 50px; font-size: 50px; font-family: sans-serif; font-weight: bolder;');
gameDesc.setAttribute('style', 'color: purple; text-align: center; font-size: 20px; font-family: sans-serif;');
container.setAttribute('style', 'text-align: center; margin-top: 50px;');
rock.setAttribute('style', 'min-width: 100px; min-height: 30px; color: white; background-color: purple; margin-right: 15px; border-radius: 5px');
paper.setAttribute('style', 'min-width: 100px; min-height: 30px; color: white; background-color: purple; margin-right: 15px; border-radius: 5px');
scissors.setAttribute('style', 'min-width: 100px; min-height: 30px; color: white; background-color: purple; border-radius: 5px');
results.setAttribute('style', 'text-align: center; margin-top: 50px; font-family: sans-serif; color: purple');
score.setAttribute('style', 'text-align: center; margin-top: 15px; font-family: sans-serif; color: purple');
finalWinner.setAttribute('style', 'text-align: center; margin-top: 15px; font-family: sans-serif; color: purple')


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

        results.textContent = "You Lose! Paper beats Rock";
    }
    if (playerSelection == "paper" && computerSelection == "Scissors") {

        results.textContent = "You Lose! Scissors beats Paper";
    }
    if (playerSelection == "scissors" && computerSelection == "Rock") {

        results.textContent = "You Lose! Rock beats Scissors";
    }
    if (playerSelection == "rock" && computerSelection == "Scissors") {

        results.textContent = "You Win! Rock beats Scissors";
    }
    if (playerSelection == "paper" && computerSelection == "Rock") {

        results.textContent = "You win! Paper beats Rock";
    }
    if (playerSelection == "scissors" && computerSelection == "Paper") {

        results.textContent = "You win! Scissors beats Paper";
    }
    if (playerSelection == "rock" && computerSelection == "Rock") {

        results.textContent = "Draw!"
    }
    if (playerSelection == "paper" && computerSelection == "Paper") {

        results.textContent = "Draw!"
    }
    if (playerSelection == "scissors" && computerSelection == "Scissors") {

        results.textContent = "Draw!"
    }
}


function game() {

    let computerScore = 0;
    let playerScore = 0;

    rock.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'rock';
        finalWinner.textContent = '';
        if (playerSelection == "rock" && computerSelection == "Paper") {

            computerScore++;
        }
        if (playerSelection == "rock" && computerSelection == "Scissors") {

            playerScore++;
        }
        playRound(playerSelection, computerSelection);
        score.textContent = 'Player Wins: ' +playerScore +' Computer Wins: ' +computerScore;
        if (playerScore == 5) {
            finalWinner.textContent = 'Congratulations you have have won!';
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore == 5) {
            finalWinner.textContent = 'You lost! Better luck next time!';
            playerScore = 0;
            computerScore = 0;
        }
    });

    paper.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'paper';
        finalWinner.textContent = '';
        if (playerSelection == "paper" && computerSelection == "Scissors") {

            computerScore++;
        }
        if (playerSelection == "paper" && computerSelection == "Rock") {

            playerScore++;
        }
        playRound(playerSelection, computerSelection);
        score.textContent = 'Player Wins: ' +playerScore +' Computer Wins: ' +computerScore;
        if (playerScore == 5) {

            finalWinner.textContent = 'Congratulations you have have won!';
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore == 5) {
            finalWinner.textContent = 'You lost! Better luck next time!';
            playerScore = 0;
            computerScore = 0;
        }
    });

    scissors.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'scissors';
        finalWinner.textContent = '';
        if (playerSelection == "scissors" && computerSelection == "Rock") {

            computerScore++;
        }
        if (playerSelection == "scissors" && computerSelection == "Paper") {

            playerScore++;
        }
        playRound(playerSelection, computerSelection);
        score.textContent = 'Player Wins: ' +playerScore +' Computer Wins: ' +computerScore;
        if (playerScore == 5) {

            finalWinner.textContent = 'Congratulations you have have won!';
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore == 5) {
            finalWinner.textContent = 'You lost! Better luck next time!';
            playerScore = 0;
            computerScore = 0;
        }
    });
}


game();














