//TODO: create high-card game logic
//TODO: add interface information: name, score, money/chips (for wager games)
//TODO: allow dealer to deal from multiple piles/decks; dealFromTo handles this mostly
//TODO: allow player to only see their cards, like in five-card draw poker -> **make dynamic**

let table = new cardTable();

//TODO: add function to create a default dealer
table.add(new cardPlayer("dealer", playingCardDeck.defaultDeck));
table.pile("dealer").isActive = false;
table.shuffle();

// table.newPlayers(4);
// table.dealRounds(2,false);

table.newPlayers(1);

//TODO: still needs to update
table.transferAndHide("2.x 3.x 5.x 7.x", "dealer", "p1");
table.shuffle("p1"); //TODO: gets shuffled but doesn't update on the screen

