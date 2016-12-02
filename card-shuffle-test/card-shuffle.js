module.exports = {
	sortDeck: sortDeck,
	shuffleDeck: shuffleDeck,
	createDeck: createDeck
}

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

//create a sorted deck
function createDeck() {

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

	var deck = [];
	for (var i = 0; i < 4; i++) {
		for (var j = 2; j < 14; j++) {
			deck.push(new Card(suitValues[i], j));
		}
	}
	return deck;
}