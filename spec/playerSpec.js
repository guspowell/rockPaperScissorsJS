describe("player", function() {

  beforeEach(function() {
    player = new Player('gus');
  });

  it("should be able to create a new player with a name", function() {
    expect(player.name).toEqual('gus')
  });

  it('should be able to choose an option or RPS', function() {
    player.pickOption('paper');
    expect(player.choice).toEqual('paper');
  });

});
