require('./cards.js');
var sinon = require('sinon');
var assert = require("assert");
var newDeck = new Deck;

describe('sets up', function(){
  it('orders the deck', function(){
      assert.deepEqual(newDeck.sort(),
          ["A spade", "K spade", "Q spade", "J spade", "10 spade", "9 spade", "8 spade", "7 spade", "6 spade", "5 spade", "4 spade", "3 spade", "2 spade", "A diamond", "K diamond", "Q diamond", "J diamond", "10 diamond", "9 diamond", "8 diamond", "7 diamond", "6 diamond", "5 diamond", "4 diamond", "3 diamond", "2 diamond", "A heart", "K heart", "Q heart", "J heart", "10 heart", "9 heart", "8 heart", "7 heart", "6 heart", "5 heart", "4 heart", "3 heart", "2 heart", "A club", "K club", "Q club", "J club", "10 club", "9 club", "8 club", "7 club", "6 club", "5 club", "4 club", "3 club", "2 club"]
      )
  })
});
describe('shuffle', function(){
    it('shuffles the deck', function(){
        sinon.stub(Math, "random", function(){
            return 0.4;
        });
        assert.deepEqual(newDeck.shuffle(),
            ['Q spade','A spade','J club','K spade','7 diamond','8 heart','Q spade','6 club','J spade','7 spade','Q diamond','10 spade','K heart','9 spade','K club','8 club','8 spade','9 club','7 spade','4 club','A spade','6 spade','9 spade','5 spade','4 spade','2 spade','4 spade','10 diamond','3 spade','5 diamond','2 diamond','2 spade','10 heart','A diamond','5 heart','3 heart','K diamond','J club','Q diamond','6 club','3 club','J diamond','10 club','10 diamond','8 club','7 club','9 diamond','5 club','8 diamond','3 club','2 club','7 diamond','K spade','6 diamond','J spade','10 spade','5 diamond','8 spade','4 diamond','6 spade','5 spade','3 diamond','3 spade','2 diamond','A diamond','K diamond','A heart','J diamond','K heart','9 diamond','8 diamond','Q heart','6 diamond','J heart','4 diamond','3 diamond','10 heart','A heart','9 heart','Q heart','J heart','8 heart','9 heart','7 heart','7 heart','6 heart','6 heart','4 heart','5 heart','2 heart','A club','4 heart','Q club','3 heart','10 club','9 club','2 heart','7 club','A club','5 club','4 club','K club','2 club','Q club']        )
    })
});

