class Character {
	// TODO: Add a constructor
	constructor(name, strength, hitPoints) {
		this.name = name;
		this.strength = strength;
		this.hitPoints = hitPoints;
	}

	// TODO: Create a printStats() method that console logs `this.name`, `this.strength`, and `this.hitPoints`
	printStats() {
		console.log(`${this.name} has a strength of ${this.strength} and ${this.hitPoints} hitpoints.`);
	}

	// TODO: Create a isAlive() method that returns a boolean based on whether or not a character's "hitpoints" are <= 0
	isAlive() {
		if(this.hitPoints <= 0) {return false;} else {return true;}
	}

	// TODO: Create a attack() method that accepts an opponent object and decreases the opponent's "hitPoints" by this character's strength
	attack(defender) {
		let crit = Math.floor(Math.random() * 19) + 1;
		let randomDamage = (Math.floor(Math.random() * 6)) - 3;

		let damage = this.strength + randomDamage

		if(crit == 20) {
			damage = damage * 2;
			console.log(`${this.name} HITS A CRIT!`);
		}

		defender.hitPoints = defender.hitPoints - (damage);
		console.log(`${this.name} hits ${defender.name} for ${damage} hitpoints of damage.`);

	}




}

// Creates two unique characters using the "character" constructor
const grace = new Character('Grace', 30, 75);
const dijkstra = new Character('Dijkstra', 20, 105);

// This keeps track of whose turn it is
let graceTurn = true;

grace.printStats();
dijkstra.printStats();

const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!grace.isAlive() || !dijkstra.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
  } else if (graceTurn) {
    grace.attack(dijkstra);
    dijkstra.printStats();
  } else {
    dijkstra.attack(grace);
    grace.printStats();
  }

  // Switch turns
  graceTurn = !graceTurn;
}, 2000);
