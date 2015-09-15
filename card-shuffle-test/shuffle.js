/* 
 * card shuffle test
 * Joe Cuffney
 * 
 * sorts a standard deck of 52 playing cards in ascending order
 * I have defined "ascending order" as first the suits in the order
 * clubs, diamonds, hearts, spades with each suit being in Ace-King order
 * (Aces being low) ref: https://en.wikipedia.org/wiki/Standard_52-card_deck#Rank_and_color
 * 
 */


// This will simply create a card representation
// NOTE: If I were to know more about what "games" might
// be played with these cards, prototyping might make more
// sense as a way to handle special cases such as Aces with
// a value of 1 or 11 in blackjack.
function Card(suit,value,ord) {
    this.suit = suit;
    this.value = value;
    this.str = value + " of " + suit;
    // 0-51 integer order of this particlar ordering of this particular deck
    this.ord = ord;
    return this;
}

// constants
var numSuits = 4;
var numValues = 13;
var numCards = 52;

var suits = {
    0: "clubs",
    1: "diamonds",
    2: "hearts",
    3: "spades"
};
var values = {
    0: "ace",
    1: "two",
    2: "three",
    3: "four",
    4: "five",
    5: "six",
    6: "seven",
    7: "eight",
    8: "nine",
    9: "ten",
    10: "jack",
    11: "queen",
    12: "king"
};

// creates a new deck of cards (ordered)
function createDeck() {
    var deck = [];
    var ord = 0;
    for (i = 0; i < numSuits; i++) {
        for (j = 0; j < numValues; j++) {
            deck.push(new Card(suits[i], values[j],ord));
            ord++;
        }
    }
    return deck;
}

var deck = createDeck();
//console.log(deck);

// Takes in an array of cards and shuffles it ( I used the Fisher-Yates Algorithm)
function shuffle(deck){
  var cur = numCards;
  while (0 !== cur) {
    // [0,cur) for random index
    var rand = Math.floor(Math.random() * cur);
    cur -= 1;
    // swap 
    var temp = deck[cur];
    deck[cur] = deck[rand];
    deck[rand] = temp;
  }
  return deck;
}

var shuffledDeck = shuffle(deck);
//console.log(shuffledDeck);

// as we are working with a small dataset, I will 
// essentailly use insertion sort to sort the cards
// due to the fact that its runtime will likely be 
// between 52 O(n) and 52^2 O(n^2) depending on 
// how well its shuffled.  This sort takes advantage
// of the ord proporty in the card class above
function ascend(deck){
    for(i = 0; i < numCards; i++){
        var j = i;
        while (j > 0 && deck[j-1].ord > deck[j].ord){
            var temp = deck[j];
            deck[j] = deck[j-1];
            deck[j-1] = temp;
            j--;
        } 
    }
    return deck;
}

var ascendingDeck = ascend(deck);
//console.log(ascendingDeck);

/* 
 * Test Cases:
 * -Must still be a full deck(i.e 4 of each value with different suits)
 * -Must be in ascending order
 */
 
function fullDeck(deck){
    var suits = [0,0,0,0];
    var values = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    for(i = 0; i < numCards; i++){
        switch(deck[i].suit){
            case 'clubs':
                suits[0]++;
                break;
            case 'diamonds':
                suits[1]++;
                break;
            case 'hearts':
                suits[2]++;
                break;
            case 'spades':
                suits[3]++;
                break;
            default:
                console.log("error");
        }
        switch(deck[i].value){
            case 'ace':
                values[0]++;
                break;
            case 'two':
                values[1]++;
                break;
            case 'three':
                values[2]++;
                break;
            case 'four':
                values[3]++;
                break;
            case 'five':
                values[4]++;
                break;
            case 'six':
                values[5]++;
                break;
            case 'seven':
                values[6]++;
                break;
            case 'eight':
                values[7]++;
                break;
            case 'nine':
                values[8]++;
                break;
            case 'ten':
                values[9]++;
                break;
            case 'jack':
                values[10]++;
                break;
            case 'queen':
                values[11]++;
                break;
            case 'king':
                values[12]++;
                break;
            default:
                console.log("error");
        }
    }
    //should be all 13's
    for(i = 0; i < 4; i++){
        if(suits[i] !== 13){return false;}
    }
    
    //should be all 4's
    for(i = 0; i < 13; i++){
        if(values[i] !== 4){return false;}
    }
    //if we are here it is a full deck
    return true;
}

//if in correct ascending order the ord proporty will go from 0-51
function ascendCheck(deck){
    var ord = 0;
    for(i = 0; i < 52;i++){
        if(deck[i].ord !== ord){return false;}
        ord++;
    }
    return true;
}

function test(deck){
    if(fullDeck(deck) && ascendCheck(deck)){
       console.log("passed all tests") 
    }else{
       console.log("failed one or more tests.")   
    }
}
test(deck);
