/*jshint esversion: 6 */

window.onload = function() {

    //Creating variables 
    var wins = 0;                    //number of wins
    var listOfBands = ["Madonna", "Prince", "Madonna", "Genesis","Queen","Journey","Aerosmith"]; //list of bands array
    var guessesRemaining = 30;      //guesses remaining, start at 30, decrement with each guess
    var guessedLetters = [];        //set guessedLetters to empty
    var wordSoFar = [];             //set wordSoFar to empty 
    var correctLetterPosition = "";        //set correctLetterPosition to empty string
    var currentBand = "";           //this is the current randomly selected band the user is trying to guess
    var currentBandLettersArray = [];
    var userGuess = "";

    //Define functions    
    
    //Create a function to start the game: randomly choose band and mask it with "_", display wins 0, display 
    function startGame() {
        chooseBand();
        document.getElementById("html-wins").innerHTML = wins;
        document.getElementById("html-guessesRemaining").innerHTML = guessesRemaining;
        //Never got this part to work
        // //mask CurrentBand with "_"
        // var maskedCurrentBand = currentBand.replace(/[a-z]/g, '_');
        // console.log(maskedCurrentBand);
        // var maskedCurrentBandArray = maskedCurrentBand.split(""); 
        // document.getElementById("html-currentBandMasked").innerHTML = currentBandLettersArray.join(" ");
    }

    //Randomly pick band from listOfBands array, convert it to lower case, and put it in currentBand variable 
    function chooseBand() {
        currentBand = listOfBands[Math.floor(Math.random() * listOfBands.length)];
        currentBand = currentBand.toLowerCase();
        return currentBand;
    }

    //Start game logic

    startGame();
    console.log(currentBand);
    console.log(wins);

    //wins counter - here, trying the string.length method 
    var counter = wins;
    var letters = currentBand;
    var word = wordSoFar.toString();
    if (word === letters) {
        counter++;
        document.getElementById("html-wins").innerHTML = counter;
    }
    console.log("counter: " + counter);
    console.log("letters.length: " + letters.length);
    console.log("wins: " + wins);

    //Process event clicks function - this function is run whenever the user presses a key - this is our event listener
    document.onkeyup = function(event) {

        //Determines which key was pressed 
        userGuess = event.key;   

        //Convert userGuess to lower case in case they entered a capital letter
        userGuess = userGuess.toLowerCase();

        //Check if entered value is a letter or a number or a space. If so, convert to lower case and proceed 
        const key = event.key.toLowerCase();
        if (key.length !== 1) {
            return;
        }
        
        const isLetter = (key >= "a" && key <= "z");
        const isNumber = (key >= "0" && key <= "9");
        // const isSpace = (key = " ");  //rats, coundn't get it to check for spaces, got error*****
        if (isLetter || isNumber) {
            //|| isSpace) 
            guessesRemaining--;             //decrement guessesRemaining
            document.getElementById("html-guessesRemaining").innerHTML = guessesRemaining; 
            console.log(guessedLetters);
            console.log(guessesRemaining);
            
            //convert currentBand letters to an array so that we can compare userGuess to them 
            currentBandLettersArray = currentBand.split(""); 
            console.log(currentBandLettersArray);

            // //store index of correct userGuess within currentBandLettersArray to correctLetterPosition, then we want to put userGuess in that same index of wordSoFar...charAt, replaceAt, splice???
            // correctLetterPosition = currentBandLettersArray.indexOf(userGuess); 
            // console.log("correctLetterPosition: " + correctLetterPosition);  

            while (wordSoFar != currentBandLettersArray && guessesRemaining <=30) {     //Using while loop here because I don't know how many time it will need to run
                //Check if userGuess in currentBandLettersArray
                if (currentBandLettersArray.indexOf(userGuess) === -1) { // If userGuess NOT in currentBandLettersArray

                    //push userGuess to guessedLetters array which displays to "Letters Guessed But Not In Word" 
                    guessedLetters.push(userGuess); 
                    document.getElementById("html-lettersGuessed").innerHTML = guessedLetters.join(" ");
                    alert("This letter isn't in the current band's name. Try again.");
                    console.log("This letter isn't in the current band's name. Try again.");
                }
                else { //userGuess is in currentBandLettersArray, now we need to add it to wordSoFar and write it to 

                    //need to check for duplicate characters but need to handle words that have multiple occurrences of the same character (i.e., "Queen" has 2 "e"s.)
                    var progress = "";
                    var letters = currentBandLettersArray;
                    for(i = 0, progress = ''; i < letters.length; i++) {
                        progress += wordSoFar.indexOf(letters[i]) == -1 ? '_' : letters[i];  //this is not capturing the first correct keystroke, the display is always 1 stroke behind
                    }
                    console.log("progress: " + progress);
                    wordSoFar.push(userGuess);
                    console.log("wordSoFar: " + wordSoFar);
                    console.log("currentBandLettersArray: " + currentBandLettersArray);
                    //write the guessed letters to the screen under "Mr. Hangman chose" 
                    //document.getElementById("html-currentBand").innerHTML = wordSoFar.join(" ");
                    document.getElementById("html-currentBand").innerHTML = progress;
                    if (wordSoFar === currentBandLettersArray) {
                        wins++;  //trying once again to increment wins since loop doesn't appear to be working
                        
                        document.getElementById("html-wins").innerHTML = wins;
                        break;
                   }
                }
                    return userGuess; //do not remove this...infinite loop will ensue
            }
        }

    }; // close document.onkeyup = function(event)
    

        //read userGuess and convert to lower case
        //while guessesRemaining <= 30 and currentBand not fully guessed, check if userGuess is in currentBand
            //--> if yes, display letter in proper position and decrement guessesRemaining
            //--> if no, display "Sorry, try again" message, add userGuess to guessedLetters array, and decrement guessesRemaining
            // if (currentWord(indexOf(userGuess) === -1) {

        //If guessesRemaining <= 30 and currentBand is fully guessed, increment Wins by 1 and replace header img with band img 
        //Optional, time permitting: play song or video by band

}; //Close window.onload