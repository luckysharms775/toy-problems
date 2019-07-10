console.log(longestRun('abbbcc'))//=>[1,3];
console.log(longestRun('aabbc'))//=>[0,1];
console.log(longestRun(''))//=>[0,0];
console.log(longestRun('abcdefg'))//=>[0,0];

function longestRun (string) {
    var result = [0,0];
    var start = 0;
    var longest = 1;
    var repeat = 1;
    var currentNum;


    for (var i = 0; i < string.length; i++) {

      if (string[i] !== currentNum) {
          if (repeat > longest) {
            longest = repeat;
            result = [start, i -1];
          }
        currentNum = string[i];
        start = i;
        repeat = 1;

      }else{
        repeat++;
        if (i === string.length -1){
          if (repeat > longest){
            
            result = [start, i];
          }
        }
    }

  }
    return result;

};