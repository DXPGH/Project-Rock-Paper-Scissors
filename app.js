const buttons = document.querySelectorAll("button");
const score = document.querySelector(".button-score");
const displayPlayer = document.getElementById("player-score");
const displayComputer = document.getElementById("computer-score");

let computerNum = 0;
let playerNum = 0;
let buttonId;
let buttonPress = 0;
let displayPlayerNum = playerNum;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttonPress++;
    buttonId = button.id;
    getComputerChoice();
    getPlayerSelection(buttonId);
    playRound();
    console.log(computerNum);
    console.log(playerNum);
    displayPlayer.innerHTML = playerNum;
    displayComputer.innerHTML = computerNum;

    if (computerNum == 5 || playerNum == 5) {
      if (playerNum === computerNum) {
        document.getElementById("overall-results").innerHTML += "<br>YOU TIED LAME!";
      } else if (playerNum > computerNum) {
        document.getElementById("overall-results").innerHTML += "<br> YOU WON~!";
      } else {
        document.getElementById("overall-results").innerHTML += "<br>YOU LOST! D:";
      }
      buttonPress = 0;
      computerNum = 0;
      playerNum = 0;
    }
  });
});

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
function getPlayerSelection(id) {
  let userInput = id;
  return (playerSelection = userInput);
}

//Play single RPS Round
function playRound() {
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
