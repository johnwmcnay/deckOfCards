//TODO: create multi-player game logic, high-card or poker
//TODO: create single player game logic, memory game
//TODO: add interface information: name, score, money/chips (for wager games)
//TODO: allow dealer to deal from multiple piles/decks; dealFromTo handles this mostly
//TODO: allow player to only see their cards, like in five-card draw poker -> **make dynamic**

let table = new cardTable();

// table.newPlayers(4);
// table.dealRounds(2,false);

table.newPlayers(1);
table.transferAndHide("2.x 3.x 5.x 7.x", "dealer", "p1");
table.shuffle("p1");