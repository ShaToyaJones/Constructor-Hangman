//npm install inquirer
var inquirer = require('inquirer');
// Pull in the letter constructor function we have in Letter.js
var Letter = require("./Letter");
// Pull in the word constructor function we have in Word.js
var Word = require("./Word");

// The Game constructor is responsible for keeping score and controlling the flow of the overall game

//Array of 7 word options for game.
var wordArray = ["technology", "pepsi", "onomonopia", "iammakingalongword", "thingamajigger", "paris", "pseudocode"];
//store solutions here
	//unsure if this is needed?!?!?!?
var chosenWord = "";
//blank array to store the letters of the chosenWord.
var lettersInChosenWord = [];
//counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function Game() {
	this.game = game;

	function chosenWord() {
		var new Word = wordArray[Math.flor(Math.random() * wordArray.length)];
		return new Word;
	}


	inquirer.prompt([
	{
		name: "guess",
		message: "Guess a letter for this word."
	}
	]).then(function(answer){
		var newGame = new Game(answer.guess);

		newGame.printInfo();
	});
}

}

module.exports = Game;
