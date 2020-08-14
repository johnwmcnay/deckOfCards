class cardUI {

    constructor() {

    }

    //TODO: redo drawing to minimizing areas that need to be updated; update only what needs to be updated
    // updates should happen in the game loop
    static drawToTable(pile, game) {
        if (!pile.isActive) {
            return false;
        }

        let wrapper = document.getElementById(pile.id);

        if (wrapper === null) {
            wrapper = document.createElement("div");
            wrapper.id = pile.id;
        } else {
            wrapper.innerHTML = "";
        }

        for (let card of pile.pile) {
            let element = document.getElementsByClassName(card.id)[0];
            element = cardUI.createCard(card, pile, game);
            wrapper.appendChild(element);
        }
        document.getElementById(game.tableID).appendChild(wrapper);

        return true;
    }

    static createCard(card, pile, game) {
        let element = document.createElement("button");

        element.textContent = (card.isFaceUp || (card.ownerCanLook && pile.id === "p1")) ? card.rank : " ";
        element.className = card.id;
        element.disabled = card.isDisabled;

        if (card.isRed()) {
            element.className += " card red-card ";
        } else {
            element.className += " card black-card ";
        }
        element.className += pile.id;

        element.onclick = function () {
            cardGame.actionOnClick(card, pile, game);
        }
        return element;
    }

    static createTable() {
        let element = document.createElement("div");
        element.id = "table";
        document.body.appendChild(element);
    }

    static setAllButtons(state) {
        for (let btn of document.getElementsByTagName("button")) {

            if (btn.className.indexOf("locked") === -1) {
                btn.disabled = !state;
            }
        }
    }

    static enableAllButtons() {
        cardUI.setAllButtons(true);
    }

    static disableAllButtons() {
        cardUI.setAllButtons(false);
    }

    static lockCards(...cards) {
        for (let card of cards) {
            let btn = document.getElementsByClassName(card.id)[0];
            btn.className += " locked";
            card.isLocked = true;
        }
    }


    // static disableElement(element) {
    //     element.disabled = true;
    // }
}