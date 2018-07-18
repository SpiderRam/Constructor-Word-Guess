function Letter(character) {
    this.character = character;
    this.letterHasBeenGuessed = false;

    this.returnCharacter = function() {       
        if (this.letterHasBeenGuessed === false) {
            return "_";
        } else {
            return this.character;
        };       
    };

    this.checkCharacter = function() {
        console.log("check letter");
    };
    
};

module.exports = Letter();