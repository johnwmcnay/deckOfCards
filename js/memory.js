//TODO: Turn code into a class
class gameRules {
    //max rounds/picks
    //time limits?
    //game logic
    //number of decks and players
    id = 'gameRules';
    numberOfDecks = 0;
    numberOfPlayers = 0;
    piles;

    constructor() {

    }

    setup() {

    }

}

var deck = table.piles[0]
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

for (let card of deck.pile) {
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

            if ( playingCard.areSoulmates(cardOne, cardTwo) ){

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