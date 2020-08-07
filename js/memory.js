var wrapper = document.createElement('div');
wrapper.id = "table";

var clicked = [];

for (let card of deck.cards) {
    var element = document.createElement('button');

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
        if (card.flip() && clicked.length < 2) {
            this.textContent = card.rank;
        } else {
            this.textContent = "";
        }
        if (clicked.length === 0) {
            clicked.push(card);
            this.disabled = true;
        } else if (clicked.length === 1) {
            clicked.push(card);

        }
        console.log(clicked);
    };
    wrapper.appendChild(element);
}
document.body.appendChild(wrapper);