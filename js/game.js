'use strict';

function Game(endPoints, uiElements){
    
    this.endPoints = endPoints;
    this.roundPoints = 0;

    this.setRoundPoints = function (dicePoints) {
        this.roundPoints += dicePoints;
    };
    this.resetRoundPoints = function () {
        this.roundPoints = 0;
    };
    this.players = [];
    this.turn = 0;
    this.message = "";
    this.ui = uiElements;

}

Game.prototype.newGame = function (){
    this.players = [];
    let playersNum = prompt("How many players?");
    let newPlayers = [];
    for (let n = 0; n < playersNum; n++){
        let playerName = prompt(`Give name for player ${n+1}`);
        this.players.push(new Player(playerName));
    }
    let targetPoints = prompt("Give new target points");
    this.endPoints = targetPoints;
    this.init();
    this.updateUi();
}

// function updataUI refreshes UI
Game.prototype.updateUi = function(){
    
    // Round points
    const turnPointsSpan = document.getElementById(this.ui.turnPoints);
    turnPointsSpan.innerHTML = this.roundPoints;

    // Turn
    const turnSpan = document.getElementById(this.ui.turn);
    turnSpan.innerHTML = this.players[this.turn].name;

    // Player data
    const playersDiv = document.getElementById("players");
    let html = "";
    for (let x in this.players){
        html += this.players[x].name + " : " + this.players[x].points + "<br>";
    }
    playersDiv.innerHTML = html;

}

// getPoints -method 
// Saves current turn points to current players points and ends player turn
Game.prototype.getPoints = function(){
    this.players[this.turn].points += this.roundPoints;
    this.resetRoundPoints();
    this.changeTurn();
}

// throwDice -method
// Throws a dice
Game.prototype.throwDice = function(){
    
    let dice = Math.floor(Math.random() * 6) + 1;

    const diceSpan = document.getElementById("dice");
    diceSpan.innerHTML = dice;

    // One forces to end turn
    if (dice == 1) {
        this.resetRoundPoints();
        this.changeTurn();
    } else {
        this.setRoundPoints(dice);
    }

    this.updateUi();

    return dice;

}

// addPlayer -method
// Adds player to game
Game.prototype.addPlayer = function(player){
    this.players.push(player);
}

// init -method
// Initializes game
Game.prototype.init = function(){
    if (this.players.length == 0) {
        this.message = "Not enough players";
        console.error(this.message);
        return false;
    }
    this.roundPoints = 0;
    this.updateUi();
}

// changeTurn -method
// Changes player
Game.prototype.changeTurn = function (){
    if (this.players[this.turn].points >= this.endPoints) {
        alert(this.players[this.turn].name + " WINS!");
        this.init();
        return;
    }
    
    
    this.turn++;
    if (this.turn > this.players.length - 1) {
        this.turn = 0;
    }
    
    this.updateUi();
}

// collectPoints -method
// 
// Game.prototype.collectTurnPoints = function (){
//     this.players[turn].points = this.roundPoints;
//     console.log("Nyt pelaajalla " + this.players[this.turn].name + " on " + this.players[turn].points + " pistettä");
//     this.changeTurn();
// }

