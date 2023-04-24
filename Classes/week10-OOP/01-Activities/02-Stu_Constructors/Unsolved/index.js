// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

function Developer(name, tech) {
	this.DevName = name;
	this.Devtech = tech;

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
	this.introduction = () => {
	console.log(`This is ${this.name} and their tech is ${this.tech}`);
}};


// TODO: Create a new object using the 'Developer' constructor

const joseph = new Developer("Joseph","ColdFusion");

// TODO: Call the 'introduction()' method on the new object

joseph.introduction();