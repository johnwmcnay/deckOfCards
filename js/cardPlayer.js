class cardPlayer extends pileOfCards {
    //access to piles
    //viewing rights

    constructor(id = 'p0', cardData) {
        super(id);
        this.pile = []
        this.isActive = true;
        this.fill(cardData);
    }

    static cannotLookAt(cardArray) {
        for (let card of cardArray) {
            card.ownerCanLook = false;
        }
    }
}