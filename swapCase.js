/* Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. */

function SwapCase(str) { 
  // code goes here
  var x = str.split('');
  var p = [];
  for (var i = 0; i < str.length; i++) {
  	if (x[i] === x[i].toUpperCase() ) {
    	p.push(x[i].toLowerCase());
    } else {
    	p.push(x[i].toUpperCase());
    }
  }
  return p.join('');
}
