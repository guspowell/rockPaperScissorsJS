var Player = function(name) {
  this.name = name
  this.choice = null
};

Player.prototype.pickOption = function (option) {
  this.choice = option
};



var Game = function() {
  this.choices = ['rock', 'paper', 'scissors']
  this.players = []
};

Game.prototype.addPlayer = function (player) {
  this.players.push(player)
};
