



//ADD REMEDY CARD
//ADD HAZARD CARD
//Card constructor. Gives Card a "miles" property if a mileage card. 
var Card = function(name, cardType, cardValue) {
	this.name = name;  
	this.cardType = cardType;
	this.cardValue = cardValue; 

//Adds "immunity" property if an immunity card. 
	if (this.cardType === "immunity"){
		this.immunity = true;
	} else {
		this.immunity = false;
	};
	if (this.cardType === "remedy"){
		this.canMove = function(){
			return "The car is moving"
		};
//If not a mileage card, the value of the card is zero. 
	if (cardType != "mileage"){
		this.cardValue = 0; 
	};
	};
};

var twentyFive = new Card("25", "mileage", 25);
var goCard = new Card("Go", "remedy");
var stopCard = new Card("Stop", "hazard");
var drivingAce = new Card("Driving Ace", "immunity");
var fifty = new Card("50", "mileage", 50);
var hundred = new Card("100", "mileage", 100); 

//if card has a value > 0, assigns to miles, executes updateScore(); 
var getMiles = function(card){
	miles = card.cardValue;
	if (miles > 0) {
		updateScore();
		return miles 
	};
};

//adds card value to mileage. When getMiles executes updateScore, the
//mileage updates but "You win!" does not print at 200. FIX IT FIX IT
mileage = 0
var updateScore = function(){
	if(mileage <= 200){
		mileage = miles + mileage
		console.log("Mileage is " + mileage)
	} else {
		console.log("You win!")
	}
};

// game 
//	 > has a player 
// 	 > has a deck 
// 
// deck 
//	 > has cards
//	 > makes hands?

// card 
//	 > does something to score 
// 	 > does something to player state 

// player/computer 
// 	 > has a hand 
// 	 	hand > has cards 
// 	 > has a tableau
// 	 	> is collection of cards  
// 	 > has a score 
//	 > has a state?

// var mileageCard = function(miles, name){
// 	Card.call(this, name);
// 	this.cardType = "mileCard";
// 	this.miles = miles;
// };

// var remedyCard = function(name) {
// 	Card.call(this, name);
// 	this.cardType = "remedy";
	
// };

// var immunityCard = function(name, cardType){
// 	remedyCard.call(this, name, cardType);
// 	this.immunity = true;
// };

// var hazardCard = function(name) {
// 	Card.call(this, name)
// 	this.cardType = "hazard";
// };

// var go = function(cardType){
// 	remedyCard.call(this, cardType);
// 	this.name = "go",
// }

// new go = 

// var fuel = function(cardType){
// 	remedyCard.call(this, cardType);
// 	this.name = "fuel",
// }

// var spareTire = function(cardType){
// 	remedyCard.call(this, cardType);
// 	this.name = "Spare Tire",
// }

// var repairs = function(cardType){
// 	remedyCard.call(this, cardType);
// 	this.name = "Repairs",
// }

// var endOfSpeedLimit = function(cardType){
// 	remedyCard.call(this, cardType);
// 	this.name = "End of Speed Limit",
// }

// var stop = function(cardType){
// 	hazardCard.call(this, cardType);
// 	this.name = "Stop",
// }

// var outOfGas = function(cardType){
// 	hazardCard.call(this, cardType);
// 	this.name = "Out of Gas",
// }

// var flatTire = function(cardType){
// 	hazardCard.call(this, cardType);
// 	this.name = "Flat Tire",
// }

// var accident = function(cardType){
// 	hazardCard.call(this, cardType);
// 	this.name = "Accident",
// }

// var speedLimit = function(cardType){
// 	hazardCard.call(this, cardType);
// 	this.name = "Speed Limit",
// }

// var drivingAce = function(cardType, immunity){
// 	immunityCard.call(this, cardType, immunity);
// 	this.name = "drivingAce",
// }

// var unlimitedFuel = function(cardType, immunity){
// 	immunityCard.call(this, cardType, immunity);
// 	this.name = "Unlimited Fuel",
// }

// var punctureProof = function(cardType, immunity){
// 	immunityCard.call(this, cardType, immunity);
// 	this.name = "Puncture Proof",
// }

// var extraTank = function(cardType, immunity){
// 	immunityCard.call(this, cardType, immunity);
// 	this.name = "Extra Tank",
// }

// var rightofWay = function(cardType, immunity){
// 	immunityCard.call(this, cardType, immunity);
// 	this.name = "Right of Way",
// }

// var mileageCard = function(miles, name){
// 	Card.call(this, name);
// 	this.cardType = "mileCard";
// 	this.miles = miles;
// };
// var go = new remedyCard("Go", 14);
// var fuel = new remedyCard("Fuel", 6);
// var spareTire = new remedyCard("Spare Tire", 6);
// var repairs = new remedyCard("Repairs", 6);
// var endOfSpeedLimit = new remedyCard("End of Speed Limit", 6);
// var stop = new hazardCard("Stop", 5);
// var outOfGas = new hazardCard("Out of Gas", 3);
// var flatTire = new hazardCard("Flat Tire", 3);
// var accident = new hazardCard("Accident", 3);
// var speedLimit = new hazardCard("Speed Limit", 4);
// var drivingAce = new immunityCard("Driving Ace");
// var unlimitedFuel = new immunityCard("Unlimited Fuel");
// var punctureProof = new immunityCard("Puncture Proof");
// var extraTank = new immunityCard("Extra Tank");
// var rightOfWay = new immunityCard("Right of Way");
// var twentyFive = new mileageCard(25, "25", 10);
// var fifty = new mileageCard(50, "50", 10);
// var seventyFive = new mileageCard(75, "75", 10);
// var oneHundred = new mileageCard(100, "100", 12);
// var twoHundred = new mileageCard(200, "200", 4);

 
// var getCardInfo = function(card){
// 	if(card.cardType === "mileCard") {
// 		console.log("The name of the card is " + card.name 
// 			+ ", the quantity in the deck is " + card.quantity 
// 			+ ", the card type is " + card.cardType 
// 			+ ", and the mileage value is " + card.miles + ".");
// 	} else if (card.cardType === "hazard"){
// 			console.log("The name of the card is " + card.name 
// 			+ ", the quantity in the deck is " + card.quantity 
// 			+ ", and the card type is " + card.cardType + ".");
// 	} else if (card.cardType === "remedy") {
// 			if (card.immunity === undefined) {
// 			console.log("The name of the card is " + card.name 
// 			+ ", the quantity in the deck is " + card.quantity 
// 			+ ", and the card type is " + card.cardType + ".");
// 			} else {
// 				console.log("This is an immunity card. The name of the card is " + card.name 
// 				+ ", the quantity in the deck is " + card.quantity 
// 				+ ", and the card type is " + card.cardType + ".");
// 		};
// 	} else {
// 		console.log("This is not a valid card.")
// 	};
// };
 
// var deck = [twentyFive, fifty, seventyFive, oneHundred, twoHundred, stop, go, accident, repairs, 
// 			outOfGas, fuel, flatTire, spareTire, speedLimit, endOfSpeedLimit, drivingAce,
// 			extraTank, punctureProof, rightOfWay];		

// ///////////////////////////////////////////////////////////
// getCardInfo(twentyFive);

// var drawCard = function() {
// 		var randomCard = deck[Math.floor(Math.random() * deck.length)];
// 		return randomCard.name; 
// 	}; 

// var makeHand = function(){ 
// 		var hand = [];
// 		for(i = 0; i < 6; i = i + 1) {
// 			hand.push(drawCard());
// 		}
// 		return hand.join(', ')
// 	};



// console.log(twentyFive);
