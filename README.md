# Constructor-Word-Guess

* This project is the result of collaboration with my instructor, Thomas Eaves.  He has mad game, and I learned a lot.

* From the command line, run ' node index ' and guess letters one at a time.

* The theme of the game is full-stack vocabulary.

# Functionality play-by-play: What happens when you run the application

* index40 is the first code to execute on the command line, logging word.current().
- We go first to the for-loop at index15-19.
- 'candidateWord' is a string selected at random from "wordArray" (index10-11).
- index15 turns "candidateWord" into an array itself, and then index16 assigns the value of each index in that array to the variable 'letter'.
- At index17 'letterObject' takes the value of the constructor Letter, with 'letter' passed in as the argument.
- At index18 we push the value of 'letterObject' into the array "letterObjects", which was declared globally at index13.  So "letterObjects" is now an array of letters that have been, or will have been checked by the Letter constructor to determine whether the user's guessed letter is in the selected word, and to return either that letter or an underscore at the proper index.
- index21 then assigns to 'word' (globally declared as an object on index12) the vale of the constructor Wrod, with "letterObjects" as its argument.
- Back at index40, word.currect() is called from word7-14, with the argument "letterObjects".
- word8 declares 'currentState' as an empty string.
- word 10-11 loops through "letterObjects" and concatenates the results of passing each 'letterObject' in that array through the returnCharacter() function at letter5-11, either a letter or an underscore at each index.
- the newly populated string 'currentState' is returned, and is the first result logged in the console at application start.