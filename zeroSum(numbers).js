function zeroSum(numbers){

    for (var i = 0; i < numbers.length; i++){
        //console.log(numbers.splice([i], 1) )
        if (numbers.slice([i]).includes(-numbers[i]) &&numbers.length > 1) {
            return true;
        }
    }
    return false;
  }
  
  
  
  

  
  
  console.log(zeroSum([1,3,2,-3]))//true
  
  console.log(zeroSum([5,7,2,9]))//false
  
  console.log(zeroSum([0,1,0,1,0]))//true
  
  console.log(zeroSum([0]))//false
  
  console.log(zeroSum([6,7,9,-4,0,-5,-7]))//true
  
  