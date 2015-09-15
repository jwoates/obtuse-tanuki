var deckActions = require('./card-shuffle.js');
var assert = require('assert');

// created two decks, one will stay sorted
var deck = deckActions.createDeck();
var sortedDeck = deckActions.createDeck();

shuffleTest();
sortTest();

function sortTest() {
	deckActions.sortDeck(deck);
	assert.equal(isDeckSorted(deck, sortedDeck), true);
}

function shuffleTest() {
	deckActions.shuffleDeck(deck);
	assert.equal(isDeckShuffled(deck, sortedDeck), true);
}

//check if deck is sorted
function isDeckSorted(deck, sortedDeck) {
	return JSON.stringify(deck) == JSON.stringify(sortedDeck);
}


// check if deck is shuffled
// arbitrarily check that at least half the deck differs from the sorted deck
function isDeckShuffled(deck, sortedDeck) {
	var diff = 0;
	var deckLength = deck.length;
	for (var i = 0; i < deckLength; i++) {
		if (!cardEq(deck[i], sortedDeck[i])) {
			++diff;
		}
	}
	return diff >= 26;
}

function cardEq(card1, card2) {
	if (card1.suit == card2.suit) {
		return card1.value == card2.value;
	}
	return false;
}