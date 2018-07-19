var Word = require("./word.js");
var Letter = require("./letter.js");

var wordToGuess = "translate";
var letterObjects = [];

for (var i = 0; i < wordToGuess.length; i++) {
    var letter = wordToGuess[i];
    var letterObject = new Letter(letter);
    letterObjects.push(letterObject);
}

var word = new Word(letterObjects);

console.log(word.current()); // _ _ _ _ _ 
