(function(){
  'use strict';
  var wordsGreaterThanThree;
  var randomWordGenerated;
  var randomWord;
  var remaingGuesses;

//returning words that are more than 2 letters.
  wordsGreaterThanThree = commonWords.filter(function(words){
  return words.length > 2 && words.length < 10;
});
console.log(wordsGreaterThanThree); // Prints words in the group greater than or equal to 3.






}());
