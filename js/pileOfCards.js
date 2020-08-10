class pileOfCards {

    //TODO: add card limits for games which a hand-size limit
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
            // console.log("...");
        }
    }

    topCard () {
        return this.pile[this.pile.length - 1];
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
        let cardArray = cardStr.split(" ");  //"A-x K-x" -> [ ["A-x"], ["K-x"] ]

        for (let cardType of cardArray) {
            let cardInfo = cardType.split("-");
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