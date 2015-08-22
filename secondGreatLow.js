/* Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! */

function SecondGreatLow(arr) {
  // code goes here
  var foo = [arr[0]];
  for (var i = 0; i < arr.length; i++) {
  	if (foo.indexOf(arr[i]) === -1) {
    	foo.push(arr[i]);
    }
  }
  var arrx = foo.sort(function(a,b){return a-b});
  var secLow = arrx[1];
  var revarrx = arrx.reverse();
  var secHigh = revarrx[1];
  return secLow + ' ' + secHigh;   
}
