var Game = function(){
	self = this;
	self.numberDeck = ["Accident", "Accident","Accident", 25, 25, 25, 25, 25, 25, 25, "Out of Gas", "Out of Gas", "Out of Gas", 25, 25, 25, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75,
			  	  100, 100, 100, 100, 100, 100, "Flat Tire", "Flat Tire", "Flat Tire", 100, 100, 100, 100, 100, 100, 200, 200, 200, 200, "Speed Limit", "Speed Limit","Speed Limit",
			  	  "Speed Limit","Speed Limit", "Stop", "Stop","Stop","Stop","Stop", "Repairs", "Repairs","Repairs","Repairs","Repairs","Repairs", "Gasoline", "Gasoline","Gasoline","Gasoline","Gasoline","Gasoline",
			  	  "Spare Tire", "Spare Tire","Spare Tire","Spare Tire","Spare Tire","Spare Tire", "End of Speed Limit", "End of Speed Limit","End of Speed Limit","End of Speed Limit","End of Speed Limit","End of Speed Limit",
			  	  "Go", "Go", "Go","Go","Go","Go","Go","Go","Go","Go","Go","Go","Go","Go", "Driving Ace", "Extra Tank", "Puncture Proof", "Right of Way"];



	self.drawCard = function() {
		var randomCard = numberDeck[Math.floor(Math.random() * numberDeck.length)];
		return randomCard; 
	}; 

	self.makeHand = function(){ 
		var hand = [];
		for(i = 0; i < 6; i = i + 1) {
			hand.push(window.drawCard());
		}
		return hand.join(', ')
	};


	self.printHand = function(player){
		var el = document.getElementById("player"); 
		var printHand = document.createTextNode(makeHand());
		player.appendChild(printHand);

	};
	self.play = function(){
		printHand(player1);
		printHand(player2);
		printHand(player3);
		printHand(player4); 
	}

		return {
			play : play 
		}
	}

var game = Game();
game.play();