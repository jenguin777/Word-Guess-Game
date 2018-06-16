window.onload = function() {
   

//Creating variables 
var wins = 0;                    //number of wins
var listOfBands = ["Madonna", "Prince", "Madonna", "Genesis","Queen","Journey","Aerosmith"]; //list of bands array
var guessesRemaining = 30;      //guesses remaining, start at 30, decrement with each guess
var guessedLetters = [];        //set guessedLetters to empty
var wordSoFar = [];             //set wordSoFar to empty
var correctLetters = [];        //set correctLetters to empty
var currentBand = "";           //this is the current randomly selected band the user is trying to guess
var currentBandLettersArray = [];
var userGuess = "";
var shown = "";

//Create a function to start the game: randomly choose band and mask it with "_", display wins 0, display 
function startGame() {
    chooseBand();
    document.getElementById("html-wins").innerHTML = "<p>0</p>";
    document.getElementById("html-guessesRemaining").innerHTML = "<p>30</p>";
    //mask CurrentBand with "_"
    var maskedCurrentBand = currentBand.replace(/[a-z]/g, '_');
    console.log(maskedCurrentBand);
    var maskedCurrentBandArray = maskedCurrentBand.split(""); 
    document.getElementById("html-currentBandMasked").innerHTML = currentBandLettersArray.join(" ");
}

//Randomly pick band from listOfBands array, convert it to lower case, and put it in currentBand variable 
function chooseBand() {
    currentBand = listOfBands[Math.floor(Math.random() * listOfBands.length)];
    currentBand = currentBand.toLowerCase();
    
    return currentBand;
}

// //another attempt to get the currentBand to be masked
// //Replace "_" with userGuess (if it matches)
// function chooseWord(currentBandLettersArray) {
//   return currentBandLettersArray[Math.floor(Math.random() * currentBandLettersArray.length)].toUpperCase();
// }
// console.log(currentBandLettersArray + "replace method");
// function fillInWordWithLetter(letter, word) {
//     word = userGuess;
//   return word.toLowerCase().split('').map(l ==> {
//     if (l === letter) {
//       return l.toUpperCase();
//     }
//     return '_'
//   }).join(' ')
// }

// fillInWordWithLetter('j', chooseWord(words))


startGame();
console.log(currentBand);

//Process event clicks function - this function is run whenever the user presses a key - this is our event listener
document.onkeyup = function(event) {

    //Determines which key was pressed 
    userGuess = event.key;   

    //Convert userGuess to lower case in case they entered a capital letter
    userGuess = userGuess.toLowerCase();

    //Check if entered value is a letter or a number or a space. If so, update userGuess 
    const key = event.key.toLowerCase();
    if (key.length !== 1) {
        return;
    }
    
    const isLetter = (key >= "a" && key <= "z");
    const isNumber = (key >= "0" && key <= "9");
    // const isSpace = (key = " ");  //rats, coundn't get it to check for spaces, got error*****
    if (isLetter || isNumber) {
        //|| isSpace) 
        //push userGuess to guessedLetters array
        guessedLetters.push(userGuess); //put userGuess into the guessedLetters array so it can be displayed to the user
        guessesRemaining--;             //decrement guessesRemaining
        document.getElementById("html-guessesRemaining").innerHTML = guessesRemaining; 
        console.log(guessedLetters);
        console.log(guessesRemaining);
        
        //convert currentBand letters to an array so that we can compare userGuess to them
        currentBandLettersArray = currentBand.split(""); 
        console.log(currentBandLettersArray);
        var correctLetters = currentBandLettersArray.indexOf(userGuess);
        //Check if userGuess in currentBandLettersArray
        if (currentBandLettersArray.indexOf(userGuess) === -1) {
            document.getElementById("html-lettersGuessed").innerHTML = guessedLetters.join(" ");
            console.log("try again");
        }
        //userGuess is in currentBandLettersArray, now what?
        else {
                wordSoFar.push(userGuess);
                console.log(wordSoFar);
                //write the guessed letters to the screen under "Mr. Hangman chose" - still need to do the letter positioning
                document.getElementById("html-currentBand").innerHTML = wordSoFar.join(" ");
                guessedLetters.push(userGuess);
                }
                return userGuess;
        }
        //Need to make is stop once the word is filled in - not sure how to do this
   
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        // var html =
        // "<p>You chose: " + userGuess + "</p>" +
        // "<p>Mr Hangman chose: " + currentBand + "</p>" +
        // "<p>wins: " + wins + "</p>";

        // // Set the inner HTML contents of the #game div to our html string
        // document.querySelector("#game").innerHTML = html;
        // console.log(userGuess);


        return userGuess;
};
// };


 // for (var i = 0; i < 10; i++) {

        // }

// function renderWord() {
//     //display # of chars as underscores (using replace)s
//     for (var i = 0; i < currentBand.length; i++) {
//     var masked = currentBand.replace(i,"_");
//     console.log(masked);

//     document.getElementById("word").innerHTML = wordSoFar.join(" ");
//     }
// }    
   

// or do I need this?  I don't think I need this because this is looking for the whole word in an array. I am looking for a letter in a string 
// if (listOfBands.indexOf(userGuessLower) === -1) {
//     alert("Nah! They're pretty lame...");
//   }
//   // If it is in the array...
//   else {
//     alert("OMG! I love them too!");
//   }


    

    //read userGuess and convert to lower case
    //while guessesRemaining <= 30 and currentBand not fully guessed, check if userGuess is in currentBand
        //--> if yes, display letter in proper position and decrement guessesRemaining
        //--> if no, display "Sorry, try again" message, add userGuess to guessedLetters array, and decrement guessesRemaining
        // if (currentWord(indexOf(userGuess) === -1) {

        // })

    //If guessesRemaining <= 30 and currentBand is fully guessed, increment Wins by 1 and replace header img with band img 
    //Optional, time permitting: play song or video by band

}; //Close window.onload