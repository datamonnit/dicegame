'use strict';

const uiElements = {
    "turnPoints" : "turnPoints",
    "turn" : "turn",
    "getPoints" : "getePoints"
}

let game = new Game(20, uiElements);

let player1 = new Player("Osmo");
let player2 = new Player("Keijo");

game.addPlayer(player1);
game.addPlayer(player2);

const btnPlay = document.getElementById("play");
btnPlay.addEventListener("click", game.trowDice.bind(game));

const btnGetPoints = document.getElementById("getPoints");
btnGetPoints.addEventListener("click", game.getPoints.bind(game));

// Start game
game.init();





