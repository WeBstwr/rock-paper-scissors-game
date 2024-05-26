// const rockButton = document.getElementById("rock-btn"),
//   paperButton = document.getElementById("paper-btn"),
//   scissorsButton = document.getElementById("scissors-btn"),
//   computerChoiceElement = document.getElementById("computer-choice-emoji"),
//   playerChoiceElement = document.getElementById("player-choice-emoji"),
//   winnerDisplay = document.getElementById("display-winner"),
//   scoreboardElement = document.getElementById("scoreboard");

// let playerScore = 0,
//   computerScore = 0;

// function generateComputerChoice() {
//   const choices = ["rock", "paper", "scissors"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// function updateScoreboard() {
//   scoreboardElement.innerText = `computer ${computerScore}  ${playerScore} player`;
// }

// function determineWinner(computerChoice, playerChoice) {
//   if (computerChoice === playerChoice) {
//     winnerDisplay.textContent = "Draw";
//   } else if (
//     (computerChoice === "rock" && playerChoice === "scissors") ||
//     (computerChoice === "scissors" && playerChoice === "paper") ||
//     (computerChoice === "paper" && playerChoice === "rock")
//   ) {
//     winnerDisplay.textContent = "Computer wins";
//     computerScore++;
//     updateScoreboard();
//   } else {
//     winnerDisplay.textContent = "Player wins";
//     playerScore++;
//     updateScoreboard();
//   }
// }

// rockButton.addEventListener("click", () => {
//   playerChoiceElement.innerText = "✊";
//   const computerChoice = generateComputerChoice();
//   computerChoiceElement.innerText = computerChoice === "rock"? "✊" : computerChoice === "paper"? "✋" : "✌️";
//   determineWinner(computerChoice, "rock");
// });

// paperButton.addEventListener("click", () => {
//   playerChoiceElement.innerText = "✋";
//   const computerChoice = generateComputerChoice();
//   computerChoiceElement.innerText = computerChoice === "rock"? "✊" : computerChoice === "paper"? "✋" : "✌️";
//   determineWinner(computerChoice, "paper");
// });

// scissorsButton.addEventListener("click", () => {
//   playerChoiceElement.innerText = "✌️";
//   const computerChoice = generateComputerChoice();
//   computerChoiceElement.innerText = computerChoice === "rock"? "✊" : computerChoice === "paper"? "✋" : "✌️";
//   determineWinner(computerChoice, "scissors");
// });