function videoPokerLogic(game) {

    //TODO: ability to create various UI buttons



}

function drawFunction() {

}


let videoPoker = new cardGame();


cardUI.createUIButton("Draw", "draw", drawFunction);


videoPoker.currentStepFunction = videoPokerLogic;
videoPoker.newPlayers(1);
videoPoker.dealTo("p1", 5);