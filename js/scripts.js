// back-end logic

function ScoreCard(player1,player2){
this.players=[player1,player2];
}
//ScoreCard.prototype.addPlayer = function(player){
//this.players.push(player);
//}

function Player(totalScore,turnScore,playerId){
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.playerId =playerId;
  
}

let diceRoll = function(){
  let roll = Math.ceil(Math.random()*6);
  return roll;
}

Player.prototype.rollDice = function(){
  let currentRoll = diceRoll();
  if(currentRoll !== 1){
    this.turnScore += currentRoll;
  }
  else{
    this.turnScore = 0;
  }
  return this.turnScore;

}

Player.prototype.hold = function(){
  this.totalScore += this.turnScore
  if(this.totalScore >= 100){
    $(".winCard").show();
    $("span#winningPlayer").text(this.playerId)
  }
  else {
    this.turnScore = 0;
    return this.totalScore;
  }
}


//user interface logic-------

$(document).ready(function(){
  let player1 = new Player(0,0,1);
  let player2 = new Player(0,0,2);
  let newGame= new ScoreCard(player1,player2);
  $("button#player1Roll").click(function(){
    let rollDice1 = player1.rollDice();
    $("span#roll").text(rollDice1);  // Need to display individual dice rolls
    $("span#player1TurnScore").text(rollDice1);
  });
  $("button#player1Hold").click(function(){
    let hold1 = player1.hold();
    $("span#player1totalScore").text(hold1);
    
  });
  $("button#player2Roll").click(function(){
    let rollDice2 = player2.rollDice();
    $("span#roll").text(rollDice2);  // Need to display individual dice rolls
    $("span#player2TurnScore").text(rollDice2);
  });
  $("button#player1Roll").click(function(){
    let hold2 = player2.hold();
    $("span#player2totalScore").text(hold2);
  });
});