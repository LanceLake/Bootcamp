// TODO: Import the parent class
const Vehicle = require('./vehicle');

// TODO: Create a `Boat` class that extends the `Vehicle` class

class Boat extends Vehicle 
{
  constructor(id, type, passengers) {
    super(id, 0, 'ooooohhhhhh');

	this.type = type;
	this.passengers = passengers;
  }

  useHorn(){console.log(this.sound)};

	crewSoundOff()
	{
		this.passengers.forEach(passenger => {
			console.log(`${passenger} reporting for duty!`);	
		});
	}

}

const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];



const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();

