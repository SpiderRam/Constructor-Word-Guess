var fs = require('fs');
var letter = require('./letter');

function Word(letters) {
    this.letters = letters; // [ ] of Letter.js objects

    this.current = function() {
        var currentState = ""; 

        for (var i = 0; i < this.letters.length; i++) {
            currentState += this.letters[i].returnCharacter(); // returns either '_' or character
        }
        return currentState;
    }

    this.guessLetter = function(character) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].checkCharacter(character);
        }
    }

    this.isGuessed = function() {
        var guessed = true;

        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].letterHasBeenGuessedCorrectly === false) {
                guessed = false;
                break;
            }
        }

        return guessed;
    }
}

module.exports = Word;