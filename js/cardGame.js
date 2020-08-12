class cardGame extends cardTable {
    // TODO: turn-based; simultaneous turns

    tables = [];

    constructor(id='game') {
        super();
        //TODO: set an interval

        //TODO: addTable
        this.id = id;


    }

    static actionOnClick(card, deck) {
        console.log(card);
        console.log(deck);
        card.flip();
        card.isDisabled = true;
        cardUI.drawToTable(deck, "table");
        //TODO: next step
    }

    //memory logic
    gameLoop () {
        //TODO: waitForClick() or waitForInput()
        //TODO: waitForClick()
        //TODO: game logic, comparison, match
        //TODO: flip cards back over or not
        //TODO: end game or repeat
    }
}


