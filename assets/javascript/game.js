//Creating variables to store the number of wins, the list of words the user will guess, and the guesses remaining
var wins = 0;                    //number of wins
var listOfBands = ["Madonna","Cyndy Lauper","Madonna","Genesis"] //list of bands array
var guessesRemaining = 30;      //guesses remaining, start at 30, decrement with each guess
var guessedLetters = [];

//Randomly pick band from listOfBands array, convert it to lower case, and put it in currentBand variable 
var currentBand = listOfBands[Math.floor(Math.random() * listOfBands.length)].toLowerCase;
console.log(currentBand);

//display # of chars as underscores (using replace)
for (var i = 0; i < currentBand.length; i++) {
    var masked = currentBand.replace(i,"_");
    console.log(masked);
}

var userGuess = prompt("Guess the 80s band Mr. Hangman is thinking of. Please pick a letter.");
console.log("You guessed: " + userGuess);

//This function is run whenever the user presses a key - this is our event listener
document.onkeyup = function(event) {
    //Determines which key was pressed 
    userGuess = event.key;

    //Bonus: need logic here to ensure that program starts only when alpha characters are entered, uppercase is fine, we will 
    //lowercase them when we read them
    
    // Function to check letters and numbers using regex https://www.w3resource.com/javascript/form/letters-numbers-field.php
    // function alphanumeric(inputtxt)
    // {
    // var letterNumber = /^[0-9a-zA-Z]+$/;
    // if((inputtxt.value.match(userGuess)) 
    //     {
    //     return true;
    //     }
    // else
    //     { 
    //     alert("message"); 
    //     return false; 
    //     }
    //     }
    // console.log(letterNumber);

    //Convert userGuess to lower case in case they entered a capital letter
    userGuessLower = userGuess.toLowerCase();

    //Check if userGuess is in currentBand
    if (currentBand.includes(userGuess)) {
        console.log("yes, currentBands contains userGuess");
        //how do I put the letter in the right spot in the word?
        var
        guessesRemaining--; //decrement guessesRemaining by 1
        
        
    };



// or do I need this?  I don't think I need this because this is looking for the whole word in an array. I am looking for a letter in a string 
if (listOfBands.indexOf(userGuessLower) === -1) {
    alert("Nah! They're pretty lame...");
  }
  // If it is in the array...
  else {
    alert("OMG! I love them too!");
  }


    //display # of chars as underscores (using rep)
    for (var i = 0; i < currentBand.length; i++) {
        var masked = currentBand.replace(i,"_");
        console.log(masked);
    }

//  Example for loop:
//  for (var i = 0; i < vegetables.length; i++) {
//     console.log("I love " + vegetables[i]);
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

}

    //************************************************************* */

    // var answer = confirm("Are you sure?");
   

    //Function to check for all letters in a field
    // function allLetter(inputtxt)
    // {
    // var letters = /^[A-Za-z]+$/;
    // if(inputtxt.value.match(letters))
    //     {
    //     return true;
    //     }
    // else
    //     {
    //     alert("message");
    //     return false;
    //     }
    // }
