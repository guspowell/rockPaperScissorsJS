describe("game", function() {

  var game;
  var player;

  beforeEach(function() {
    game = new Game();
    player = new Player('gus');
    spyOn(game, "computerChoice").and.returnValue('rock')
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
      expect(game.computerChoice()).toEqual('rock')
      console.log(game.computerChoice());
    });

  });

});
