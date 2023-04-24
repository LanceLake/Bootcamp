function Algo() {}

Algo.prototype.reverse = function(str) {
	// TODO: Your code here
	const string = str.split("").reverse().join("");
	return string;

};

Algo.prototype.isPalindrome = function(str) {
	// TODO: Your code here
	return this.reverse(str) === str;
};

Algo.prototype.capitalize = function(str) {
	// TODO: Your code here 
	const words = str.split(" ");
	const capitalString = words.map((word) => {
	// Can do const firstLetter = word[0];
	const firstLetter = word.substring(0,1);

	const restOfString = word.substring(1);

	return `${firstLetter.toUpperCase()}${restOfString}`;

	})

	return capitalString.join(" ");

};

module.exports = Algo;
