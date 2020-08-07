// describe("decimalPressed", function() {
//
//     it("should be a defined function", function () {
//
//         expect(typeof decimalPressed).toBe("function");
//
//     });
// });

describe("playingCard", function() {

    it("class should be defined", function () {

        expect(typeof playingCard).toBe("function");

    });
    it("creating a new instance should be type object", function () {

        expect(typeof(new playingCard())).toBe("object");
    });

    it("flip() should toggle isVisible, storing and also returning the value", function () {

        expect((function () {
            var card = new playingCard();
            var previousVisibility = card.isVisible;
            var flipResult = card.flip();

            return ((flipResult === card.isVisible) && (card.isVisible !== previousVisibility));
        })()).toBe(true);

    });


});


describe("playingCardDeck", function() {

    it("class should be type function", function () {

        expect(typeof playingCardDeck).toBe("function");

    });
});