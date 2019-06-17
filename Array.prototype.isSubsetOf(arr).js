Array.prototype.isSubsetOf = function(arr){

  
    var result = true;
     
      //loop through
      this.forEach(function(element){
      //includes will result in a boolean
        if(!arr.includes(element)){
            result = false;
        }
     });
    
    return result;
  
  
  
  }
  
  console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat'])); //true
  
  console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox'])); //false
  
  console.log(['cat', 'cat', 'dog'].isSubsetOf(['cat', 'dog'])); //true
  
  console.log([1, 'cat', 3].isSubsetOf([4, 3,'cat', 1])); //true
  