(function(){


function startGame(){
	var play = prompt("Do you have what it takes to defeat Grant the Almighty Chicken of Death?");
	if (play === "yes"){
		character.name = prompt("That I doubt. What shall I call you?");
		startCombat();
	} else {
		console.log("Maybe next time."); 
	}
}

var character = {
	name: null,
	health: 40, 
	healsRemaining: 2,
	wins: 0,
	generateAttackDamage: function(){
		return Math.floor((Math.random() * 3) + 1);
	},
	heal(){
		this.health += Math.floor((Math.random() * 10) + 1);
		this.healsRemaining--; 
	}
}

var grant = {
	name: "Grant the Almighty Chicken of Death",
	health: 10, 
	generateAttackDamage: function(){
		return Math.floor((Math.random() * 5) + 1);
	}
}

function startCombat(){
	while(character.health > 0 && character.wins < 5){
	 
  		var newRound = prompt("Would you like to attack, heal or quit?");
		if(newRound === "attack"){
			grant.health -= character.generateAttackDamage();
    		console.log(grant.name +" has " + grant.health + " hitpoints remaining");
    		character.health -= grant.generateAttackDamage();
    		console.log(character.name + " has " + character.health + " hitpoints remaining");
		} if(newRound === "heal"){
			character.heal();
			console.log("It hits you right in the heals! " + character.name + " has regenerated to " + character.health + " hitpoints!");
			console.log(character.name + " has " + character.healsRemaining + " heals remaining.");
		} if(newRound === "heal" && character.healsRemaining === 0){
			console.log("You have no heals remaining!")
		}
		else if(newRound === "quit"){
			break; 
		}
		if (grant.health <= 0){
		character.wins++; 
		console.log(character.name + " now has " + character.wins + " wins. That's not quite 5. You need 5. Keep battling!");
		grant.health = 10;
		}
		if (character.wins === 5){
		  console.log("You have won the battle!! Honestly I can't believe it. The odds were realllly stacked against you. Good job.");
		}
		if(character.health <= 0){
			console.log("You have lost the battle!! As expected, the Chicken of Death claims yet another poor soul.");
			break;
		}
	}
}

startGame();
})();