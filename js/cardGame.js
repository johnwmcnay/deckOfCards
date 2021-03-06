class cardGame extends cardTable {
    // TODO: turn-based; simultaneous turns

    constructor(logicFunction, id='game') {
        super();
        this.steps = [];
        this.currentStep = 0;
        this.currentStepFunction = logicFunction;
        this.currentPlayer = "p1";
        this.gameID = id;
        this.gameLogic = logicFunction;
        this.resetSelections();
    }

    resetSelections() {
        this.selections = new pileOfCards("selections");
    }

    executeStep() {
        this.currentStepFunction(this);
    }

    get currentPile() {
        return this.pile(this.currentPlayer);
    }

    static actionOnClick(card, pile, game) {

        if (this.toggleSelection(card, game)) {
            game.executeStep();
        }

    }

    static toggleSelection(card, game) {
        if (game.selections.hasCard(card)) {
            game.removeSelection(card);
            return false;
        } else {
            game.addSelection(card);
            return true;
        }
    }

    flipCards(...cards) {
        for (let card of cards) {
            card.flip();
        }
    }

    removeSelection(card) {
        this.selections.remove(card);
        let element = document.getElementsByClassName(card.id)[0];
        element.classList.remove("selected");
    }

    get currentSelection() {
        let pile = this.selections.pile;
        return pile[pile.length - 1];
    }

    addSelection(card) {
        this.selections.add(card);
        let element = document.getElementsByClassName(card.id)[0];
        element.classList.add("selected");
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

    newPlayers(numOfPlayers) {
        for (let i = 1; i <= numOfPlayers; i++) {
            this.addPile(new cardPlayer("p" + i));
        }
    }

    // addStep(stepFunction) {
    //     this.steps.push(stepFunction);
    // }
    //
    // advance() {
    //     this.currentStep += 1;
    //     if (this.currentStep === this.steps.length) {
    //         this.currentStep = 0;
    //     }
    // }


}