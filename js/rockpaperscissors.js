var userPoints = 0, computerPoints = 0, userInput = "";

function userSelection(userChose) {
  userInput = userChose;
  if (userPoints + computerPoints < 5) {
    if (userPoints < 3 && computerPoints < 3) {
    playGame();
    }  
  }  

  if (userPoints === 3) {
    document.getElementById("score").textContent="\nCONGRATULATIONS! YOU ARE THE BIG WINNER.";
  }  
  else if(computerPoints === 3) {
    document.getElementById("score").textContent="\nSORRY! YOU LOST.";
  }  
}

function computerSelection() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userInput, computerInput) {
  console.log(userInput);
  if (userInput === computerInput) {
    return "Tie";
  }

  if (userInput === "rock") {
    if (computerInput === "paper") {
      computerPoints++;
      return "Computer Wins!"
    } else {
      userPoints++;
      return "You win!"
    }
  } else if (userInput === "paper") {
    if (computerInput === "scissors") {
      computerPoints++;
      return "Computer Wins!"
    } else {
      userPoints++;
      return "You win!"
    }
  } else {
    if (computerInput === "rock") {
      computerPoints++;
      return "Computer Wins!"
    } else {
      userPoints++;
      return "You win!"
    }
  }
}
  
function playGame() {
  let result = "";
  let computerInput = "";
  computerInput = computerSelection();
  result = determineWinner(userInput, computerInput);
  document.getElementById("score").textContent= "First to win 3 games is the champion! Your score: " + userPoints + " | Computer score: " + computerPoints;
  result += "\nYou chose " + userInput + " - the computer chose " + computerInput;
  document.getElementById("reports").textContent =result;
}

function restart() {
  userPoints = 0;
  computerPoints = 0;
  document.getElementById("score").textContent= "First to win 3 games is the champion! Your score: " + userPoints + " | Computer score: " + computerPoints;
  document.getElementById("reports").textContent ="You can start the game by chose one of the buttons above!";
}