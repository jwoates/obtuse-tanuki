Deck = function(){
    this.numbers = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2' ];
    this.suits = ['spade', 'diamond', 'heart', 'club'];
    this.sortedDeck = [];
    this.sort = function(){
        for(i=0; i <this.suits.length; i++){
            for(j=0; j < this.numbers.length; j++){
                this.sortedDeck.push(this.numbers[j] + " " + this.suits[i])
            }
        }
        return this.sortedDeck;
    };
    this.shuffle = function(){
        this.sort();
        for (var i = this.sortedDeck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.sortedDeck[i];
            this.sortedDeck[i] = this.sortedDeck[j];
            this.sortedDeck[j] = temp;
        }
        return this.sortedDeck;
    };
};
