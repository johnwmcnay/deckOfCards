class cardUI {

    constructor() {

    }

    static drawToTable(pile, tableID="table") {

        let wrapper = document.createElement("div");
        wrapper.id = pile.id;
        for (let card of pile.pile) {

            if (card.isVisible) {
                let element = cardUI.createCard(card, pile.id);

                wrapper.appendChild(element);
            }
        }
        document.getElementById(tableID).appendChild(wrapper);
    }

    static createCard(card, deckID) {
        let element = document.createElement("button");

        //element.textContent = card.isVisible ? card.rank : "";
        element.textContent = card.rank; //TODO: for testing, remove this line when necessary
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

    static updateScreen(pile) {
        // document.getEl
    }
}