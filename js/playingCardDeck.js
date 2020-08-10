class playingCardDeck extends pileOfCards {

    constructor(id='deck') {
        super();
        this.id = id;
        this.fill(playingCardDeck.defaultDeck);
        this.shuffle();
    }

    //returns an array of playingCard objects
    static defaultDeck() {
        let deck = new pileOfCards();
        for (let suit of ['H', 'S', 'D', 'C']) {
            for (let rank of ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']) {
                let card = new playingCard(rank, suit);
                card.addTo(deck);
            }
        }
        return deck.pile;
    }

    static randomCard() {
        let randomNumber = Math.floor(Math.random() * 52);
        let cardArray = playingCardDeck.defaultDeck();
        return cardArray[randomNumber];
    };
}