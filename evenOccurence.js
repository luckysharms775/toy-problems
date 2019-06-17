function evenOccurrence (arr) {
    var obj = {};
    
    for (var i = 0; i < arr.length; i++) {
      if (obj.hasOwnProperty(arr[i])) {
        obj[arr[i]]++;
      } else {
        obj[arr[i]] = 1;
      }
    }
    if (arr.length === 0) {
        return null;
      }
    for (var j = 0; j < arr.length; j++) {
      if (obj[arr[j]] % 2 === 0) {
        return arr[j];
      }
    }
    return null;
  }
  
  
//inputs array of primitives

//output First element that occurs an even # of times

//Examples:

 console.log(evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5])); // 2

 console.log(evenOccurrence(['cat', 'dog', 'dig', 'cat'])); // 'cat'

 console.log(evenOccurrence(['meow', 2, 1, 'meow'])); //'meow'

 console.log(evenOccurrence(['red', 'orange', 'yellow', 'green'])); // null