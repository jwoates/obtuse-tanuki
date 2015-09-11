/*********************************************
 *	SHUFFLING AND SORTING
 *********************************************/

// sort a deck, by suit then value
function sortDeck(deck) {
	return deck.sort(function(card1, card2) {
		if (card1.suit != card2.suit) {
			if (card1.suit == "heart") return -1;
			if (card2.suit == "heart") return 1;
			if (card1.suit == "diamond") return -1;
			if (card2.suit == "diamond") return 1;
			if (card1.suit == "spade") return -1;
			if (card2.suit == "spade") return 1;
		}
		return card1.value - card2.value;
	})
}

// shuffle a deck (array of cards)
function shuffleDeck(deck) {
	var deckLength = deck.length;
	var i,j,k;
    for(i = 0; i < deckLength; i++) {
    	j = parseInt(Math.random() * deckLength);
    	k = deck[i];
    	deck[i] = deck[j];
    	deck[j] = k;
	}
    return deck;
}


/*********************************************
 *	CREATING DECKS
 *********************************************/

// arbitrary values for suits
var suitValues = {
	0: "heart",
	1: "diamond",
	2: "spade",
	3: "club"
}

// card object
function Card(suit, value) {
	this.suit = suit;
	this.value = value;
	return this;
}

// create a deck of cards
function createDeck() {
	var deck = [];
	for (var i = 0; i < 4; i++) {
		for (var j = 2; j < 14; j++) {
			deck.push(new Card(suitValues[i], j));
		}
	}
	return deck;
}


/*********************************************
 *	TESTING
 *********************************************/

// created two decks, one will stay sorted
var deck = createDeck();
var sortedDeck = createDeck();

// shuffle/sort deck 10 times
function testShuffleSort(times) {
	var passed = true;
	for (var i = 0; i < times; i++) {
		//check deck is shuffled
		shuffleDeck(deck);
		if (!isDeckShuffled(deck, sortedDeck)) {
			passed = false;
			break;
		}
		sortDeck(deck);
		//check deck is sorted
		if (!isDeckSorted(deck, sortedDeck)) {
			passed = false;
			break;
		}
	}
	if (passed) {
		console.log("deck successfully shuffled and sorted " + times + " times");
	}
	else {
		console.log("deck did not successfully shuffle and sort " + times + " times");
	}
}

testShuffleSort(10);


/*********************************************
 *	COMPARISON HELPERS
 *********************************************/

// check if two cards are equalss
function cardEq(card1, card2) {
	return JSON.stringify(card1) == JSON.stringify(card2);
}

// check if deck is sorted
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