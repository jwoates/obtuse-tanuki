var assert = require("assert");
var fs = require("fs");
var vm = require("vm");
var path = "./card-shuffle-test/cards.js";
var code = fs.readFileSync(path);
vm.runInThisContext(code);

describe('sets up', function(){
  it('orders the deck', function(){
    assert.equal(newDeck.sort(), 
     "A spade K spade Q spade J spade 10 spade 9 spade 8 spade 7 spade 6 spade 5 spade 4 spade 3 spade 2 spade A diamond K diamond Q diamond J diamond 10 diamond 9 diamond 8 diamond 7 diamond 6 diamond 5 diamond 4 diamond 3 diamond 2 diamond A heart K heart Q heart J heart 10 heart 9 heart 8 heart 7 heart 6 heart 5 heart 4 heart 3 heart 2 heart A club K club Q club J club 10 club 9 club 8 club 7 club 6 club 5 club 4 club 3 club 2 club"
      )
  })
});
