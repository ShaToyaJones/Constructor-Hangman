// The Letter constructor is responsible for displaying either an underscore
// or the underlying character for each letter in the word

function Letter(char) {
  // If a character is not a number or a letter, make it visible right away
  	this.char = char;
	this.isVisible = false;

	// Save the underlying character
}

// Returns either an underscore or the underlying character depending on `this.visible`
// because we call this function toString, when we call `this.letters.join` in
// Word.js, JavaScript automatically uses the value we return here
Letter.prototype.toString = function() {
	if (this.isVisible) {
		return this.char;
	}
	return "_";
 };

// Function that returns the character.
Letter.prototype.getSolution = function() {
	return this.char;
	 };

// Accepts a user's guess, check if the guess is equal to the letter char, return true.
// Otherwise return false.
Letter.prototype.guess = function(charGuess) {
	if (charGuess.toLowerCase() === this.char.toLowerCase()) {
		this.isVisible = true;
	}
	return this.isVisible;
 };

module.exports = Letter;
