class cardGame extends cardTable {
    // TODO: turn-based; simultaneous turns

    tables = [];

    constructor(id='game') {
        super();

        //TODO: addTable
        this.id = id;


    }

    static actionOnClick(card, deck) {
        console.log(card);
        console.log(deck);
        card.flip()
        cardUI.drawToTable(deck, "table");
    }

    //memory logic
    gameLoop () {
        //wait for card pick

        //allow user to pick a card
        //allow user to pick a second card
        //check to see if they match,
        //repeat
    }
}


