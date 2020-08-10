class cardPlayer extends pileOfCards {
    //access to piles
    //viewing rights

    constructor(id = 'p0', cardData) {
        super(id);
        this.pile = []
        this.fill(cardData);
    }
}