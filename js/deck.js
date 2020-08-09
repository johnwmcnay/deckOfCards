
//cards have a suit, rank, visibility, an owner, and a current location
class playingCard {

    suit = ''; //possible suits H S D C
    rank = ''; //2 3 4 5 6 7 8 9 10 J K Q A Joker
    id = '';
    isVisible = false;
    belongsTo = {};
    currentLocation = {};

    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.id = rank + suit;
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

    isRed() {
        return (this.suit === "D" || this.suit === "H");
    }

    isBlack() {
        return !this.isRed();
    }

    //TODO: overload it to take variable amount of arguments
    static areSameColor(cardOne, cardTwo) {
        return (cardOne.isBlack() === cardTwo.isBlack());
    }

    static areSameRank(cardOne, cardTwo) {
        return (cardOne.rank === cardTwo.rank);
    }

    static areSoulmates(cardOne, cardTwo) {
        return (playingCard.areSameRank(cardOne, cardTwo) && playingCard.areSameColor(cardOne, cardTwo) );
    }

    moveFromTo(pileOne, pileTwo) {
        pileOne.removeFromPile(this);
        pileTwo.addToPile(this);
    }

    //moveTo moves card to a new location
    //randomize, generate a random card
    //createCard

}


class pileOfCards {

    id = 'pile';

    constructor() {
        this.pile = [];
    }

    get length() {
        return this.pile.length;
    }

    getCardByIndex(index) {
        return this.pile[index];
    }

    //takes a card object
    addToPile(card) {
        this.pile.push(card);
    }

    //if no argument or card can't be found, assumes removal of the last element
    removeFromPile(card) {
        let cardIndex = this.pile.indexOf(card);

        if (cardIndex !== -1) {
            this.pile.splice(cardIndex, 1);
            return true
        } else if (this.pile.length > 0) {
            this.pile.pop();
            return true;
        }
        return false;
    }

    shuffle() {
        let originalPile = this;
        let shuffledPile = new pileOfCards();
        let numberOfCards = originalPile.length;

        for (let i = 0; i < numberOfCards; i++) {
            let randomNumber = Math.floor(Math.random() * originalPile.length);
            let randomCard = this.getCardByIndex(randomNumber);
            //moveFromTo (card, pile object, pile object)
            randomCard.moveFromTo(originalPile, shuffledPile);
            // shuffledArray.push(randomCard);
            // originalArray.splice(randomNumber, 1);
        }
        this.pile = shuffledPile.pile;
    }
}

class playingCardDeck extends pileOfCards {

    id = 'deck'; //property for potential use of multiple decks

    constructor() {
        super();
        this.createDeck();
        this.shuffle();
    }

    //returns an array of playingCard objects
    defaultDeck() {
        let newDeck = new pileOfCards();
        for (let suit of ['H', 'S', 'D', 'C']) {
            for (let rank of ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']) {
                newDeck.addToPile(new playingCard(rank, suit));
            }
        }
        return newDeck.pile;
    }

    //createDeck takes in a function that stores and stores an array of playingCards
    createDeck(createFunction=this.defaultDeck) {
        this.pile = createFunction();
    }


    // shuffle() {
    //     super.shuffle();
    // }

    cardsInDeck() {
        return this.pile.length;
    }
}


//TODO: cardTable = {} object for a card table; number of players/seats; game class/object
//TODO: plus dealer, a location for cards, # of decks
class cardTable {
    //players
    //decks
    //game rules
    //piles/locations to put the cards
    //arrangements/configurations cards can be in (i.e. rows/cols)
    //place card (creates the html element that goes on the page);
    //sections

    piles = [];
    game = {}; //gameRules object

    constructor(game) {
        this.game = game;
        this.piles.push(new playingCardDeck());
    }

    gameSetup() {

    }


}

// class gameRules {
//
//     //holds game logic, and specifications, number of decks/players etc.
//     constructor() {
//
//     }
// }

//TODO: player object???

let table = new cardTable();



