var testDeck = [];
		for (var i = 0; i < 52; i++) {
			testDeck[i] = i;
		};

describe("Deck tests", function() {
	it("Should have 52 cards", function() {
		expect(deck.length).toBe(52);
	});
});

describe("Shuffle tests", function() {
	it("Should actually shuffle the deck", function() {
		expect(testDeck).not.toBe(shuffle(testDeck));
	});
});

describe("Sort tests", function() {
	it("Should return deck to its original order", function() {
		var sortNShuffle = sort(shuffle(testDeck));
		expect(deck).toBe(sortNShuffle);
	});
});