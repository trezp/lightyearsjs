
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
	//this.discarded = [];

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
	if(this.cards.length === 0){
		if(this.discarded.length === 0){
			throw new Error("NO CARDS LEFT ANYWHERE AHHHHHHH!");
		}
		this.cards = this.discarded;
		this.discarded = [];
	} 
	var index = Math.floor(Math.random() * this.cards.length);
	var cardDrawn = this.cards.splice(index, 1)[0];
	return cardDrawn;
};

Deck.prototype.deal = function(player, numToDeal) {
	numToDeal = numToDeal || 6
	for (var i = 0; i < numToDeal; i++) {
		player.hand.push(this.drawRandom());
	};
};

function Player(playerName){
	this.playerName = playerName;
	this.hand = [];

};

function Game( /*player names*/ ){
	this.players = [];
	this.deck = new Deck();
	for (var i = 0; i < arguments.length; i++) {
		var newPlayer = new Player(arguments[i])
		this.players.push(newPlayer);
		this.deck.deal(newPlayer);
	};
};





