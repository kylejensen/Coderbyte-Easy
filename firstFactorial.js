/* Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. */

function FirstFactorial(num) { 
  // code goes here
  if(num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  }
  var tmp = num;
  while (num-- > 2) {
    tmp *= num;
  }
  return tmp;
}
