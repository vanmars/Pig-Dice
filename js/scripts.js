// Business Logic
function ScoreCard(player1, player2) {
  this.players = [player1, player2];
  this.currentPlayer = 1;
}

function Player(playerId) {
  this.totalScore = 0;
  this.turnScore = 0;
  this.playerId = playerId;
}

let diceRoll = function () {
  let roll = Math.ceil(Math.random()*6);
  return roll;
}

Player.prototype.rollDice = function () {
  let currentRoll = diceRoll();
  if (currentRoll !== 1) {
    this.turnScore += currentRoll;
  }
  else {
    this.turnScore = 0;
  };
  return currentRoll;
};
 
Player.prototype.hold = function () {
  this.totalScore += this.turnScore
  this.turnScore = 0;
  if(this.totalScore >= 100){
   $(".winCard").show();
   $("span#winningPlayer").text(this.playerId)
  };
  return this.totalScore;
};

//User Interface Logic-------
let player1 = new Player(1);
let player2 = new Player(2);
let newGame = new ScoreCard(player1, player2);

let attachEventListeners = function () {
   // Event Listener for Player 1 Roll
   $("button#player1Roll").click(function () {
    let roll = player1.rollDice();
    $("span#roll").text(roll);
    $("span#player1TurnScore").text(player1.turnScore);
    // If player one, rolls a one, need to disable buttons
    if (roll === 1){
      // Disable player one's buttons
      $("button.player1Btn").prop("disabled", true);
      // Enable player two's buttons
      $("button.player2Btn").prop("disabled", false);
      newGame.currentPlayer = 2;
    };
  });
  // Event Listener for Player 1 Hold
  $("button#player1Hold").click(function () {
    let score = player1.hold();
    $("span#player1TotalScore").text(score);
    $("span#player1TurnScore").text(0);
    // Disable player one's buttons
    $("button.player1Btn").prop("disabled", true);
    // Enable player two's buttons
    $("button.player2Btn").prop("disabled", false);
    // Change current player
    newGame.currentPlayer = 2;
  });
  //  Event Listener for Player 2 Roll
  $("button#player2Roll").click(function () {
    let roll = player2.rollDice();
    $("span#roll").text(roll);  
    $("span#player2TurnScore").text(player2.turnScore);
    // If player two, rolls a one, need to disable buttons
    if (roll === 1){
      // Disable player two's buttons
      $("button.player2Btn").prop("disabled", true);
      // Enable player one's buttons
      $("button.player1Btn").prop("disabled", false);
      newGame.currentPlayer = 1;
    };
  });
  // Event Listener for Player 2 Hold
  $("button#player2Hold").click(function () {
    let score = player2.hold();
    $("span#player2TotalScore").text(score);
    $("span#player2TurnScore").text(0);
    // Disable player two's buttons
    $("button.player2Btn").prop("disabled", true);
    // Enable player one's buttons
    $("button.player1Btn").prop("disabled", false);
      // Change current player
    newGame.currentPlayer = 1;
  });
};
$(document).ready(function () {
  // Disable player two and enable player one
  $("button.player1Btn").prop("disabled", false);
  $("button.player2Btn").prop("disabled", true);
  attachEventListeners();
});

