/* Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. */

function LetterCapitalize(str) {
	//code goes here
	var c = []
    var sep = str.split(' ');
  	for(var i=0; i < sep.length; i++) {
    	c.push(sep[i][0].toUpperCase() + sep[i].slice(1));
    }
  return c.join(" ");
}
