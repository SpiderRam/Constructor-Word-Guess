function Letter(character) {
    this.character = character;
    this.letterHasBeenGuessedCorrectly = false;

    this.returnCharacter = function() {       
        if (this.letterHasBeenGuessedCorrectly === false) {
            return "_ ";
        } else {
            return this.character;
        }     
    };

    this.checkCharacter = function(character) {
        if (this.character === character) {
            this.letterHasBeenGuessedCorrectly = true;
        }
    };
};

module.exports = Letter;