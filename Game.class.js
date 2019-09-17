function Player(name){
    this.name = name;
    this.points = 0;
}

function Game(endPoints){
    this.endPoints = endPoints;
    this.roundPoints;
    this.players = [];
}

Game.prototype.trowDice = function(){
    let dice = Math.floor(Math.random + 6) + 1;
    if (dice == 1) {
        this.roundPoints = 0;
    } else {
        this.roundPoints = dice;
    }
    console.log(this.roundPoints);
}



