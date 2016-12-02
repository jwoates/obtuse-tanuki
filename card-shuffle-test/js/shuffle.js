/**
 * Card Shuffle by Can Agaoglu
 */

var CardDeck = function(){
  var numbers = [
    {name: 'Two', icon: '2'},
    {name: 'Three', icon: '3'},
    {name: 'Four', icon: '4'},
    {name: 'Five', icon: '5'},
    {name: 'Six', icon: '6'},
    {name: 'Seven', icon: '7'},
    {name: 'Eight', icon: '8'},
    {name: 'Nine', icon: '9'},
    {name: 'Ten', icon: '10'},
    {name: 'Jack', icon: 'J'},
    {name: 'Queen', icon: 'Q'},
    {name: 'King', icon: 'K'},
    {name: 'Ace', icon: 'A'}
  ],

  suits = [
    {name: 'Spades', color: 'black', icon: '♠'},
    {name: 'Hearts', color: 'red', icon: '♥'},
    {name: 'Diamonds', color: 'red', icon: '♦'},
    {name: 'Clubs', color: 'black', icon: '♣'}
  ],

  sortedDeck = [];

  function create52Cards(){
    var cards = [],
        suit = [],
        currentSuit,
        currentNumber

    for(var s = 0; s < suits.length; s++){
      currentSuit = suits[s];
      for(var n = 0; n < numbers.length; n++){
        currentNumber = numbers[n];
        cards.push({
          name: currentNumber.name + " of " + currentSuit.name,
          value: n + (s * 13),
          icon: currentNumber.icon + currentSuit.icon,
          verticalIcon: currentNumber.icon + "<br>" + currentSuit.icon,
          color: currentSuit.color
        });
      }
    }
    return cards;
  };

  sortedDeck = create52Cards();

  function shuffleCards(deck){
    //Using Underscore.js for the shuffle algorithm.
    sortedDeck = _.shuffle(deck);
    return sortedDeck;
  }

  function sortCards(deck){
    //Using Underscore.js for sorting as well.
    sortedDeck = _.sortBy(deck, function(card){ return card.value; });
    return sortedDeck;
  }

  function getDeck(){
    return sortedDeck;
  }

  return {
    getDeck: getDeck,
    shuffleCards: shuffleCards,
    sortCards: sortCards
  }
};

var cardDeck = CardDeck();
var data = cardDeck.getDeck();


function onShuffle() {
  shuffeledCards = cardDeck.shuffleCards(data)
    var startList = '<ul>',
        endList = '</ul>',
        listArray = [];
    for(var i=0, len = shuffeledCards.length; i<len; i++) {
      listArray[i] = '<li style="color:' + shuffeledCards[i]['color'] +'"/>' + shuffeledCards[i]['verticalIcon'] + '</li>';
    }

  document.getElementById("table").innerHTML = startList + listArray.join(" ") + endList;
  return shuffeledCards.length();
}

function onSort() {
  sortedCards = cardDeck.sortCards(data)
    var startList = '<ul>',
        endList = '</ul>',
        listArray = [];
    for(var i=0, len = sortedCards.length; i<len; i++) {
      listArray[i] = '<li style="color:' + sortedCards[i]['color'] +'"/>' + sortedCards[i]['verticalIcon'] + '</li>';
    }

  document.getElementById("table").innerHTML = startList + listArray.join(" ") + endList;
}



