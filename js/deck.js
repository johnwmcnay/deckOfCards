
//cards have a suit, rank, visibility, an owner, and a current location
class playingCard {

    isVisible = false;
    // belongsTo = {};
    // currentLocation = {};

    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.id = rank + "." + suit;
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
        pileOne.remove(this);
        pileTwo.add(this);
    }

    addTo(pile) {
        pile.pile.push(this);
    }

    removeFrom(pile) {
        if (pile.hasCard(this)) {
            let cardIndex = pile.pile.indexOf(this);

            if (cardIndex !== -1) {
                pile.pile.splice(cardIndex, 1);
                return true;
            } else if (pile.length > 0) {
                pile.pile.pop();
                return true;
            }
            return false;
        }
    }
}

class pileOfCards {

    maxCards = 0;
    minCards = 0;

    constructor(id= 'pile') {
        this.pile = [];
        this.id = id;
    }

    get length() {
        return this.pile.length;
    }

    getCardByIndex(index) {
        return this.pile[index];
    }

    hasCard(card) {
        for (let i of this.pile) {
            if (i.id === card.id) {
                return true;
            }
        }
        return false;
    }

    remove(card) {
        card.removeFrom(this);
    }

    add(card) {
        card.addTo(this);
    }

    fill(fillData) {
        if (typeof fillData === "function") {
            this.pile = fillData();
        } else if (Array.isArray(fillData)) {
            // for (let card of fillData) {
            //     this.pile
            // }
        } else {
            console.log("...");
        }
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

    //returns an array of cards
    getCards(cardStr) {
        let cardsToReturn = [];
        let cardArray = cardStr.split(" ");  //"A.x K.x" -> [ ["A.x"], ["K.x"] ]

        for (let cardType of cardArray) {
            let cardInfo = cardType.split(".");
            let cardRank = cardInfo[0];
            let cardSuit = cardInfo[1];

            for (let card of this.pile) {
                if (card.rank === cardRank || cardRank === "x") {
                    if (card.suit === cardSuit || cardSuit === "x") {
                        cardsToReturn.push(card);
                    }
                }
            }
        }
        return cardsToReturn;

    }
}

class playingCardDeck extends pileOfCards {

    constructor(id='deck') {
        super();
        this.id = id;
        this.fill(playingCardDeck.defaultDeck);
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

class cardPlayer extends pileOfCards {
    //access to piles
    //viewing rights

    constructor(id = 'p0', cardData) {
        super(id);
        this.pile = []
        this.fill(cardData);
    }
}

//TODO: cardTable = {} object for a card table; number of players/seats; game class/object
//TODO: plus dealer, a location for cards, # of piles
class cardTable {
    //game rules
    //place card (creates the html element that goes on the page);

    piles = []; //an array of piles
    game = {}; //gameRules object

    constructor(game) {
        this.game = game;
        //this.piles.push(new playingCardDeck('deck'));
    }

    gameSetup() {

    }

    pile(id) {
        return this.piles[id];
    }

    // showPiles() {
    //     return Object.values(this.piles);
    // }

    //takes a pile object and pushes it into an array
    add(pile) {
        this.piles[pile.id] = pile;
    }

    shuffle(id) {
        this.pile(id).shuffle();
    }

    move(cardStr, pileOneID, pileTwoID) {
        let fromPile = this.pile(pileOneID);
        let toPile = this.pile(pileTwoID);
        let cardsToMove = fromPile.getCards(cardStr);

        for (let card of cardsToMove) {
            card.moveFromTo(fromPile, toPile);
        }
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

//memoryGame = new gameRules(memory);
//table = new CardTable(memoryGame);

let table = new cardTable();
table.add(new cardPlayer("dealer", playingCardDeck.defaultDeck));
table.shuffle("dealer");
table.add(new pileOfCards("memory-field"));
//move+deal cards to another player/location/pile
//TODO: table.moveCardFromTo(card, "dealer", "memory-field");
//      move("card.id").fromTo("dealer", "memory-field");
table.pile("dealer");
table.move("A.x", "dealer", "memory-field");

//how to know which card to move; user input (i.e. buttons) or game rules;