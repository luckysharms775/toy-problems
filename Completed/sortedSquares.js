

function sortedSquares(arr){
  let array = [];
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i];
   array.push(arr[i])
  
  //console.log(arr[i]);
  }
  array.sort(function(a, b){
    return a-b;
  })
  return array;
}



console.log(sortedSquares([-4, -1, 0, 3, 10])); 
//=>[0, 1, 9, 16, 100];
console.log(sortedSquares([-7, -3, 2, 3, 11]));
//=>[4, 9, 9, 49, 121];