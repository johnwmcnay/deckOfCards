class cardTable {

    constructor() {
        this.tableID = "table"
        this.UI = new cardUI();
        this.piles = [];
        cardUI.createTable();
        this.initializeDealer();
        //cardUI.drawToTable(this.pile("dealer"), this);
    }

    initializeDealer(pileID = "dealer") {
        let dealer = new cardPlayer(pileID, playingCardDeck.defaultDeck);
        dealer.isActive = false;
        this.addPile(dealer);
        this.shuffle("dealer");
    }

    pile(id) {
        return this.piles[id];
    }

    //takes a pile object and pushes it into an array
    addPile(newPile) {
        this.piles[newPile.id] = newPile;
        this.UI.drawToTable(newPile, this);
    }

    //shuffles the dealer's deck by default, otherwise it takes a pileID string
    shuffle(id="dealer") {
        let pile = this.pile(id);
        pile.shuffle();
        this.UI.drawToTable(pile, this);
    }

    //deals the top card from the "dealer" pile to another pile
    dealTo(pileID, numOfCards = 1, faceUp= true) {
        for (let i = 1; i <= numOfCards; i++) {
            this.dealFromTo("dealer", pileID, faceUp);
        }
    }

    //deal assumes giving the top card
    dealFromTo(pileOneID, pileTwoID, faceUp = true) {
        let card = this.pile(pileOneID).topCard();
        card.isVisible = true;
        card.isFaceUp = faceUp;
        this.transfer(card, pileOneID, pileTwoID);
    }

    dealFaceUp (pileID) {
        this.dealTo(pileID);
    }

    dealFaceDown (pileID) {
        this.dealTo(pileID, false);
    }

    //do dealRound for 'numOfRounds' times
    dealRounds(numOfRounds= 1, faceUp= true) {
        for (let round = 1; round <= numOfRounds; round++){
            this.dealRound(faceUp);
        }
    }

    //going in order dealing the top card to each player
    dealRound(faceUp) {
        //TODO: add 'active/in' players and 'inactive/out' players

        for (let key of Object.keys(this.piles)) {
            if (key !== "dealer") {
                this.dealTo(this.piles[key].id, faceUp);
            }
        }
    }

    //TODO: reorganize function
    transfer(cardData, pileOneID, pileTwoID, canLook= true) {
        let fromPile = this.pile(pileOneID);
        let toPile = this.pile(pileTwoID);
        let cardsToMove = [];

        if (typeof cardData === "string") {
            cardsToMove = fromPile.getCards(cardData);
        } else {
            cardsToMove = [cardData];
        }

        for (let card of cardsToMove) {
            if (!canLook) {
                card.ownerCanLook = false;
                card.belongsTo = pileTwoID;
            }
            // cardUI.relocate(card, fromPile, toPile);
            card.moveFromTo(fromPile, toPile);
            this.UI.drawToTable(toPile, this);
        }

        return cardsToMove;
    }

    transferAndHide(cardData, pileOneID, pileTwoID) {
        this.transfer(cardData, pileOneID, pileTwoID, false);
    }

}