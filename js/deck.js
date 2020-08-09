
//cards have a suit, rank, visibility, an owner, and a current location
class playingCard {

    rank = ''; //2 3 4 5 6 7 8 9 10 J K Q A Joker
    suit = ''; //possible suits H S D C
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
        this.addTo(pileTwo);
    }

    addTo(pile) {
        pile.pile.push(this);
    }

    //moveTo moves card to a new location
    //randomize, generate a random card
    //createCard

}

//an area really is just a pileOfCards
class pileOfCards {

    id = 'pile';
    maxCards = 0;
    minCards = 0;

    constructor() {
        this.pile = [];
    }

    get length() {
        return this.pile.length;
    }

    getCardByIndex(index) {
        return this.pile[index];
    }

    //if no argument or card can't be found, assumes removal of the last element
    removeFromPile(card) {
        let cardIndex = this.pile.indexOf(card);

        if (cardIndex !== -1) {
            this.pile.splice(cardIndex, 1);
            return true;
        } else if (this.pile.length > 0) {
            this.pile.pop();
            return true;
        }
        return false;
    }

    makePile(createFunction) {
        this.pile = createFunction();
    }

    shuffle() {
        let originalPile = this;
        let shuffledPile = new pileOfCards();
        let numberOfCards = originalPile.length;

        for (let i = 0; i < numberOfCards; i++) {
            let randomNumber = Math.floor(Math.random() * originalPile.length);
            let randomCard = this.getCardByIndex(randomNumber);
            randomCard.moveFromTo(originalPile, shuffledPile);
        }
        this.pile = shuffledPile.pile;
    }
}

class playingCardDeck extends pileOfCards {

    constructor(id='deck') {
        super();
        this.id = id;
        this.makePile(playingCardDeck.defaultDeck);
        this.shuffle();
    }

    //returns an array of playingCard objects
    static defaultDeck() {
        let deck = new pileOfCards();
        for (let suit of ['H', 'S', 'D', 'C']) {
            for (let rank of ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']) {
                let card = new playingCard(rank, suit);
                card.addTo(deck);
            }
        }
        return deck.pile;
    }

    static randomCard() {
        let randomNumber = Math.floor(Math.random() * 52);
        let cardArray = playingCardDeck.defaultDeck();
        return cardArray[randomNumber];

    };
}


//TODO: cardTable = {} object for a card table; number of players/seats; game class/object
//TODO: plus dealer, a location for cards, # of piles
class cardTable {
    //players
    //decks
    //game rules
    //piles/locations to put the cards
    //place card (creates the html element that goes on the page);

    piles = []; //an array of piles
    game = {}; //gameRules object

    constructor(game) {
        this.game = game;
        this.piles.push(new playingCardDeck('deck0'));
    }

    gameSetup() {

    }

    //takes a pile object and pushes it into an array
    addPile(pile) {
        this.piles.push(pile);
    }
}

// class gameRules {
//
//     //holds game logic, and specifications, number of decks/players etc.
//     constructor() {
//
//     }
// }

//TODO: UI class: arrangements/configurations cards can be in (i.e. rows/cols), sections


//TODO: player object???

//memoryGame = new gameRules(memory);
//table = new CardTable(memoryGame);
let table = new cardTable();
table.addPile(new playingCardDeck("deck1"));
table.addPile(new playingCardDeck("deck2"));

//how to know which card to move; user input (i.e. buttons) or game rules;
//table.move card from one pile to another


