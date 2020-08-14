function videoPokerLogic(game) {

    let card = game.currentSelection;


}


let videoPoker = new cardGame();
videoPoker.currentStepFunction = videoPokerLogic;
// table.newPlayers(4);
// table.dealRounds(2,false);

//TODO: table.startGame()
videoPoker.newPlayers(1);

videoPoker.dealTo("p1", 5);