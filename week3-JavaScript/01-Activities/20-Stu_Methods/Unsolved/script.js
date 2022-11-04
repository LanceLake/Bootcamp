var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
// It's done when the string "Canis Major" is added as the first element of the constellations array and no elements are removed.

// It's done when "Venus" is removed from the planets array.

// It's done when the arrays constellations and planets are joined to form a new array named galaxy. The arrays constellations and planets should not be altered.

// It's done when the string "polaris" is converted into all capital letters and the new string is stored in a variable.

console.log(constellations);
var newConstellations = constellations.unshift("Canis Major");
console.log(newConstellations);

console.log("================================");

console.log(planets);
planets = planets.pop("Canis Major");
console.log(planets);

console.log("================================");

var galaxy = constellations.concat(planets);
console.log(galaxy);

console.log("================================");

var starUppercase = star.toUpperCase(star);
console.log(starUppercase);