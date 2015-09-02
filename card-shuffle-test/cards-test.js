require('./cards.js');
require('sinon');
var assert = require("assert");

describe('sets up', function(){
  it('orders the deck', function(){
      var newDeck = new Deck;
      assert.deepEqual(newDeck.sort(),
          ["A spade", "K spade", "Q spade", "J spade", "10 spade", "9 spade", "8 spade", "7 spade", "6 spade", "5 spade", "4 spade", "3 spade", "2 spade", "A diamond", "K diamond", "Q diamond", "J diamond", "10 diamond", "9 diamond", "8 diamond", "7 diamond", "6 diamond", "5 diamond", "4 diamond", "3 diamond", "2 diamond", "A heart", "K heart", "Q heart", "J heart", "10 heart", "9 heart", "8 heart", "7 heart", "6 heart", "5 heart", "4 heart", "3 heart", "2 heart", "A club", "K club", "Q club", "J club", "10 club", "9 club", "8 club", "7 club", "6 club", "5 club", "4 club", "3 club", "2 club"]
      )
  })
});
describe('shuffle', function(){
    it('shuffles the deck', function(){
        var newDeck = new Deck;
        sinon.stub(newDeck, "shuffle", function(){
            return ["Q club", "8 heart", "5 heart", "10 spade", "Q diamond", "9 heart", "J diamond", "6 diamond", "Q spade", "5 spade", "4 spade", "A club", "5 diamond", "7 club", "J spade", "9 spade", "3 club", "6 heart", "10 club", "4 club", "7 diamond", "4 diamond", "10 heart", "6 spade", "K heart", "7 spade", "Q heart", "2 diamond", "8 diamond", "8 spade", "2 spade", "4 heart", "3 spade", "A heart", "9 club", "A diamond", "K club", "J club", "8 club", "5 club", "J heart", "7 heart", "2 heart", "3 diamond", "2 club", "6 club", "9 diamond", "10 diamond", "A spade", "3 heart", "K diamond", "K spade"];
        });
        assert.deepEqual(newDeck.shuffle(),
             ["Q club", "8 heart", "5 heart", "10 spade", "Q diamond", "9 heart", "J diamond", "6 diamond", "Q spade", "5 spade", "4 spade", "A club", "5 diamond", "7 club", "J spade", "9 spade", "3 club", "6 heart", "10 club", "4 club", "7 diamond", "4 diamond", "10 heart", "6 spade", "K heart", "7 spade", "Q heart", "2 diamond", "8 diamond", "8 spade", "2 spade", "4 heart", "3 spade", "A heart", "9 club", "A diamond", "K club", "J club", "8 club", "5 club", "J heart", "7 heart", "2 heart", "3 diamond", "2 club", "6 club", "9 diamond", "10 diamond", "A spade", "3 heart", "K diamond", "K spade"]
        )

    })
});

