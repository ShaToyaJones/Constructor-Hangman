*****This is a game of Hangman using the command line and constructor functions.*****

var fs = require("fs");
var Word = require("./Word");
var Letter = require("./Letter");

//Require npm Prompt package
var prompt = require("prompt");
 
//game variables 
var wordList = ["pepsi", "clothes", "playstation", "vacation", "technology"];

//holds solutions
var chosenWord = "";
//place holder for the letters chosen by user.
var lettersInChosenWord = [];
//blanks to display to user ***Unsure if this is needed.
var numBlanks = 0;
//displays the blanks and the chosen letters.
var blanksAndSuccess = [];
//will hold the users wrong guesses.
var wrongGuesses = [];

//Create a Word constructor function in its own file.
	//***update***File has been created.
var Word = function() {
	this.Word = word;

	
	}
};

//Create a Letter constructor function in its own file.
	//***update***File has been created.
var Letter = function() {
	this.Letter = letter;

};

//Export the Word and Letter files.




*****Hangman Game Pseudocode*****
//User is created/create a user.
// Start the prompt 
prompt.start();
 
// Get one property from the user: username 
prompt.get(["username"], function (err, result) {
    
// Log the results.     
   console.log("Command-line input received:");
   console.log("  username: " + result.username);
});

//You get 9 guesses:
		//game over--->you lose!!!


//Start the game.
	//A word is randomly selected.
		//possibly based on a category.
			//Let the user know how many letters the word contains.


//The user guesses a letter.


//The letter that the user guesses is saved in a container. 
	//***Display the letter the user guesses.


//The application checks to see if the letter chosen is apart of the word.
	//if the letter is apart of the word
			//the letter is displayed in its correct position of the word.
		//else
			//minus one from the guessesLeft

//Keep track of the users remaining guesses.
	//possibly display them to the user after each incorrect guess.


	//Prompt the user if they would like to end the game once they do not have any attmpts left.