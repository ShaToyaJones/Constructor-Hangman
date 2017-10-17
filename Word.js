var Letter = require("./Letter");



//Create a Word constructor function in its own file.
	//***update***File has been created.
function createWordArray(word) {

var wordArray = [];
	//loop through the word
for (var i = 0; i < word.length; i++) {
	wordArray.push(new Letter(word[i]));

}
	//for each letter create a letter object that will hold that character

//return array with letter object
return wordArray;
}


var Word = function(statement) {
	this.word = createWordArray(statement);

};


module.exports = Word;