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
  
  
  
