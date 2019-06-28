var accum = 0;

reduce([1,2,3,4],function(accumulator,currentVal){
  return accumulator+currentVal;
},accum) //=> 10
reduce(['a','b','c','d'],function(accumulator,currentVal){
  return accumulator+currentVal;
}) //=> 'abcd'

function reduce(array, func, start){
    //make something to hold all the values || start
    if(start){
        //loop through the array 
        array.forEach(function(element){
        //update the acc to be the result of calling the func
            start = func(start, element)
        })
    }else{
        var start = array[0]
        for ( let i = 1; i < array.length; i++){
        //update the acc to be the result of calling the func
            start = func(start, array[i]);
        }
    }
    return start;
    //return the start var
    
};