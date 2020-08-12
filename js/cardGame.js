class cardGame extends cardTable {
    // TODO: turn-based; simultaneous turns

    tables = []; //TODO: multiple tables, addTable()

    constructor(id='game') {
        super();
        //TODO: set an interval
        this.rules = new gameRules();
    }

    static actionOnClick(card, deck, table) {
        console.log(card);
        console.log(deck);
        card.flip();
        card.isDisabled = true;
        cardUI.drawToTable(deck, table);
        // table.advance()
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
}


