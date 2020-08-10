class cardTable {
    //game rules
    //place card (creates the html element that goes on the page);

    piles = []; //an array of piles
    game = {}; //gameRules object

    constructor(id='table', game) {
        this.game = game;
        this.id = id;

        let element = document.createElement("div");
        element.id = id;
        document.body.appendChild(element);


    }

    gameSetup() {

    }

    pile(id) {
        return this.piles[id];
    }

    //takes a pile object and pushes it into an array
    add(pile) {
        this.piles[pile.id] = pile
        //draw to screen
        cardUI.drawToTable(pile);
    }

    newPlayers(numOfPlayers) {
        for (let i = 1; i <= numOfPlayers; i++) {
            this.add(new cardPlayer("p" + i));
        }
    }

    //shuffles the dealer's deck by default, otherwise it takes a pileID string
    shuffle(id="dealer") {
        this.pile(id).shuffle();
    }

    //deals the top card from the "dealer" pile to another pile
    //TODO: deal face up or face down
    deal(pileID) {
        let card = this.pile("dealer").topCard();
        card.isVisible = true;
        this.move(card, "dealer", pileID);
    }

    //do dealRound for 'numOfRounds' times
    dealRounds(numOfRounds= 1) {
        for (let round = 1; round <= numOfRounds; round++){
            this.dealRound();
        }
    }

    //going in order dealing the top card to each player
    dealRound() {
        //TODO: add 'active/in' players and 'inactive/out' players

        for (let key of Object.keys(this.piles)) {
            if (key !== "dealer") {
                this.deal(this.piles[key].id);
            }
        }
    }

    move(cardData, pileOneID, pileTwoID) {
        let fromPile = this.pile(pileOneID);
        let toPile = this.pile(pileTwoID);

        if (cardData === typeof "string") {
            let cardsToMove = fromPile.getCards(cardData);

            for (let card of cardsToMove) {
                card.moveFromTo(fromPile, toPile);
                // TODO: move update into cardUI
                let element = document.getElementById(card.id)
                element.className = element.className.replace(fromPile.id, toPile.id);
            }
        } else {
            cardData.moveFromTo(fromPile, toPile);
            //TODO: integrate into cardUI
            let element = document.getElementsByClassName(cardData.id + " " + fromPile.id)[0];

            if (!element) {
                element = cardUI.createCard(cardData, pileTwoID);
            }

            element.className = element.className.replace(fromPile.id, toPile.id);
            element.remove();
            document.getElementById(toPile.id).appendChild(element);
        }

    }
}