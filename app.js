let computerSelection = getComputerChoice();
console.log(computerSelection);
let playerSelection = getPlayerSelection();
console.log(playerSelection);

// Randomly return either Rock Paper or Scissors
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function getPlayerSelection() {
  let userInput = prompt("Rock, Paper, Scissors?");
  return userInput.toUpperCase();
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    tie();
    console.log(playerSelection);
    console.log(computerSelection);
  }

  if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK")) {
    win();
  }
  if ((computerSelection === "ROCK" && playerSelection === "SCISSORS") || (computerSelection === "SCISSORS" && playerSelection === "PAPER") || (computerSelection === "PAPER" && playerSelection === "ROCK")) {
    lose();
  }
}

function tie() {
    console.log("Tie");
}

function win() {
    console.log("You Win!!");
}

function lose() {
    console.log("You Lost! D:");
}