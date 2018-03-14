function ifMany(duration){
let answer;
   duration>1?answer='s':answer='';
   return answer;
 }
 
 function makeDuration (seconds, numberOfSeconds){
   return Math.floor(seconds/numberOfSeconds);
 }
 
function formatDuration (seconds) {
  if (!seconds){
  return 'now';}
  let year = makeDuration(seconds, 31536000);
  seconds -= year*31536000;
  let day = makeDuration(seconds, 86400);
  seconds -= day*86400;
  let hour = makeDuration(seconds,3600);
  seconds -= hour*3600;
  let minute = makeDuration(seconds, 60);
  seconds -= minute*60;
  let second = seconds;
  
  let result = [];
  if(year) {
    result.push(year+" year"+ifMany(year));
    }
  if(day){
    result.push(day+" day"+ifMany(day));
    }
  if(hour){
    result.push(hour+" hour"+ifMany(hour));
    }
  if(minute){
    result.push(minute+" minute"+ifMany(minute));
    }
  if(second){
    result.push(second + " second"+ifMany(second));
    }
    if(result.length>1){
  let lastItem = result.pop();
  let stringOfDuration = result.join(", ");
  stringOfDuration = stringOfDuration+" and "+lastItem;
  return stringOfDuration;}
  else{
    return result.join("");
  }
}