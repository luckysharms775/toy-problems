function numJewelsInStones(str1, str2){
    //count variable
    let count = 0;
    //for loop for str1
    for(let i = 0; i < str1.length; i++){
    //nested for loop for str2
      for(let j = 0; j < str2.length; j++){
        //if conditional truthy statement between both 
          //string parameters
        if( str1[i] === str2[j]){
         count++
        }
      }
    }
    return count;   
    //return count
  }
  
  console.log(numJewelsInStones('aA', 'aAAbbb'))//=> 3
  console.log(numJewelsInStones('z', 'ZZ'))//=> 0