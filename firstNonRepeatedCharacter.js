function firstNonRepeatedCharacter(str){
    var unique = [];
    var result = '';
    //loop through the string
    for (var i = 0; i < str.length; i++){
      //find all unique characters with nested loop
      // counter for each letter
      let noRepeats = 0;
      for (var j = 0; j < str.length; j++){
        //if unique, push to new array
        if(str[i] !== str[j]){
          noRepeats++;
        }
      }
      // check if no repeat count === length - 1
      if (noRepeats === str.length - 1) {
        // if so, it is unique, push to array
        unique.push(str[i]);
      }
    }
  
    for (var x = 0; x < str.length; x++){
         if(unique.includes(str[x])){
           return str[x];
        }
    }
    // return only the first occuring character as a string
    return 'sorry';
  };
  
  console.log(firstNonRepeatedCharacter('ABCDBIRDUP'));//'A'
  
  console.log(firstNonRepeatedCharacter('ALABAMA'));//'L'
  
  console.log(firstNonRepeatedCharacter('XXXXXXXX'));//'Sorry'
  
  console.log(firstNonRepeatedCharacter('BABA'));//'Sorry'