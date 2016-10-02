(function(){
  'use strict';
  var wordsGreaterThanThree;
  var generatedWord;
  var word;
  var remaingGuesses;
  var playerGuessButton;
  var inputBox;
  var playerGuess;
  var letter;

remaingGuesses = 5;

//Returning words that are more than 2 letters.
  wordsGreaterThanThree = commonWords.filter(function(words){
  return words.length > 2 && words.length < 10;
});
console.log(wordsGreaterThanThree); // Prints words in the group greater than or equal to 3.

//Use the following to generate the word that is then put on screen.
function wordGenerator(){
  generatedWord = Math.floor(Math.random() * wordsGreaterThanThree.length);
  return wordsGreaterThanThree[generatedWord];
}

word = wordGenerator();


//Below is where we will set up when the player guesses and what to do.
playerGuessButton = document.getElementById("button");
playerGuessButton.addEventListener("click", playerInput);

function playerInput(){
  inputBox = document.getElementById("guess");
  playerGuess = inputBox.value;
  inputBox.value = "";
  isLetterCorrect(playerGuess);
  subtractLives();
}

//Is the letter correct?
letter = 0;

function isLetterCorrect(playerGuess) {
  for (var i = 0; i < word.length; i++) {
    if(word[i] == playerGuess){

    }
  }
}



}());
