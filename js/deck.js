//TODO: find a better home for game logic
function memoryLogic() {

    console.log(this);
    let game = this;
    let card = this.currentSelection;
    let pile = this.currentPile;

    card.flip();
    card.isDisabled = true;

    this.UI.drawToTable(pile, this);

    if (this.selections.length === 2) {
        let cardOne = this.selections.pile[0];
        let cardTwo = this.selections.pile[1];

        if (playingCard.areSoulmates(cardOne, cardTwo)) {
            cardUI.lockCards(cardOne, cardTwo);
            this.UI.drawToTable(pile, this);
            this.resetSelections();
        } else {
            cardUI.disableAllButtons();
            this.flipCards(cardOne, cardTwo);
            setTimeout(function() {
                console.log(game);
                console.log(game.resetSelections);
                game.resetSelections();
                cardUI.enableAllButtons();
                cardOne.isDisabled = false; //TODO: find a better way
                cardTwo.isDisabled = false;
                game.UI.drawToTable(pile, game);
            }, 1500);
        }
    }
}

//TODO: ********************
// create multi-player game logic, high-card or poker
// create single player game logic, memory game
// *************************

//TODO: add interface information: name, score, money/chips (for wager games)
//TODO: allow dealer to deal from multiple piles/decks; dealFromTo handles this mostly
//TODO: allow player to only see their cards, like in five-card draw poker -> **make dynamic**

let memory = new cardGame(memoryLogic);
// table.newPlayers(4);
// table.dealRounds(2,false);

//TODO: table.startGame()
memory.newPlayers(1);
memory.transferAndHide("2.x 3.x 5.x 7.x", "dealer", "p1");
memory.shuffle("p1");

//allow user to pick a card
//allow user to pick a second card
//check to see if they match,
//repeat