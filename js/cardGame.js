class cardGame {
    // TODO: turn-based; simultaneous turns

    tables = []; //TODO: multiple tables, addTable()

    constructor(id='game') {
        //TODO: set an interval
        this.rules = new gameRules();
        this.addTable()
        this.id = id;
    }

    static actionOnClick(card, deck, table, game) {
        console.log(card);
        console.log(deck);
        card.flip();
        card.isDisabled = true;
        cardUI.drawToTable(deck, table, game);
        // rules.advance()
    }

    //memory logic
    gameLoop () {
        //TODO: waitForClick() or waitForInput()
        //TODO: waitForClick()
        //TODO: game logic, comparison, match
        //TODO: flip cards back over or not
        //TODO: end game or repeat
    }

    waitForInput() {

    }

    addTable(id="table") {
        this.tables[id] = new cardTable(id);
    }

    table(tableID) {
        return this.tables[tableID];
    }

    newPlayers(numOfPlayers, tableID="table") {
        for (let i = 1; i <= numOfPlayers; i++) {
            this.table(tableID).addPile(new cardPlayer("p" + i));
        }
    }

    transfer(cardData, pileOneID, pileTwoID, tableID="table", canLook = true) {
        let table = this.table(tableID);
        table.transfer(cardData, pileOneID, pileTwoID, tableID, canLook);
    }

    transferAndHide(cardData, pileOneID, pileTwoID, tableID="table") {
        this.table(tableID).transfer(cardData, pileOneID, pileTwoID, false);
    }

    shuffle(pileID="dealer", tableID="table") {
        let table = this.table(tableID);
        let pile = table.pile(pileID);
        pile.shuffle();
        cardUI.drawToTable(pile, table, this);
    }

}


