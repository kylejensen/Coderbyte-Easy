/* Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. */

function timeStrToMinutes(timeStr) {
  var ap = timeStr.slice(-2).toLowerCase();
  timeStr = timeStr.slice(0,-2);
  var x = timeStr.split(':');
  x[0] = x[0]*1;
  if (x[0] === 12) {
    x[0] = 0;
  }
  x[1] = x[1]*1;
  return x[0] * 60 + x[1] + (ap === 'pm' ? 12 * 60 : 0);
}

function CountingMinutesI(str) {
  var times = str.split('-');
  var time1 = timeStrToMinutes(times[0]);
  var time2 = timeStrToMinutes(times[1]);
  if (time2 <= time1) {
    time2 += 60 * 24;
  }
  // code goes here
  return time2-time1;

}
