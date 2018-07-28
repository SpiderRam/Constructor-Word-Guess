# Constructor-Word-Guess

* This project is the result of collaboration with my instructor, Thomas Eaves.  He has mad game, and I learned a lot.

* From the command line, run ' node index ' and guess letters one at a time.

* The theme of the game is full-stack vocabulary.

# Functionality play-by-play: What happens when you run the application

* index40 is the first code to execute on the command line, logging `word.current()`.
- First, the for-loop at index15-19.
- 'candidateWord' is a string selected at random from "wordArray" (index10-11).
- index15 turns "candidateWord" into an array itself, and then index16 assigns the value of each index in that array to the variable 'letter'.
- At index17 'letterObject' takes the value of the constructor Letter, with 'letter' passed in as the argument.
- At index18 we push the value of 'letterObject' into the array "letterObjects", which was declared globally at index13.  So "letterObjects" is now an array of letters that have been, or will have been checked by the Letter constructor to determine whether the user's guessed letter is in the selected word, and to return either that letter or an underscore at the proper index.
- index21 then assigns to 'word' (globally declared as an object on index12) the value of the constructor Word, with "letterObjects" as its argument.
- Back at index40, `word.current()` is called from word7-14, with the argument "letterObjects".
- word8 declares 'currentState' as an empty string.
- word10-11 loops through "letterObjects" and concatenates the results of passing each 'letterObject' in that array through the `returnCharacter()` function at letter5-11, either a letter or an underscore at each index, populating 'currentState'.
- The no longer empty string 'currentState' is returned, and is the first result logged in the console at application start.

* https://nodejs.org/api/readline.html  |  The readline package defines key elements of the code structure in the following logic.
- index 41 calls the `askQuestion()` function, passing in game start directions and the function `evaluateQuestion` as arguments.  
- `askQuestion()` is defined at index23-25, and it calls on the readline package to present the user with an instruction and then process their response; in this case, with `evaluateQuestion`.
- `evaluateQuestion()` is defined at index27-38, and the parameter (answer) is a method used by the readline interface.
- index28 uses the `toUpperCase` function to avoid errors related to the case of user input.
- index29 passes the captured value of the user's input as a parameter in the `guessLetter` function at word16-20.  That function iterates through letterObjects and uses the `checkCharacter()` function from letter13-17 to determine whether or not the user's guessed letter is in the active word.
- index30 displays the new state of the user's progress, the current values of the letterObjects array.
- index32 uses the `isGuessed()` function (and thereby letter3 and `checkCharacter()` (letter13-17)) from word22-33 to determine whether all the letters in the word have been guessed correctly.
- index33 defines the action if all letters have not been guessed, which is to begin the process again-- ask the user to guess a letter and evaluate it, using the function `askQuestion()`.
- index34-36 provides the alternative action, if all letters have been guessed correctly, then the message "Great job!" is displayed and the application ends.