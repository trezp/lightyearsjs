//TO DO
// playerStack
// incrementScore 
// checkScore
// slowPlayer
// playCard
// discardCard

//Current issues: 
  //player names and individual cards are cumbersome to access
    //cards are referenced first by hazard or remedy, which isn't helpful to me
    //or players 
  //needs to be refactored so everything isn't in the global scope


(function(){

//Card constructors
function Card (title, value, stops, slows) {
  this.title = title;
  this.value = value; 
  this.stops = false;
  this.slows = false;  
};

function Deck () {
  this.cards = [];
  this.discarded = [];
  //pushes new card instances into this.cards array
  for (var i = 0; i < 10; i++) {
    this.cards.push(new Card("25miles", 25));
    this.cards.push(new Card("50miles",50));
    this.cards.push(new Card("75miles",75));
  };
  for (var i = 0; i < 12; i++) {
    this.cards.push(new Card("100miles",100));
  };
  for (var i = 0; i < 4; i++) {
    this.cards.push(new Card("200miles",200));
  };
  for (var i = 0; i < 5; i++) {
    this.cards.push(new Card("Stop", 0, true, false));
  };
  for (var i = 0; i < 3; i++) {
    this.cards.push(new Card("Out of Gas", 0, true, false));
    this.cards.push(new Card("Accident", 0, true, false));
    this.cards.push(new Card("Flat Tire", 0, true, false));
    this.cards.push(new Card("Speed Limit", 0, true, true));
  };
  for (var i = 0; i < 14; i++) {
    this.cards.push(new Card("Go"));
  };
  for (var i = 0; i < 6; i++) {
    this.cards.push(new Card("Gas"));
    this.cards.push(new Card("Repairs"));
    this.cards.push(new Card("Spare Tire"));
    this.cards.push(new Card("End of Speed Limit"));
  };
    this.cards.push(new Card("Driving Ace"));
    this.cards.push(new Card("Emergency Vehicle"));
    this.cards.push(new Card("Fuel Truck"));
    this.cards.push(new Card("Puncture Proof"));
};

Deck.prototype.deal = function(player, numToDeal) {
    //Sets default number of cards dealt to 6
    numToDeal = numToDeal || 6
    for (var i = 0; i < numToDeal; i++) {
    //deals 6 random cards and pushes to player's hand array
    player.hand.push(this.drawRandom());
    };
  }

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

//Takes in player names as arguments
function Game( /*player names*/ ){
//creates an array of players
  this.players = [];
  //calls deck function, instantiates new deck
  this.deck = new Deck();
  for (var i = 0; i < arguments.length; i++) {
    //instantiates a new player for every player argument received
    //new Player instance takes the index of argument so that an array of
    //players is not passed to new player
    var newPlayer = new Player(arguments[i]);
    //pushes new newPlayer into this.players array
    this.players.push(newPlayer);
    //passes new player instance into deal function
    this.deck.deal(newPlayer);
    };
};

Game.prototype.getPlayerByName = function(playerName) {
  for (i = 0; i < this.players.length; i++) {
    if (this.players[i]['playerName'].toLowerCase == playerName.toLowerCase) { 
      
    } 
  }; 
  return this.players[i];
}

  currentPlayerIndex = 0;
  //returns the current player in the player array by index
Game.prototype.getCurrentPlayer = function(){
    while(currentPlayerIndex < this.players.length){
    return this.players[currentPlayerIndex];     
    }
  }
  //loops through the player array by incrementing the currentPlayerIndex
Game.prototype.executeTurn = function(){
      var currentPlayer = this.getCurrentPlayer();
      currentPlayerIndex++;
      //resets currentPlayerIndex to 0 when loop reaches the end of player array
      if (currentPlayerIndex === this.players.length){
        currentPlayerIndex = 0;
      }
      return(currentPlayer)
      }

  Game.prototype.displayHand = function() {
    this.players.forEach(console.log(this.players.hand))
  };

   

function Player(playerName){
    //MAKE THIS SO PLAYERS CAN INPUT NAMES
    //input field for names with "Start Game" button
    //names taken in as array, converted into comma-seperated list
    this.playerName = playerName;
    this.hand = [];
    this.stack = [];
    this.score = 0; 
    this.stalled = true;

  };

game = new Game("Bob", "Joe", "Jim", "Treasure", "Tim");
//access individual player names = game.players[i].playerName;
//access individual cards = game.players[i].hand[i].title;
  // function keepScore(){
  //   count = 0;
  //   if(game.players[1].hand[1].miles){
  //     var score = count + game.players[1].hand[1].miles
  //     console.log(score);
  //   } else {
  //     console.log("You do not have a go card")
  //   }
  // }
  // keepScore();

    
})();





