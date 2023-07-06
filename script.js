"use strict";

// create array with game choices of rock paper or scissors.

const gameChoices = ["ROCK", "PAPER", "SCISSORS"];

// create function called getComputerChoice that will randomly return Rock Paper or Scissors

function getComputerChoice() {
  const computerChoice = gameChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

//write a function that plays a single round of rock paper scissors
// takes two parameters playerselection and computer selection and return a string that declares the winner. case insensitive

function playRound(playerSelection, computerSelection) {
  const playerWins = `You Win! ${playerSelection} beats ${computerSelection}`;
  const computerWins = `You Lose! ${computerSelection} beats ${playerSelection}`;

  //conditions in which player wins
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    return playerWins;
    //condition if there is a tie
  } else if (playerSelection === computerSelection) {
    return `It's a tie!`;
    // other option is for loss
  } else {
    return computerWins;
  }
}

// const computerSelection = getComputerChoice();
// const playerSelection = "paper";

// console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; playerScore < 5 && computerScore < 5; i++) {
    let playerSelection = prompt(
      "Choose Rock, Paper, or Scissors"
    ).toUpperCase();
    let computerSelection = getComputerChoice();

    let round = playRound(playerSelection, computerSelection);

    if (round === `You Win! ${playerSelection} beats ${computerSelection}`) {
      alert(round);
      playerScore++;
    } else if (
      round === `You Lose! ${computerSelection} beats ${playerSelection}`
    ) {
      alert(round);
      computerScore++;
    }

    alert(`Player: ${playerScore}, Computer: ${computerScore}`);
    console.log(playerSelection, computerSelection);
  }

  if (playerScore > computerScore) {
    alert(`You've won the game!`);
  } else if (computerScore > playerScore) {
    alert(`You've lost`);
  } else {
    alert(`No winner`);
  }

  //use playRound function
  // play 5 rounds
  //keep score
  //report winner at end
}

game();
