/* Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. */

function LongestWord(sen) {
  // code goes here
  var str = sen.replace(/[^a-zA-Z ]/ig,'').split(' ');
  var longest = 0;
  var word = null;
  for(var i = 0; i < str.length; i++) {
  	if (longest < str[i].length) {
    	longest = str[i].length;
      	word = str[i];
    }
  }
  return word;
}
