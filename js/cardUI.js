class cardUI {

    constructor() {

    }

    static drawToTable(pile, table, game) {
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
            let element = cardUI.createCard(card, pile, table, game);
            wrapper.appendChild(element);
        }
        document.getElementById(table.id).appendChild(wrapper);

        return true;
    }

    static createCard(card, deck, table, game) {
        let element = document.createElement("button");

        element.textContent = (card.isFaceUp || card.ownerCanLook) ? card.rank : " ";
        element.className = card.id;
        element.disabled = card.isDisabled;

        if (card.isRed()) {
            element.className += " card red-card ";
        } else {
            element.className += " card black-card ";
        }
        element.className += deck.id;

        element.onclick = function () {
            cardGame.actionOnClick(card, deck, table, game);
        }
        return element;
    }

    static createTable(id) {
        let element = document.createElement("div");
        element.id = id;
        document.body.appendChild(element);
    }

    static relocate(card, fromPile, toPile) {

        card.moveFromTo(fromPile, toPile);

        let element = document.getElementsByClassName(card.id + " " + fromPile.id)[0];

        if (!element) {
            element = this.createCard(card, toPile);
        }
        //TODO: hard-coded for p1, should be dynamic;
        element.textContent = card.isFaceUp || (card.ownerCanLook && toPile.id === "p1") ? card.rank : "";

        element.className = element.className.replace(fromPile.id, toPile.id);
        element.remove();
        document.getElementById(toPile.id).appendChild(element);
    }

    // static disableElement(element) {
    //     element.disabled = true;
    // }
}