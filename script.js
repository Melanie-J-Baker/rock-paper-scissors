const choices = ["rock", "paper", "scissors"];
let winners = [];

function startGame() {
  //play the game until someone wins five times
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }
  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {
    //display end results
    //change the button to visible
    //change the text to display winner
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;
  if (playerWins == 5) {
    document.querySelector(".winner").textContent =
      "You won 5 games. Congrats!";
  } else {
    document.querySelector(".winner").textContent =
      "Sorry, the computer won 5 times";
  }
  document.querySelector(".reset").getElementsByClassName.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector(".playerChoice").textContent = `You chose ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.querySelector(".computerChoice").textContent = `The computer chose ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "You won the round!";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent =
      "The computer won the round";
  } else {
    document.querySelector(".winner").textContent = "The round was a tie";
  }
}

function tallyWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
  document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
  document.querySelector(".ties").textContent = `Score: ${ties}`;
}

function computerSelect() {
  //update DOM with computer selection
  const choice = choices[Math.floor(Math.random() * choices.length)];
  document.querySelector(`.${choice}`).classList.add("active");
  setTimeout(() => {
    document.querySelector(`.${choice}`).classList.remove("active");
  }, 700);

  return choice;
}

function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
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

startGame();
