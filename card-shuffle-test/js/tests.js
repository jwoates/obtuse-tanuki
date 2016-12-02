/**
 * Unit Test Scenarios for shuffle.js by Can Agaoglu
 */

QUnit.test( "Count Sorted Deck", function( assert ) {
  assert.equal( data.length, 52, "52 Cards in Sorted Cards Array" );
});

QUnit.test( "Count Shuffled Deck", function( assert ) {

 shuffeledCards = cardDeck.shuffleCards(data)
  assert.equal( shuffeledCards.length, 52, "52 Cards in Shuffled Cards Array" );
});

QUnit.test( "Array Output for cardDeck", function( assert ) {
JSON.stringify(data)
  assert.ok( data != null, JSON.stringify(data) );
});

var correctDeck = [{"name":"Two of Spades","value":0,"icon":"2♠","verticalIcon":"2<br>♠","color":"black"},{"name":"Three of Spades","value":1,"icon":"3♠","verticalIcon":"3<br>♠","color":"black"},{"name":"Four of Spades","value":2,"icon":"4♠","verticalIcon":"4<br>♠","color":"black"},{"name":"Five of Spades","value":3,"icon":"5♠","verticalIcon":"5<br>♠","color":"black"},{"name":"Six of Spades","value":4,"icon":"6♠","verticalIcon":"6<br>♠","color":"black"},{"name":"Seven of Spades","value":5,"icon":"7♠","verticalIcon":"7<br>♠","color":"black"},{"name":"Eight of Spades","value":6,"icon":"8♠","verticalIcon":"8<br>♠","color":"black"},{"name":"Nine of Spades","value":7,"icon":"9♠","verticalIcon":"9<br>♠","color":"black"},{"name":"Ten of Spades","value":8,"icon":"10♠","verticalIcon":"10<br>♠","color":"black"},{"name":"Jack of Spades","value":9,"icon":"J♠","verticalIcon":"J<br>♠","color":"black"},{"name":"Queen of Spades","value":10,"icon":"Q♠","verticalIcon":"Q<br>♠","color":"black"},{"name":"King of Spades","value":11,"icon":"K♠","verticalIcon":"K<br>♠","color":"black"},{"name":"Ace of Spades","value":12,"icon":"A♠","verticalIcon":"A<br>♠","color":"black"},{"name":"Two of Hearts","value":13,"icon":"2♥","verticalIcon":"2<br>♥","color":"red"},{"name":"Three of Hearts","value":14,"icon":"3♥","verticalIcon":"3<br>♥","color":"red"},{"name":"Four of Hearts","value":15,"icon":"4♥","verticalIcon":"4<br>♥","color":"red"},{"name":"Five of Hearts","value":16,"icon":"5♥","verticalIcon":"5<br>♥","color":"red"},{"name":"Six of Hearts","value":17,"icon":"6♥","verticalIcon":"6<br>♥","color":"red"},{"name":"Seven of Hearts","value":18,"icon":"7♥","verticalIcon":"7<br>♥","color":"red"},{"name":"Eight of Hearts","value":19,"icon":"8♥","verticalIcon":"8<br>♥","color":"red"},{"name":"Nine of Hearts","value":20,"icon":"9♥","verticalIcon":"9<br>♥","color":"red"},{"name":"Ten of Hearts","value":21,"icon":"10♥","verticalIcon":"10<br>♥","color":"red"},{"name":"Jack of Hearts","value":22,"icon":"J♥","verticalIcon":"J<br>♥","color":"red"},{"name":"Queen of Hearts","value":23,"icon":"Q♥","verticalIcon":"Q<br>♥","color":"red"},{"name":"King of Hearts","value":24,"icon":"K♥","verticalIcon":"K<br>♥","color":"red"},{"name":"Ace of Hearts","value":25,"icon":"A♥","verticalIcon":"A<br>♥","color":"red"},{"name":"Two of Diamonds","value":26,"icon":"2♦","verticalIcon":"2<br>♦","color":"red"},{"name":"Three of Diamonds","value":27,"icon":"3♦","verticalIcon":"3<br>♦","color":"red"},{"name":"Four of Diamonds","value":28,"icon":"4♦","verticalIcon":"4<br>♦","color":"red"},{"name":"Five of Diamonds","value":29,"icon":"5♦","verticalIcon":"5<br>♦","color":"red"},{"name":"Six of Diamonds","value":30,"icon":"6♦","verticalIcon":"6<br>♦","color":"red"},{"name":"Seven of Diamonds","value":31,"icon":"7♦","verticalIcon":"7<br>♦","color":"red"},{"name":"Eight of Diamonds","value":32,"icon":"8♦","verticalIcon":"8<br>♦","color":"red"},{"name":"Nine of Diamonds","value":33,"icon":"9♦","verticalIcon":"9<br>♦","color":"red"},{"name":"Ten of Diamonds","value":34,"icon":"10♦","verticalIcon":"10<br>♦","color":"red"},{"name":"Jack of Diamonds","value":35,"icon":"J♦","verticalIcon":"J<br>♦","color":"red"},{"name":"Queen of Diamonds","value":36,"icon":"Q♦","verticalIcon":"Q<br>♦","color":"red"},{"name":"King of Diamonds","value":37,"icon":"K♦","verticalIcon":"K<br>♦","color":"red"},{"name":"Ace of Diamonds","value":38,"icon":"A♦","verticalIcon":"A<br>♦","color":"red"},{"name":"Two of Clubs","value":39,"icon":"2♣","verticalIcon":"2<br>♣","color":"black"},{"name":"Three of Clubs","value":40,"icon":"3♣","verticalIcon":"3<br>♣","color":"black"},{"name":"Four of Clubs","value":41,"icon":"4♣","verticalIcon":"4<br>♣","color":"black"},{"name":"Five of Clubs","value":42,"icon":"5♣","verticalIcon":"5<br>♣","color":"black"},{"name":"Six of Clubs","value":43,"icon":"6♣","verticalIcon":"6<br>♣","color":"black"},{"name":"Seven of Clubs","value":44,"icon":"7♣","verticalIcon":"7<br>♣","color":"black"},{"name":"Eight of Clubs","value":45,"icon":"8♣","verticalIcon":"8<br>♣","color":"black"},{"name":"Nine of Clubs","value":46,"icon":"9♣","verticalIcon":"9<br>♣","color":"black"},{"name":"Ten of Clubs","value":47,"icon":"10♣","verticalIcon":"10<br>♣","color":"black"},{"name":"Jack of Clubs","value":48,"icon":"J♣","verticalIcon":"J<br>♣","color":"black"},{"name":"Queen of Clubs","value":49,"icon":"Q♣","verticalIcon":"Q<br>♣","color":"black"},{"name":"King of Clubs","value":50,"icon":"K♣","verticalIcon":"K<br>♣","color":"black"},{"name":"Ace of Clubs","value":51,"icon":"A♣","verticalIcon":"A<br>♣","color":"black"}];
var isMissingCard = false;
QUnit.test( "Missing Cards in cardDeck", function( assert ) {
    _.each(correctDeck, function(card){
      if(!_.findWhere(cardDeck.getDeck(), card)){
        isMissingCard = true;
      };
      });
 
  assert.equal( isMissingCard, false, "SUCCESS: No Missing Cards" );
});

QUnit.test( "Missing Cards in shuffeledCards", function( assert ) {
var isMissingCard = false;

    cardDeck.shuffleCards(cardDeck.getDeck());
    _.each(correctDeck, function(card){
      if(!_.findWhere(cardDeck.getDeck(), card)){
        isMissingCard = true;
      };
    });
 
  assert.equal( isMissingCard, false, "SUCCESS: No Missing Cards in Shuffled Deck" );
});
