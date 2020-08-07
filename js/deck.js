
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
        this.shuffle();
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

    //randomizes deck
    shuffle() {
        let beforeArray = this.cards;
        let shuffledArray = [];

        for (let i in this.cards) {
            let randomNumber = Math.floor(Math.random() * beforeArray.length);
            shuffledArray.push(beforeArray[randomNumber]);
            beforeArray = beforeArray.slice(0, randomNumber).concat(beforeArray.slice(randomNumber + 1));
        }
        this.cards = shuffledArray;
    }
   
}

//cardTable = {} object for a card table
//seats/players
//"dealer"

var deck = new playingCardDeck();

