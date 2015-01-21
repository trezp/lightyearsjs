
var play = document.getElementById("play")
play.addEventListener('click', gameEngine, false)

//TO DO
// playerStack
// incrementScore 
// checkScore
// slowPlayer
// playCard
// discardCard

    var players = []

  function getPlayerNames(){
    
    var names = prompt("Please enter up to four player names");
    var splitPlayers = names.split(',');
    
    for(i = 0; i < splitPlayers.length; i++){
      var playerList = splitPlayers[i];
      players.push(playerList);    
    };
    
  };

  


function gameEngine(){
  getPlayerNames();
  game = new Game(players);
  
  for(i = 0; i < game.playerList; i++){
    document.write(game.playerList[i])
  }
}

//Takes in player names as arguments
function Game(){
  //creates an array of players
  this.playerList = [];
  //calls deck function, instantiates new deck 
  this.deck = new Deck();
  
 
 //instantiates a new player for every player argument received 
    //new Player instance takes the index of argument so that an array of
    //players is not passed to new player
  for (var i = 0; i < players.length; i++) {
    var newPlayer = new Player(players[i]);
    //pushes new newPlayer into this.players array 
    this.playerList.push(newPlayer);
    //passes new player instance into deal function
    this.deck.deal(newPlayer);
  };
};

function Player(playerName){
  //MAKES THIS SO PLAYERS CAN INPUT NAMES 
  //input field for names with "Start Game" button
  //names taken in as array, converted into comma-seperated list 
  this.playerName = playerName;
  this.hand = [];
  // this.stack = stack;
  // this.score = 0; 

};

Deck.prototype.deal = function(player, numToDeal) {
  //Sets default number of cards dealt to 6
  numToDeal = numToDeal || 6
  for (var i = 0; i < numToDeal; i++) {
  //deals 6 random cards and pushes to player's hand array 
    player.hand.push(this.drawRandom());
  };
};
//Card constructors 
function Card () { 
  
};

function MileageCard (miles) {
  this.miles = miles;
};

function HazardCard (title) {
  this.title = title; 
};

function RemedyCard (title, fixes) {
  this.title = title;
  this.fixes = fixes;
};

function ImmunityCard (title, prevents) {
  this.title = title;
  this.prevents = prevents; 
};


function Deck () {
  this.cards = [];
  this.discarded = [];
  //pushes new card instances into this.cards array 
  for (var i = 0; i < 10; i++) {
    this.cards.push(new MileageCard(25));
    this.cards.push(new MileageCard(50));
    this.cards.push(new MileageCard(75));
  };

  for (var i = 0; i < 12; i++) {
    this.cards.push(new MileageCard(100));
  };

  for (var i = 0; i < 4; i++) {
    this.cards.push(new MileageCard(200));
    
  };

  for (var i = 0; i < 5; i++) {
    this.cards.push(new HazardCard("Stop"));
  };

  for (var i = 0; i < 3; i++) {
    this.cards.push(new HazardCard("Out of Gas"));
    this.cards.push(new HazardCard("Accident"));
    this.cards.push(new HazardCard("Flat Tire"));
    this.cards.push(new HazardCard("Speed Limit"));
  };

  for (var i = 0; i < 14; i++) {
    this.cards.push(new RemedyCard("Go", "Stop"));
  };

  for (var i = 0; i < 6; i++) {
    this.cards.push(new RemedyCard("Gas", "Out of Gas"));
    this.cards.push(new RemedyCard("Repairs", "Accident"));
    this.cards.push(new RemedyCard("Spare Tire", "Flat Tire"));
    this.cards.push(new RemedyCard("End of Speed Limit", "Speed Limit"));
  };

  this.cards.push(new ImmunityCard("Driving Ace", "Speed Limit"));
  this.cards.push(new ImmunityCard("Emergency Vehicle", "Accident"));
  this.cards.push(new ImmunityCard("Fuel Truck", "Out of Gas"));
  this.cards.push(new ImmunityCard("Puncture Proof", "Flat Tire"));
};

Deck.prototype.drawRandom = function() {
  //checks if there are cards left in the deck
  //Need to test discard function
  if(this.cards.length === 0){
    if(this.discarded.length === 0){
      throw new Error("NO CARDS LEFT ANYWHERE AHHHHHHH!");
    }
    this.cards = this.discarded;
    this.discarded = [];
  };
  //Choses a random number between 1 and the number of cards in deck
  var index = Math.floor(Math.random() * this.cards.length);
  //returns the zero index of the randomly chosen card so a single card
  //instead of an array is returned 
  var cardDrawn = this.cards.splice(index, 1)[0];
  return cardDrawn;
};

