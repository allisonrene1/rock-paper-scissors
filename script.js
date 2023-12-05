"use strict";

const playersChoice = document.querySelector(".playerUpdate");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const computersChoice = document.querySelector(".computerUpdate");
const winner = document.querySelector(".resultUpdate");
const playersScore = document.querySelector(".playerScoreUpdate");
const computersScore = document.querySelector(".computerScoreUpdate");
const resetGameButton = document.querySelector(".reset");

/* Function for choosing player's/computer's choice, playing the game,
and event listeners to make the entire game run. */
function updatePlayerChoice(choice) {
  playersChoice.textContent = choice;
}
function updateComputerChoice(choice) {
  computersChoice.textContent = choice;
}

let playerScore = 1;
let computerScore = 1;
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  updatePlayerChoice(playerChoice);
  updateComputerChoice(computerChoice);
  const result = determineWinner(playerChoice, computerChoice);
  winner.textContent = result;
  if (result.includes("The computer beat you! 😭")) {
    computersScore.textContent = computerScore++;
  } else if (result.includes("You beat the computer! 🤩")) {
    playersScore.textContent = playerScore++;
  }
  return result;
}

rockButton.addEventListener("click", function () {
  playGame("rock");
});
paperButton.addEventListener("click", function () {
  playGame("paper");
});
scissorsButton.addEventListener("click", function () {
  playGame("scissors");
});
resetGameButton.addEventListener("click", function () {
  resetGame();
});

// Function to determine computer's choice

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine a winner

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie! 🤝";
  }
  if (computerChoice === "rock") {
    if (playerChoice === "scissors") {
      return " The computer beat you! 😭";
    }
  }
  if (computerChoice === "scissors") {
    if (playerChoice === "paper") {
      return " The computer beat you! 😭";
    }
  }
  if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      return " The computer beat you! 😭";
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return " You beat the computer! 🤩";
    }
  }
  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return " You beat the computer! 🤩";
    }
  }
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return " You beat the computer! 🤩";
    }
  }
}

// Function to reset game

function resetGame() {
  playersChoice.textContent = "";
  computersChoice.textContent = "";
  winner.textContent = "";
  computersScore.textContent = 0;
  playersScore.textContent = 0;
  playerScore = 1;
  computerScore = 1;

  rockButton.removeEventListener("click", function () {
    playGame("rock");
  });

  paperButton.removeEventListener("click", function () {
    playGame("paper");
  });

  scissorsButton.removeEventListener("click", function () {
    playGame("scissors");
  });

  resetGameButton.removeEventListener("click", resetGame);
}
