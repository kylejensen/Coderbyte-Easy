/* Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. */

function MeanMode(arr) { 
  var total = 0;
  var sum = 0
  var count = 1;
  var mode = 0;

    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
        for (var j = 0; j < arr.length;j++) {
          if(arr[i] === arr[j]) {
              sum += 1;
            if(sum > count) {
                count = sum;
                mode = arr[i];
               }
             }
           }

        sum = 0;
      }
  var mean = Math.round(total / arr.length);
  if (mean === mode){
    return 1;
  } else {
    return 0;
   }
}
