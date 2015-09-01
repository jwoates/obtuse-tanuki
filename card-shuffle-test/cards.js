var deck = function(){
  this.numbers = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2' ],
    this.suits = ['spade', 'diamond', 'heart', 'club'],
    this.sort = function(){
          for(i=0; i <this.suits.length; i++){
                      for(j=0; j < this.numbers.length; j++){
                                       return (this.numbers[j] + " " + this.suits[i]);
                      
                                  }
                  }
        }
}
var newDeck = new deck;
newDeck.sort();
