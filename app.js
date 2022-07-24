let computerSelection;
let playerSelection;
let playerNum;
let computerNum;

// Randomly return either Rock Paper or Scissors for Computer input
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return (computerSelection = "ROCK");
    case 1:
      return (computerSelection = "PAPER");
    case 2:
      return (computerSelection = "SCISSORS");
  }
}

//Collecting Player input
function getPlayerSelection() {
  let userInput = prompt("Rock, Paper, Scissors?");
  return (playerSelection = userInput.toUpperCase());
}

//Play single RPS Round
function playRound() {
  getComputerChoice();
  getPlayerSelection();

  if (playerSelection === computerSelection) {
    tie();
  }

  if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK")) {
    win();
    playerNum++;
  }
  if ((computerSelection === "ROCK" && playerSelection === "SCISSORS") || (computerSelection === "SCISSORS" && playerSelection === "PAPER") || (computerSelection === "PAPER" && playerSelection === "ROCK")) {
    lose();
    computerNum++;
  }
}

//Play a 5 round game of RPS
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    if (playerNum === computerNum) {
      document.getElementById("overall-results").innerHTML = "<br>YOU TIED LAME!";
    } else if (playerNum > computerNum) {
      document.getElementById("overall-results").innerHTML = "<br> YOU WON~!";
    } else {
      document.getElementById("overall-results").innerHTML = "<br>YOU LOST! D:";
    }
  }
}

//Resulting outcome of each round
function tie() {
  document.getElementById("results").innerHTML += "Tie! <br>";
}

function win() {
  document.getElementById("results").innerHTML += "You Win! <br>";
}

function lose() {
  document.getElementById("results").innerHTML += "You Lost! <br>";
}
