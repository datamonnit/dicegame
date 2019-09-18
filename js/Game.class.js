'user strict';

function Player(name){
    this.name = name;
    this.points = 0;
}

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

Game.prototype.updateUi = function(){
    // Round points
    const turnPointsSpan = document.getElementById(this.ui.turnPoints);
    turnPointsSpan.innerHTML = this.roundPoints;

    // Turn
    const turnSpan = document.getElementById(this.ui.turn);
    turnSpan.innerHTML = this.players[this.turn].name;

}

Game.prototype.getPoints = function(){
    this.players[this.turn].points += this.roundPoints;
    this.resetRoundPoints();
    this.changeTurn();
}

Game.prototype.trowDice = function(){
    let dice = Math.floor(Math.random() * 6) + 1;

    if (dice == 1) {
        this.resetRoundPoints();
        this.changeTurn();
    } else {
        this.setRoundPoints(dice);
    }

    this.updateUi();

}

Game.prototype.addPlayer = function(player){
    this.players.push(player);
}

Game.prototype.init = function(){
    if (this.players.length == 0) {
        this.message = "Not enough players";
        console.error(this.message);
        return false;
    }
    this.roundPoints = 0;
    this.updateUi();
}

Game.prototype.changeTurn = function (){
    this.turn++;
    if (this.turn > this.players.length - 1) {
        this.turn = 0;
    }
    console.log("Nyt on " + this.players[this.turn].name + " vuoro");
}

Game.prototype.collectTurnPoints = function (){
    this.players[turn].points = this.roundPoints;
    console.log("Nyt pelaajalla " + this.players[this.turn].name + " on " + this.players[turn].points + " pistettä");
    this.changeTurn();
}

