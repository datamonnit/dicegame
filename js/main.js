'use strict';

// Defining id:s of ui-elements
const uiElements = {
    "dice" : "dice",
    "turnPoints" : "turnPoints",
    "turn" : "turn",
    "getPoints" : "getePoints",
    "players" : "players"
}

// Create a new Game-instance
let game = new Game(20, uiElements);


let player1 = new Player("Osmo");
let player2 = new Player("Keijo");

game.addPlayer(player1);
game.addPlayer(player2);

const btnPlay = document.getElementById("play");
btnPlay.addEventListener("click", game.throwDice.bind(game));

const btnGetPoints = document.getElementById("getPoints");
btnGetPoints.addEventListener("click", game.getPoints.bind(game));

const btnNewGame = document.getElementById("newGame");
btnNewGame.addEventListener("click", game.newGame.bind(game));

// Start game
game.init();





