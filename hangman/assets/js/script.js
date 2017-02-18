// Global Variables 
//---------------------------------------------------------------------
// Arrays and Variables for holding data
var wordOptions = [ "javascript", "node", "python", "java", "scratch", "bash", "algol", "sql", "php", "react","jquery", "ruby"];
var selectedWord ="";
var lettersinWord= [];
var numBlanks= 0;
var blanksAndSuccesses = []; // j _ _ _ _ _ _ _
var wrongLetters =[];

//Game counters
var winCount =0;
var lossCount= 0;
var guessesleft=9;


//FUNCTIONS (Reusable blocks of code that I will call upon when needed
//---------------------------------------------------------------------
function startGame () 
{
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersinWord = selectedWord.split("");
  numBlanks = lettersinWord.length;

  // Reset
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses= [];

/// Populate blanks and sucesses with right number of blanks
    for (var i= 0; i < numBlanks; i++){
          blanksAndSuccesses.push("_");
        }
          
          // Change HTML to reflect game round conditions
          document.getElementById("wordToGuess").innerHTML= blanksAndSuccesses.join("  ");
          document.getElementById("numGuesses").innerHTML = guessesLeft;
          document.getElementById("winCounter").innerHTML = winCount;
          document.getElementById("lossCounter").innerHTML = lossCount;


        /// Testing /// Debugging
      console.log(selectedWord);
      console.log(lettersinWord);
      console.log(numBlanks);
      console.log(blanksAndSuccesses);
}

function checkLetters(letter) 
{
// check if letter exists in the word or code

var isLetterInWord = false;

for (var i=0; i < numBlanks; i++){
      if(selectedWord[i] == letter){
          isLetterInWord = true;
          
     }
  }


  // Check where in the word the letter exists, then populate our blanksAndSuccesses array
   if(isLetterInWord) {
   for (var i = 0; i < numBlanks; i++) {
    if(selectedWord[i] == letter) {
      blanksAndSuccesses[i] = letter;
     }
   }

  }

// Letter wasn't found
    else {
    wrongLetters.push(letter);
      guessesLeft-- 
   }

  /// Testing and debugging
  console.log(blanksAndSuccesses);
}

    function roundComplete() {
      console.log("Win Count: " + winCount + "| Loss Count: " + lossCount +" | Guesses Left " + guessesLeft);
    
    //Update the HTML to reflect the most recent count data
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("  ");
    
    //Check if user won
    if(lettersinWord.toString() == blanksAndSuccesses.toString()){
      winCount++;
    
    alert("You Win!");

    //Update the win counter in HTML
    document.getElementById("winCounter").innerHTML = winCount;

    startGame();
    }
      // Check if user lost
      else if (guessesLeft == 0){
        lossCount++;
        alert("You Lost, Try Again!");

        //Update the HTML
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
      }

  }

//MAIN PROCESS 
//----------------------------------------------------------------------
// initates the code the first time

startGame();

//register key clicks 
document.onkeyup = function(event) 
{
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();

   ///testing /// debugging
   console.log(letterGuessed);
} 

















