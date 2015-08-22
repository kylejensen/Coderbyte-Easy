/* Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. */

function DashInsert(str) { 
  // code goes here
  var x = str.toString();
  var p = [];
  for (var i = 0; i < x.length; i++) {
    p.push(x[i]);
  	if (i < x.length-1 && parseInt(x[i]) % 2 != 0 && parseInt(x[i+1]) % 2 != 0) {
    	p.push('-');
    }
  }
  return p.join('');
}
