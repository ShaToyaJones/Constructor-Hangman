// Pull in the letter constructor function we have in Letter.js
var Letter = require("./Letter")

// The Word constructor is responsible for creating an array of Letter objects
// and determining if the user guessed every Letter correctly.

function Word(word) {
  // Save the array of letter objects
  this.letters = word.split("").map(function (letter) {
  	return new Letter(letter)
  });
};


// Setting the method on the prototype means all instances of Word share this code
// but when it is called, `this` refers to that particular instance
Word.prototype.getSolution = function() {
  // Loop over the letter objects array and spit out a string of the solution.
return this.letters.map(function (letter) {
	return letter.getSolution();
}).join("");

};


// Setting `toString()` as a method lets us concatenate it like we would a string!
Word.prototype.toString = function() {
return this.letters.join(""); 
};

Word.prototype.guessLetter = function(char) {

	var foundLetter = false;
  // Checks to see if any of the letters in the array match the user's guess.
	this.letters.forEach(function(letter) {
		if (letter.guess(char)) {
			foundLetter = true;
		}

	});
  	return foundLetter;
};

// Returns true if all letters in the word have been guessed
Word.prototype.guessedCorrectly = function() {
	return this.letters.every(function(letter) {
	return letter.isVisible	
	});
  // The `every` method returns true if the callback function returns true for every element in the array

};

module.exports = Word;
