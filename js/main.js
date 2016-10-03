(function(){
  'use strict';

  var wordsGreaterThanThree;
  var generatedWord;
  var word;
  var remaingGuesses;
  var messages;
  var wordSlots;
  var characters;
  var playerGuessButton;
  var inputBox;
  var playerGuess;
  var letter;
  var title;
  var lives;
  // var yourWord;


          remaingGuesses = 5;
          messages = {
              win: 'WINNER WINNER CHICKEN DINNER',
              lose: 'SO SORRY, YOU ARE A LOSER!',
              guessed: ' already guessed, please try again...',
              validLetter: 'Please enter a letter from A-Z'
          };

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
console.log(word); //Logs the random word with each refresh of the screen.


//updating spaces
wordSlots = document.querySelector(".your-word");
for (var i = 0; i < word.length; i++) {
    characters = document.createElement("span");
    wordSlots.appendChild(characters);
}

// //Below is where we will set up when the player guesses and what to do.
playerGuessButton = document.getElementById("guess");
playerGuessButton.addEventListener("click", playerInput);

function playerInput(){
  inputBox = document.getElementById("text");
  playerGuess = inputBox.value;
  inputBox.value = "";
  isLetterCorrect(playerGuess);
  subtractLives();
}


// //Is the letter correct if so progress if not decrease guessRemaining.?
letter = 0;
title = document.querySelector("h1");
function isLetterCorrect(playerGuess) {
  for (var i = 0; i < word.length; i++) {
    if(word[i] == playerGuess){
      wordSlots.children[i].textContent = playerGuess;
      letter += 1;
    }
    if(letter == word.length){
      title.textContent = messages.win;
    }
  }
}

function subtractLives(){
  // remaingGuesses -= 1;
  lives = document.getElementById("number-of-guesses");
  lives.textContent = remaingGuesses;
  if (remaingGuesses == 0) {
    title.textContent = messages.lose;
  }
  if(word[i] != playerGuess){
    remaingGuesses -= 1;
  }
}


//RESTART BUTTON
var reset = document.getElementById("restart");
reset.addEventListener("click", resetGame);

function resetGame() {
  window.location.reload()
}



}());
