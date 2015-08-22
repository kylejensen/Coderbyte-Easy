/* Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. */

function VowelCount(str) {
  // code goes here
  var nstr = str.replace(/[^aeiou]/g, '');
  return nstr.length;       
}
