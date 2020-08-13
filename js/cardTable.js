class cardTable {

    constructor(id="table") {

        this.id = id
        this.piles = [];

        cardUI.createTable(id);

        this.initializeDealer();

    }

    initializeDealer(pileID = "dealer") {
        let dealer = new cardPlayer(pileID, playingCardDeck.defaultDeck);
        dealer.isActive = false;
        this.addPile(dealer);
        // this.pile("dealer").isActive = false;
        this.shuffle("dealer");
    }

    pile(id) {
        return this.piles[id];
    }

    //takes a pile object and pushes it into an array
    addPile(newPile) {
        this.piles[newPile.id] = newPile;
        cardUI.drawToTable(newPile, this);
    }

    // newPlayers(numOfPlayers) {
    //     for (let i = 1; i <= numOfPlayers; i++) {
    //         this.add(new cardPlayer("p" + i));
    //     }
    // }

    //shuffles the dealer's deck by default, otherwise it takes a pileID string
    shuffle(id="dealer") {
        this.pile(id).shuffle();
        cardUI.drawToTable(this.pile(id), this);
    }

    //deals the top card from the "dealer" pile to another pile
    deal(pileID, faceUp= true) {
        this.dealFromTo("dealer", pileID, faceUp);
    }

    //deal assumes giving the top card
    dealFromTo(pileOneID, pileTwoID, faceUp = true) {
        let card = this.pile(pileOneID).topCard();
        card.isVisible = true;
        card.isFaceUp = faceUp;
        this.transfer(card, pileOneID, pileTwoID);
    }

    dealFaceUp (pileID) {
        this.deal(pileID);
    }

    dealFaceDown (pileID) {
        this.deal(pileID, false);
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
                this.deal(this.piles[key].id, faceUp);
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
            cardUI.relocate(card, fromPile, toPile);
        }

        return cardsToMove;
    }

}