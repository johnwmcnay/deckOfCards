var wrapper = document.createElement('div');
wrapper.id = "table";

for (let card of deck.cards) {
    var element = document.createElement('button');

    console.log(deck.cards);

    element.textContent = card.isVisible ? card.rank : "";
    element.id = card.rank + card.suit;

    //TODO isRed isBlack color need to be added to playingCard card.id
    if (card.suit === "H" || card.suit === "D"){
        // console.log("red");
        element.className = "card red-card";
    } else {
        // console.log("black");
        element.className = "card black-card";
    }
    element.onclick = function() {
        console.log(this.id);
        if (card.flip()) {
            this.textContent = card.rank;
        } else {
            this.textContent = "";
        }
    };
    wrapper.appendChild(element);
}
document.body.appendChild(wrapper);