var Word = require("./word.js");
var readline = require("readline");
var Letter = require("./letter.js");

var interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var wordArray = ["JAVASCRIPT", "HYPERTEXT", "DATABASE", "EXPRESS", "CASCADING", "RECURSION", "INTERFACE", "CALLBACK", "CLIENT", "JQUERY"];
var candidateWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var word = {};
var letterObjects = [];

for (var i = 0; i < candidateWord.length; i++) {
    var letter = candidateWord[i];
    var letterObject = new Letter(letter);
    letterObjects.push(letterObject);
}

word = new Word(letterObjects);

function askQuestion(question, callback) {
    interface.question(question, callback);
}

function evaluateQuestion (answer) {
    var upperCaseAnswer = answer.toUpperCase();
    word.guessLetter(upperCaseAnswer);
    console.log(word.current());

    if (word.isGuessed() === false) {
        askQuestion("Guess letter (then hit ENTER)", evaluateQuestion);
    } else {
        console.log("Great job!")
        interface.close();
    }
}

console.log(word.current());
askQuestion("Guess letter (then hit ENTER)", evaluateQuestion);




