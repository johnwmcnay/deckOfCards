
//cards have a suit, rank, visibility, an owner, and a current location
class playingCard {

    suit = ''; //possible suits H S D C
    rank = ''; //2 3 4 5 6 7 8 9 10 J K Q A Joker
    isVisible = false;
    belongsTo = {};
    currentLocation = {};

    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }

    //turns the card over, toggling isVisible and returning the new value
    flip() {
        this.isVisible = !this.isVisible;
        return this.isVisible;
    }

    rankAsText() {
        switch (this.rank) {
            case "J":
                return "Jack";
            case "Q":
                return "Queen";
            case "K":
                return "King";
            case "A":
                return "Ace";
            default:
                return this.rank;
        }
    }

    suitAsText() {
        switch (this.suit) {
            case "H":
                return "Hearts";
            case "S":
                return "Spades";
            case "C":
                return "Clubs";
            case "D":
                return "Diamonds";
        }
    }

    nameAsText() {
        return this.rankAsText() + " of " + this.suitAsText();
    }

    //moveTo moves card to a new location
    //randomize, generate a random card
    //createCard

}

class playingCardDeck {

    id = 'deck'; //property for potential use of multiple decks
    cards = []; //an array of playingCard objects

    constructor() {
        this.createDeck()
    }

    //returns an array of playingCard objects
    defaultDeck() {
        let cardArray = [];
        for (let suit of ['H', 'S', 'D', 'C']) {
            for (let rank of ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']) {
                cardArray.push(new playingCard(rank, suit));
            }
        }
        return cardArray;
    }

    //createDeck takes in a function that stores and stores an array of playingCards
    createDeck(createFunction=this.defaultDeck) {
        this.cards = createFunction();
    }

    cardsInDeck() {
        return this.cards.length;
    }

    //removeCard
    //addCard
    //shuffle() randomizes deck

}

//cardTable = {} object for a card table
//seats/players
//"dealer"

var deck = new playingCardDeck();

var wrapper = document.createElement('div');
wrapper.id = "table";

for (let card of deck.cards) {
    var element = document.createElement('button');

    element.textContent = card.rank;
    element.id = card.rank + card.suit;

    //TODO isRed isBlack color need to be added to playingCard card.id
    if (card.suit === "H" || card.suit === "D"){
        // console.log("red");
        element.className = "red-card";
    } else {
        // console.log("black");
        element.className = "black-card";
    }
    element.onclick = function() {
        console.log(this.id);
    };
    wrapper.appendChild(element);
}
document.body.appendChild(wrapper);