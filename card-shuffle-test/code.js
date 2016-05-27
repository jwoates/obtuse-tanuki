

  //Time to create a deck...
  var deck = [];
  for (var i = 0; i < 52; i++) {
    deck[i] = i;
  };
  displayDeck();


//We'll be reusing this.
function displayDeck () {
  $('#cardDeck').text('');
  for (var i = 0; i < deck.length; i++) {
    $('#cardDeck').append('<li>' + cardName(deck[i]) + '</li>');
  };
}

  function sort () {
    
    deck.sort(function(a,b) { return a-b; });
    displayDeck();
    return deck;  
  }


  /*The Fisher-Yates shuffle. I've only had to shuffle arrays once before, and concluded it was the best method to use.
  Mike Bostock (creator of D3.js) also recommends it: http://bost.ocks.org/mike/shuffle/*/
  function shuffle () {

    var m = deck.length, t, i;

    /*While there remain elements to shuffle…*/
    while (m) {

      /*Pick a remaining element…*/
      i = Math.floor(Math.random() * m--);

      /*And swap it with the current element.*/
      t = deck[m];
      deck[m] = deck[i];
      deck[i] = t;
    }
    displayDeck();
    return deck;

  }

/* This takes an integer from the deck and converts it to a card name.  */
  function cardName (num) {
    var deckOrder = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    var suit = ''
    if (num < 13) {
      suit = 'clubs';
    } else if (num < 26){
      suit = 'diamonds';
      num = num - 13;
    } else if (num < 39) {
      suit = 'hearts';
      num = num - 26;
    } else if (num < 52) {
      suit = 'spades';
      num = num - 39;
    }

    for (var i = 0; i < 13; i++) {
      if (num == i) {
        return deckOrder[i] + ' of ' + suit;
      }
    };
  }
