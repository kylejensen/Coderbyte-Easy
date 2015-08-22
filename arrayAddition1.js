/* Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. */

function ArrayAdditionI(arr) {
  // code goes here
  arr.sort(function(a,b){return a-b});
  var max = arr.pop();
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    for (var j = 0; j < arr.length; j++) {
      if (i != j) {
      	sum += arr[j];
        if (sum == max) {
        	return true;
        }
      }
    }
    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
      	sum -= arr[k];
        if (sum == max) {
        	return true;
        }
      }
    }
    sum = 0;
  } //end i
  return false;    
}
