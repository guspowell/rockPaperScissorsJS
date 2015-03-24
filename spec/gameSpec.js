describe("game", function() {

  var game;
  var player;

  beforeEach(function() {
    game = new Game();
    player = new Player('gus');
  });

  describe('defaults', function() {

    it('should have three choices', function() {
      expect(game.choices.length).toEqual(3);
    });

    it('should have no players when initialized', function() {
      expect(game.players.length).toEqual(0)
    });

  });

  describe('adding a player', function() {

    it('should be able to add a player to the game', function() {
      game.addPlayer(player);
      expect(game.players[0].name).toEqual('gus');
    });

  });

  describe('computer choice', function() {

    it('the computer should be able to choose from the options', function() {
      spyOn(game, "randomChoice").and.callFake(function() {
        game.computerChoice = 'rock'
      });
      game.randomChoice();
      expect(game.computerChoice).toEqual('rock');
    });

  });

  describe('knowing the outcomes', function() {

    beforeEach(function() {
      spyOn(game, "randomChoice").and.callFake(function() {
        game.computerChoice = 'rock'
      });
    });

    it('should know how a player wins', function() {
      game.randomChoice();
      player.pickOption('paper');
      expect(game.isWin(player)).toEqual(true)
    });

    it('should know a player can draw', function() {
      game.randomChoice();
      player.pickOption('rock');
      expect(game.isDraw(player)).toEqual(true)
    });

    it('should know how a can lose', function() {
      game.randomChoice();
      player.pickOption('scissors');
      expect(game.isLoss(player)).toEqual(true)
    });

  });

  describe('determining the outcome', function() {

    beforeEach(function() {
      spyOn(game, "randomChoice").and.callFake(function() {
        game.computerChoice = 'rock'
      });
    });

    it('should say win if the player has a winning hand', function() {
      game.randomChoice();
      player.pickOption('paper');
      expect(game.outcome(player)).toEqual('win');
    });

    it('should say lose if the player has a losing hand', function() {
      game.randomChoice();
      player.pickOption('scissors');
      expect(game.outcome(player)).toEqual('lose');
    });

    it('should say lose if the player has a drawing hand', function() {
      game.randomChoice();
      player.pickOption('rock');
      expect(game.outcome(player)).toEqual('draw');
    });

  });

});
