var wins = 0;
var losses = 0;
var ties = 0;

var options = ["R", "P", "S"];

var playGame = function () {
  var userChoice = window.prompt("Type R, P, or S to play!");

  if (!userChoice) {
    return;
  }

  userChoice = userChoice.toLocaleUpperCase();

  var index = Math.floor(Math.random() * options.length);
  var cpuChoice = options[index];

  window.alert("The CPU chose: " + cpuChoice);

  if (userChoice === cpuChoice) {
    window.alert("It's a tie!");
    ties++;
  } else if (
    (userChoice === "R" && cpuChoice === "S") ||
    (userChoice === "P" && cpuChoice === "R") ||
    (userChoice === "S" && cpuChoice === "P")
  ) {
    window.alert("You won!");
    wins++;
  } else {
    window.alert("You lost!");
    losses++;
  }

  window.alert(
    "Stats:\nWins:" + wins + "\nLosses:" + losses + "\nTies:" + ties
  );

  var playAgain = window.confirm("Do you want to play again?");

  if (playAgain) {
    playGame();
  }
};

playGame();
