const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
it("should reverse 'Hello World!'.", () => {
	const phrase = "Hello World!";
	const reversePhrase = "!dlroW olleH";
	const result = new Algo().reverse(phrase);

	expect(result).toEqual(reversePhrase);
	});

});

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
	it("should return true if phrase is a palindrome", () => {
		const phrase = "racecar";
		const result = new Algo().isPalindrome(phrase);
		expect(result).toEqual(true);
	});

  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
	it("should return a string where all first letters are capitals", () => {
		const phrase = "race car";
		const correctPhrase = "Race Car";
		const result = new Algo().capitalize(phrase);
		expect(result).toEqual(correctPhrase);
	});

  });
});


