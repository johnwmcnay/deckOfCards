class cardUI {

    constructor() {

    }

    static drawToTable(pile, tableID="table") {

        let wrapper = document.getElementById(pile.id);

        if (wrapper === null) {
            console.log(pile.id, "HTML element created");
            wrapper = document.createElement("div");
            wrapper.id = pile.id;
        } else {
            wrapper.innerHTML = "";
        }
        // console.log(pile.pile);
        for (let card of pile.pile) {

            if (pile.isActive) {
                let element = cardUI.createCard(card, pile.id);
                wrapper.appendChild(element);
            }
        }
        document.getElementById(tableID).appendChild(wrapper);
    }

    static createCard(card, deckID) {
        let element = document.createElement("button");

        // element.textContent = card.rank; //TODO: for testing, remove this line when necessary
        element.className = card.id;

        if (card.isRed()) {
            element.className += " card red-card ";
        } else {
            element.className += " card black-card ";
        }
        element.className += deckID;

        element.onclick = function() {
            console.log(card.id) };

        return element;
    }

    static relocate(card, fromPile, toPile) {

        card.moveFromTo(fromPile, toPile);

        let element = document.getElementsByClassName(card.id + " " + fromPile.id)[0];

        if (!element) {
            element = this.createCard(card, toPile.id);
        }
        //TODO: hard-coded for p1, should be dynamic;
        element.textContent = card.isFaceUp || (card.ownerCanLook && toPile.id === "p1") ? card.rank : "";

        element.className = element.className.replace(fromPile.id, toPile.id);
        element.remove();
        document.getElementById(toPile.id).appendChild(element);
    }

    //TODO: updatePile

    // static updateScreen(pile, tableID="table") {
    //     this.drawToTable(pile);
    // }
}