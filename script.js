const choices = ["rock", "paper", "scissors"];
const winners = [];

function startGame() {
  
  playRound();
  setWins();
}

function playRound(round) {
  const computerSelection = computerSelect();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
}

function computerSelect() {
  //update DOM with computer selection
  return choices[Math.floor(Math.random()*choices.length)]
}

function checkWinner(choiceP, choiceC) {
  if(choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") || 
    (choiceP === "paper" && choiceC === "rock") || 
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function setWins() {
  let pWinCount = winners.filter(item => item == "Player").length;
  let cWinCount = winners.filter(item => item == "Computer").length;
  let ties = winners.filter(item => item == "Tie").length;
}

startGame();