alphaCount('aBc', 'aabbccdd') //> 'a:2, b:2, c:2'

alphaCount('x', 'Racer X is my Friend') //> 'x:1'

alphaCount('123', '0 hai') //> 'no matches'

alphaCount('1984', '0 ti89') //> 'i:1, 9:1, 8:1'





function alphaCount (string, text) {
    
  var arr = [];
  var newString = string.toLowerCase().split('');
  var newText = text.LowerCase().split('').sort();
  var count = 0

  for(var i = 0; i < newString.length; i++){
      for(var j = 0; j < newText.length; j++){
          if(newText.includes(newString[i][j])){
              count ++;
          }
          if(newString[i][j] !== newString[i][j])
      }
  }
}










        counter = 0;
        temp = [];
        
              
              if (newAlpha[i][j] !== newAlpha[i][j + 1]) {
                  temp.push(newAlpha[i][j], ":", counter);
                  if(temp.length > 0) {
                      results.push(temp.join(""));
                      break;
                  }
  
              }
              console.log(results)
          }
    }
    console.log("RESULTS ", results);
    if (results.length > 0) {
          return results.join(",");
    }
      return "no matches";
  }
  alphaCount("aBc", "ddccbbaaa");
  // alphaCount("i984", "ti89"); // i:1,9:1,8:1
  // alphaCount("/oo_", "o_o;o-o ^o^ o//o o__o;o.o"); 
  // alphaCount("123", "765");
  
  
  
  
  
// function solve(key){

//   var alpha = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26};

//   var total = 0;

//   for(elem of key){
//     total = total + alpha[elem];
//   }
//   return total
// }
function solve(key){

    var alpha = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26};
  
    // var total = Object.keys(alpha).reduce(function(accumulator, key){
    // return accumulator.value + alpha[key]
    // }, 0);
  
    var total = Object.keys(alpha).map(function(key) {
    alpha[key] += total;
  },0);
  
  
  }
  
  console.log(solve('zodiac')) //>58
  
  console.log(solve('strength')) //>111
  
  console.log(solve('chruschtshov')) //>167
  
  console.log(solve('abcde')) //>15
  
  console.log(solve('abcdefghijklmnopqrstuvwxyz'))
  
  
  

  function solve(s){
    var notAVowel = 0;
    var alpha = 'abcdefg'
    var subString = s.toString();
  
  
        for(var i = 0; i <= subString.length -1; i++){
          if(subString.charAt(i) == 'b'|| subString.charAt(i) == 'c' || subString.charAt(i) == 'd'|| subString.charAt(i) == 'f'|| subString.charAt(i) == 'g'|| subString.charAt(i) == 'h' || subString.charAt(i) == 'j' || subString.charAt(i) == 'k' || subString.charAt(i) == 'l' || subString.charAt(i) == 'm' || subString.charAt(i) == 'n' || 'p' || subString.charAt(i) == 'q' || subString.charAt(i) == 'r' || subString.charAt(i) == 's' || subString.charAt(i) == 't' || subString.charAt(i) == 'v' || subString.charAt(i) == 'w' || subString.charAt(i) == 'x' || subString.charAt(i) == 'y'|| subString.charAt(i) == 'z'){
            notAVowel = notAVowel + 1;
  
        }
        
        // notAVowel = notAVowel + 0;
      }
    return notAVowel;
    
  }
  
  console.log(solve('zodiac'))//=>26
  console.log(solve('strength'))//=>57
  console.log(solve('abcde'))//=>9
  
  