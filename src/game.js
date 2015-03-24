var Player = function(name) {
  this.name = name
  this.choice = null
};

Player.prototype.pickOption = function (option) {
  this.choice = option
};



var Game = function() {
  this.choices = ['rock', 'paper', 'scissors'];
  this.players = [];
  this.computerChoice = null
};

Game.prototype.addPlayer = function (player) {
  this.players.push(player)
};

Game.prototype.randomChoice = function () {
  this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
};

Game.prototype.isWin = function (player) {
  if (
    player.choice === 'rock' && this.computerChoice === 'scissors' ||
    player.choice === 'scissors' && this.computerChoice === 'paper' ||
    player.choice === 'paper' && this.computerChoice === 'rock'
  ) {
    return true
  }
};

Game.prototype.isDraw = function (player) {
  if (player.choice === this.computerChoice) { return true; }
};

Game.prototype.isLoss = function (player) {
  if (!this.isWin(player) && !this.isDraw(player)) { return true; }
};

Game.prototype.outcome = function (player) {
  if (this.isWin(player)) {
    return 'win';
  } else if (this.isLoss(player)) {
    return 'lose';
  } else {
    return 'draw';
  }
};
