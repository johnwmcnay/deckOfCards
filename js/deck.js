
//cards have a suit, and rank, and sometimes an alternate value (i.e. wild cards, Ace 1 or 11)
class playingCard {

    suit = ''; //possible suits H S D C
    rank = ''; //2 3 4 5 6 7 8 9 10 J K Q A Joker
    value = 0;
    altValue = 0;
    isVisible = false;
    isWild = false;
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

    cards = []; //an array of playingCard objects

    constructor() {
        this.createDeck()
    }

    //returns an array of playingCard objects
    defaultDeck() {
        let cardArray = [];
        for (var suit of ['H', 'S', 'D', 'C']) {
            for (var rank of ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']) {
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