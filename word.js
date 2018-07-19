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
}

module.exports = Word;