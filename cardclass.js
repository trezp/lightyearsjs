var Card = function(name, quantity, cardType) {
	this.name = name;  
	this.quantity = quantity;
	this.cardType = cardType;
	
};

var mileageCard = function(miles, name, quantity){
	Card.call(this, name, quantity);
	this.cardType = "mileCard";
	this.miles = miles;
};

var remedyCard = function(name, quantity) {
	Card.call(this, name, quantity);
	this.cardType = "remedy";
	
};

var immunityCard = function(name, cardType){
	remedyCard.call(this, name, cardType);
	this.immunity = true;
	this.quantity = 1;
};

var hazardCard = function(name, quantity) {
	Card.call(this, name, quantity)
	this.cardType = "hazard";
};

var go = new remedyCard("Go", 14);
var fuel = new remedyCard("Fuel", 6);
var spareTire = new remedyCard("Spare Tire", 6);
var repairs = new remedyCard("Repairs", 6);
var endOfSpeedLimit = new remedyCard("End of Speed Limit", 6);
var stop = new hazardCard("Stop", 5);
var outOfGas = new hazardCard("Out of Gas", 3);
var flatTire = new hazardCard("Flat Tire", 3);
var accident = new hazardCard("Accident", 3);
var speedLimit = new hazardCard("Speed Limit", 4);
var drivingAce = new immunityCard("Driving Ace");
var unlimitedFuel = new immunityCard("Unlimited Fuel");
var punctureProof = new immunityCard("Puncture Proof");
var extraTank = new immunityCard("Extra Tank");
var rightOfWay = new immunityCard("Right of Way");
var twentyFive = new mileageCard(25, "25", 10);
var fifty = new mileageCard(50, "50", 10);
var seventyFive = new mileageCard(75, "75", 10);
var oneHundred = new mileageCard(100, "100", 12);
var twoHundred = new mileageCard(200, "200", 4);

 
var getCardInfo = function(card){
	if(card.cardType === "mileCard") {
		console.log("The name of the card is " + card.name 
			+ ", the quantity in the deck is " + card.quantity 
			+ ", the card type is " + card.cardType 
			+ ", and the mileage value is " + card.miles + ".");
	} else if (card.cardType === "hazard"){
			console.log("The name of the card is " + card.name 
			+ ", the quantity in the deck is " + card.quantity 
			+ ", and the card type is " + card.cardType + ".");
	} else if (card.cardType === "remedy") {
			if (card.immunity === undefined) {
			console.log("The name of the card is " + card.name 
			+ ", the quantity in the deck is " + card.quantity 
			+ ", and the card type is " + card.cardType + ".");
			} else {
				console.log("This is an immunity card. The name of the card is " + card.name 
				+ ", the quantity in the deck is " + card.quantity 
				+ ", and the card type is " + card.cardType + ".");
		};
	} else {
		console.log("This is not a valid card.")
	};
};
 
var deck = [twentyFive, fifty, seventyFive, oneHundred, twoHundred, stop, go, accident, repairs, 
			outOfGas, fuel, flatTire, spareTire, speedLimit, endOfSpeedLimit, drivingAce,
			extraTank, punctureProof, rightOfWay];		

///////////////////////////////////////////////////////////


var drawCard = function() {
		var randomCard = deck[Math.floor(Math.random() * deck.length)];
		return randomCard.name; 
	}; 

var makeHand = function(){ 
		var hand = [];
		for(i = 0; i < 6; i = i + 1) {
			hand.push(drawCard());
		}
		return hand.join(', ')
	};



console.log(drawCard());
