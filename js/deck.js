
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
        let numberOfCards = this.cards.length;

        for (let i = 0; i < numberOfCards; i++) {
            let randomNumber = Math.floor(Math.random() * beforeArray.length);
            shuffledArray.push(beforeArray[randomNumber]);
            beforeArray.splice(randomNumber, 1);
        }
        this.cards = shuffledArray;
    }
   
}

class pileOfCards {

    pile = [];
    id = '';

    constructor() {
        this.pile = [];
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
}


//TODO: cardTable = {} object for a card table; number of players/seats; game class/object
//TODO: plus dealer, a location for cards, # of decks
class cardTable {
    //players
    //decks
    //game rules
    //piles to put the cards


    constructor() {

    }



}



//TODO: player object???



