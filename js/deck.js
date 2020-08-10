//
// //cards have a suit, rank, visibility, an owner, and a current location
// class playingCard {
//
//     isVisible = false;
//     // belongsTo = {};
//     // currentLocation = {};
//
//     constructor(rank, suit) {
//         this.rank = rank;
//         this.suit = suit;
//         this.id = suit + rank;
//     }
//
//     //turns the card over, toggling isVisible and returning the new value
//     flip() {
//         this.isVisible = !this.isVisible;
//         return this.isVisible;
//     }
//
//     rankAsText() {
//         switch (this.rank) {
//             case "J":
//                 return "Jack";
//             case "Q":
//                 return "Queen";
//             case "K":
//                 return "King";
//             case "A":
//                 return "Ace";
//             default:
//                 return this.rank;
//         }
//     }
//
//     suitAsText() {
//         switch (this.suit) {
//             case "H":
//                 return "Hearts";
//             case "S":
//                 return "Spades";
//             case "C":
//                 return "Clubs";
//             case "D":
//                 return "Diamonds";
//         }
//     }
//
//     nameAsText() {
//         return this.rankAsText() + " of " + this.suitAsText();
//     }
//
//     isRed() {
//         return (this.suit === "D" || this.suit === "H");
//     }
//
//     isBlack() {
//         return !this.isRed();
//     }
//
//     //TODO: overload it to take variable amount of arguments
//     static areSameColor(cardOne, cardTwo) {
//         return (cardOne.isBlack() === cardTwo.isBlack());
//     }
//
//     static areSameRank(cardOne, cardTwo) {
//         return (cardOne.rank === cardTwo.rank);
//     }
//
//     static areSoulmates(cardOne, cardTwo) {
//         return (playingCard.areSameRank(cardOne, cardTwo) && playingCard.areSameColor(cardOne, cardTwo) );
//     }
//
//     moveFromTo(pileOne, pileTwo) {
//         pileOne.remove(this);
//         pileTwo.add(this);
//     }
//
//     addTo(pile) {
//         pile.pile.push(this);
//     }
//
//     removeFrom(pile) {
//         if (pile.hasCard(this)) {
//             let cardIndex = pile.pile.indexOf(this);
//
//             if (cardIndex !== -1) {
//                 pile.pile.splice(cardIndex, 1);
//                 return true;
//             } else if (pile.length > 0) {
//                 pile.pile.pop();
//                 return true;
//             }
//             return false;
//         }
//     }
// }
//
// class pileOfCards {
//
//     //TODO: add card limits for games which a hand-size limit
//     maxCards = 0;
//     minCards = 0;
//
//     constructor(id= 'pile') {
//         this.pile = [];
//         this.id = id;
//     }
//
//     get length() {
//         return this.pile.length;
//     }
//
//     getCardByIndex(index) {
//         return this.pile[index];
//     }
//
//     hasCard(card) {
//         for (let i of this.pile) {
//             if (i.id === card.id) {
//                 return true;
//             }
//         }
//         return false;
//     }
//
//     remove(card) {
//         card.removeFrom(this);
//     }
//
//     add(card) {
//         card.addTo(this);
//     }
//
//     fill(fillData) {
//         if (typeof fillData === "function") {
//             this.pile = fillData();
//         } else if (Array.isArray(fillData)) {
//             // for (let card of fillData) {
//             //     this.pile
//             // }
//         } else {
//             // console.log("...");
//         }
//     }
//
//     topCard () {
//         return this.pile[this.pile.length - 1];
//     }
//
//     shuffle() {
//         let originalPile = this;
//         let shuffledPile = new pileOfCards();
//         let numberOfCards = originalPile.length;
//
//         for (let i = 0; i < numberOfCards; i++) {
//             let randomNumber = Math.floor(Math.random() * originalPile.length);
//             let randomCard = this.getCardByIndex(randomNumber);
//             randomCard.moveFromTo(originalPile, shuffledPile);
//         }
//         this.pile = shuffledPile.pile;
//     }
//
//     //returns an array of cards
//     getCards(cardStr) {
//         let cardsToReturn = [];
//         let cardArray = cardStr.split(" ");  //"A-x K-x" -> [ ["A-x"], ["K-x"] ]
//
//         for (let cardType of cardArray) {
//             let cardInfo = cardType.split("-");
//             let cardRank = cardInfo[0];
//             let cardSuit = cardInfo[1];
//
//             for (let card of this.pile) {
//                 if (card.rank === cardRank || cardRank === "x") {
//                     if (card.suit === cardSuit || cardSuit === "x") {
//                         cardsToReturn.push(card);
//                     }
//                 }
//             }
//         }
//         return cardsToReturn;
//     }
// }
//
// class playingCardDeck extends pileOfCards {
//
//     constructor(id='deck') {
//         super();
//         this.id = id;
//         this.fill(playingCardDeck.defaultDeck);
//         this.shuffle();
//     }
//
//     //returns an array of playingCard objects
//     static defaultDeck() {
//         let deck = new pileOfCards();
//         for (let suit of ['H', 'S', 'D', 'C']) {
//             for (let rank of ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']) {
//                 let card = new playingCard(rank, suit);
//                 card.addTo(deck);
//             }
//         }
//         return deck.pile;
//     }
//
//     static randomCard() {
//         let randomNumber = Math.floor(Math.random() * 52);
//         let cardArray = playingCardDeck.defaultDeck();
//         return cardArray[randomNumber];
//     };
// }
//
// class cardPlayer extends pileOfCards {
//     //access to piles
//     //viewing rights
//
//     constructor(id = 'p0', cardData) {
//         super(id);
//         this.pile = []
//         this.fill(cardData);
//     }
// }
//
// //TODO: cardTable = {} object for a card table; number of players/seats; game class/object
// //TODO: plus dealer, a location for cards, # of piles
// class cardTable {
//     //game rules
//     //place card (creates the html element that goes on the page);
//
//     piles = []; //an array of piles
//     game = {}; //gameRules object
//
//     constructor(id='table', game) {
//         this.game = game;
//         this.id = id;
//
//         let element = document.createElement("div");
//         element.id = id;
//         document.body.appendChild(element);
//
//
//     }
//
//     gameSetup() {
//
//     }
//
//     pile(id) {
//         return this.piles[id];
//     }
//
//     //takes a pile object and pushes it into an array
//     add(pile) {
//         this.piles[pile.id] = pile
//         //draw to screen
//         cardUI.drawToTable(pile);
//     }
//
//     newPlayers(numOfPlayers) {
//         for (let i = 1; i <= numOfPlayers; i++) {
//             this.add(new cardPlayer("p" + i));
//         }
//     }
//
//     //shuffles the dealer's deck by default, otherwise it takes a pileID string
//     shuffle(id="dealer") {
//         this.pile(id).shuffle();
//     }
//
//     //deals the top card from the "dealer" pile to another pile
//     //TODO: deal face up or face down
//     deal(pileID) {
//         let card = this.pile("dealer").topCard();
//         card.isVisible = true;
//         this.move(card, "dealer", pileID);
//     }
//
//     //do dealRound for 'numOfRounds' times
//     dealRounds(numOfRounds= 1) {
//         for (let round = 1; round <= numOfRounds; round++){
//             this.dealRound();
//         }
//     }
//
//     //going in order dealing the top card to each player
//     dealRound() {
//         //TODO: add 'active/in' players and 'inactive/out' players
//
//         for (let key of Object.keys(this.piles)) {
//             if (key !== "dealer") {
//                 this.deal(this.piles[key].id);
//             }
//         }
//     }
//
//     move(cardData, pileOneID, pileTwoID) {
//         let fromPile = this.pile(pileOneID);
//         let toPile = this.pile(pileTwoID);
//
//         if (cardData === typeof "string") {
//             let cardsToMove = fromPile.getCards(cardData);
//
//             for (let card of cardsToMove) {
//                 card.moveFromTo(fromPile, toPile);
//                 // TODO: move update into cardUI
//                 let element = document.getElementById(card.id)
//                 element.className = element.className.replace(fromPile.id, toPile.id);
//             }
//         } else {
//             cardData.moveFromTo(fromPile, toPile);
//             //TODO: integrate into cardUI
//             let element = document.getElementsByClassName(cardData.id + " " + fromPile.id)[0];
//
//             if (!element) {
//                 element = cardUI.createCard(cardData, pileTwoID);
//             }
//
//             element.className = element.className.replace(fromPile.id, toPile.id);
//             element.remove();
//             document.getElementById(toPile.id).appendChild(element);
//         }
//
//     }
// }
//
// // class gameRules {
// //
// //     //holds game logic, and specifications, number of decks/players etc.
// //     constructor() {
// //
// //     }
// // }
//
// //TODO: UI class: arrangements/configurations cards can be in (i.e. rows/cols), sections
// class cardUI {
//
//     constructor() {
//
//     }
//
//     static drawToTable(pile, tableID="table") {
//
//      let wrapper = document.createElement("div");
//      wrapper.id = pile.id;
//         for (let card of pile.pile) {
//
//             if (card.isVisible) {
//                 let element = cardUI.createCard(card, pile.id);
//
//                 wrapper.appendChild(element);
//             }
//         }
//         document.getElementById(tableID).appendChild(wrapper);
//     }
//
//     static createCard(card, deckID) {
//         let element = document.createElement("button");
//
//         //element.textContent = card.isVisible ? card.rank : "";
//         element.textContent = card.rank; //TODO: for testing, remove this line when necessary
//         element.className = card.id;
//
//         if (card.isRed()) {
//             element.className += " card red-card ";
//         } else {
//             element.className += " card black-card ";
//         }
//         element.className += deckID;
//
//         element.onclick = function() {
//             console.log(card.id) };
//
//         return element;
//     }
//
//     static updateScreen(pile) {
//         // document.getEl
//     }
// }


//memoryGame = new gameRules(memory);
//table = new CardTable(memoryGame);

let table = new cardTable();

//TODO: add function to create a default dealer
table.add(new cardPlayer("dealer", playingCardDeck.defaultDeck));
table.shuffle();

table.newPlayers(4);
table.dealRounds(2);

//TODO: create high-card game logic
//TODO: add interface information: name, score, money/chips (for wager games)
//TODO: allow dealer to deal from multiple piles/decks
//TODO: allow player to only see their cards, like in five-card draw poker -> **make dynamic**