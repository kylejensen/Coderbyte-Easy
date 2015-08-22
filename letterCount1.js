/* Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. */

function LetterCountI(str) { 
  // code goes here
  var x = str.split(' ');
  var count = 0;
  for (var i = 0; i < x.length; i++){
  	var word = x[i];
    for (var j = 0; j < word.length; j++){
    	var letter = word[j];
      for (var k = 0; k < word.length; k++) {
      	if (j !== k) {
        	if (letter === word[k]) {
             count += 1;
              if (count > 1) {
              	return word;
              }
            }
        }
      }
    }
  }
  return -1;
}
