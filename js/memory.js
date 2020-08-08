//TODO: Turn code into a class
class Memory {
    //max rounds/picks
    //time limit?
    //game logic


    constructor() {

    }



}

var deck = new playingCardDeck();
var wrapper = document.createElement('div');
wrapper.id = "table";

var clicked = [];
function setAllButtons(state) {
    for (let btn of document.getElementsByTagName("button")) {
        if (btn.className.indexOf("locked") === -1) {
            btn.disabled = !state;
        }
    }
}

function enableAllButtons() {
    setAllButtons(true);
}

function disableAllButtons() {
    setAllButtons(false);
}

for (let card of deck.cards) {
    var element = document.createElement('button');

    element.textContent = card.isVisible ? card.rank : "";
    element.id = card.rank + card.suit;

    if (card.isRed()) {
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
            this.disabled = true;
            let cardOne = clicked[0], cardTwo = clicked[1];

            if ( (cardOne.rank === cardTwo.rank) && (cardOne.isBlack() === cardTwo.isBlack()) ){

                //TODO: lock cards that are flipped after a match
                console.log("match");
                let btn1 = document.getElementById(cardOne.id);
                let btn2 = document.getElementById(cardTwo.id);

                btn1.className += " locked";
                btn2.className += " locked";

            } else {
                console.log("no match");
                disableAllButtons();
                setTimeout(enableAllButtons, 1500);

                setTimeout( () => {
                    cardOne.isVisible = false;
                    cardTwo.isVisible = false;
                    document.getElementById(cardOne.id).textContent = "";
                    document.getElementById(cardTwo.id).textContent = "";
                }, 1500);
            }
            clicked = [];
        }
    };
    wrapper.appendChild(element);
}
document.body.appendChild(wrapper);