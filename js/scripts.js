// back-end logic

function ScoreCard(){
this.players=[];
}
ScoreCard.prototype.addPlayer = function(player){
  this.players.push(player);
}

function Player(totalScore,turnScore,playerId){
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.playerId =playerId;
  
}

Player.prototype.rollDice = function(){
  let currentRoll = diceRole();
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
    alert("you have won!!!")
  }
  else {
    return this.totalScore;
  }
}

let diceRoll = function(){
  let roll = Math.ceil(Math.random()*6);
  return roll;
}
//user interface logic-------

