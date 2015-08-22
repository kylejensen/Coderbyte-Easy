/* Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. */

function AdditivePersistence(num) { 
  // code goes here
  var tot = 0;
  var loop = 0;
  var x = num.toString(10).split('').map(function(c){return parseInt(c)});
  while (x.length > 1) {
  	tot = 0;
    x.forEach(function(number) {
    	tot += number;
    });
    x = tot.toString(10).split('').map(function(c){return parseInt(c)});
    loop++;
  }
  return loop;
}
