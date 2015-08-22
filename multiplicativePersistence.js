/* Have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. */

function MultiplicativePersistence(num) { 
  // code goes here
    var tot = 0;
    var loop = 0;
    var x = num.toString(10).split("");
     while(x.length > 1) {
        tot = 1;
        x.forEach( function(number) {
            tot *= number;
        });
        x = tot.toString(10).split("");
        loop++;
     }
    return loop;
}
