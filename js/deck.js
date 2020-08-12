
//TODO: ********************
// create multi-player game logic, high-card or poker
// create single player game logic, memory game
// *************************

//TODO: add interface information: name, score, money/chips (for wager games)
//TODO: allow dealer to deal from multiple piles/decks; dealFromTo handles this mostly
//TODO: allow player to only see their cards, like in five-card draw poker -> **make dynamic**

let memory = new cardGame();

// table.newPlayers(4);
// table.dealRounds(2,false);

//TODO: table.startGame()
memory.newPlayers(1);
memory.transferAndHide("2.x 3.x 5.x 7.x", "dealer", "p1");
memory.shuffle("p1");

//allow user to pick a card
//allow user to pick a second card
//check to see if they match,
//repeat