class playingCard {

    isVisible = false; //deals with whether the card is even displayed
    isFaceUp = false;
    ownerCanLook = true; //TODO: can be more dynamic i.e. an allowed list
    // belongsTo = {};
    // currentLocation = {};

    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.id = suit + rank;
    }

    //turns the card over, toggling isVisible and returning the new value
    flip() {
        //TODO: change flip to deal with another flag
        this.isFaceUp = !this.isFaceUp;
        return this.isFaceUp;
    }

    rankAsText() {
        switch (this.rank) {
            case "J":
                return "Jack";
            case "Q":
                return "Queen";
            case "K":
                return "King";
            case "A":
                return "Ace";
            default:
                return this.rank;
        }
    }

    suitAsText() {
        switch (this.suit) {
            case "H":
                return "Hearts";
            case "S":
                return "Spades";
            case "C":
                return "Clubs";
            case "D":
                return "Diamonds";
        }
    }

    nameAsText() {
        return this.rankAsText() + " of " + this.suitAsText();
    }

    isRed() {
        return (this.suit === "D" || this.suit === "H");
    }

    isBlack() {
        return !this.isRed();
    }

    //TODO: overload it to take variable amount of arguments
    static areSameColor(cardOne, cardTwo) {
        return (cardOne.isBlack() === cardTwo.isBlack());
    }

    static areSameRank(cardOne, cardTwo) {
        return (cardOne.rank === cardTwo.rank);
    }

    static areSoulmates(cardOne, cardTwo) {
        return (playingCard.areSameRank(cardOne, cardTwo) && playingCard.areSameColor(cardOne, cardTwo) );
    }

    moveFromTo(pileOne, pileTwo) {
        pileOne.remove(this);
        pileTwo.add(this);
    }

    addTo(pile) {
        pile.pile.push(this);
    }

    removeFrom(pile) {
        if (pile.hasCard(this)) {
            let cardIndex = pile.pile.indexOf(this);

            if (cardIndex !== -1) {
                pile.pile.splice(cardIndex, 1);
                return true;
            } else if (pile.length > 0) {
                pile.pile.pop();
                return true;
            }
            return false;
        }
    }
}