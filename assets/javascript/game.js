//Creating variables 
var wins = 0;                    //number of wins
var listOfBands = ["Madonna", "Cyndy Lauper", "Madonna", "Genesis"]; //list of bands array
var guessesRemaining = 30;      //guesses remaining, start at 30, decrement with each guess
var guessedLetters = [];        //set guessedLetters to empty
var wordSoFar = [];             //set wordSoFar to empty
var correctLetters = [];        //set correctLetters to empty
var currentBand = "";

//Create a function to start the game: randomly choose band, display wins 0, display 
function startGame() {
    chooseBand();
    document.getElementById("html-wins").innerHTML = "<p>0</p>";
    document.getElementById("html-guessesRemaining").innerHTML = "<p>30</p>";
}

function chooseBand() {
    //Randomly pick band from listOfBands array, convert it to lower case, and put it in currentBand variable 
    currentBand = listOfBands[Math.floor(Math.random() * listOfBands.length)];
    currentBand = currentBand.toLowerCase();
}

startGame();
console.log(currentBand);

//This function is run whenever the user presses a key - this is our event listener
document.onkeyup = function(event) {

    //Determines which key was pressed 
    userGuess = event.key;   

    //Convert userGuess to lower case in case they entered a capital letter
    userGuess = userGuess.toLowerCase();

    //Check if entered value is a letter or a number or a space 
    const key = event.key.toLowerCase();
    if (key.length !== 1) {
        return;
    }
    
    const isLetter = (key >= "a" && key <= "z");
    const isNumber = (key >= "0" && key <= "9");
    // const isSpace = (key = " ");  //rats, coundn't get it to check for spaces, got error*****
    if (isLetter || isNumber) {
        //|| isSpace) 
        
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>Mr Hangman chose: " + currentBand + "</p>" +
          "<p>wins: " + wins + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#html-wins").innerHTML = html;
        console.log(userGuess);
    }
};

// Creating a variable to hold our new HTML variables. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
// 


// function renderWord() {
//     //display # of chars as underscores (using replace)s
//     for (var i = 0; i < currentBand.length; i++) {
//     var masked = currentBand.replace(i,"_");
//     console.log(masked);

//     document.getElementById("word").innerHTML = wordSoFar.join(" ");
//     }
// }

// function compareGuess {
//     //need to compare the selected 
//     for (var i = 0; i < c i++) {
//         var masked = currentBand.replace(i,"_");
//         console.log(masked);
//     }
// }



    // //Check if userGuess is in currentBand
    // if (currentBand.includes(userGuess)) {
    //     console.log("yes, currentBands contains userGuess");
    //     //how do I put the letter in the right spot in the word?
    //     //decrement guessesRemaining by 1
        
        
   

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

    //If  wins <=10, repeat
    //If wins > 10, display "YOU ROCK!" and return screen to beginning state