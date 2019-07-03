//post fix notation calculator
function calculate(inputs){
    var arr = [], pop1, pop2;
    var inputArr = inputs.split(' ');

    for (var i = 0; i < inputArr.length; i++) {
        if (!isNaN(parseFloat(inputArr[i]))) {
        //console.log(!isNaN(parseFloat(inputArr[i]))); //*true
            arr.push(inputArr[i]);
            //console.log(arr.push(inputArr[i]));
        //console.log(arr);  
        //console.log(inputArr[i]); 
          } else {
            // console.log( pop1 = arr.pop())
            // console.log(pop2 = arr.pop())

             pop1 = arr.pop();
             pop2 = arr.pop();
            //If you construct an arithmetic expression as a string, 
            //you can use eval() to evaluate it at a later time
            arr.push(eval(pop2 + inputArr[i] + pop1));
           //console.log(arr.push(eval(pop2 + inputArr[i] + pop1)))
        }
  }
  return arr;
}




//!isNaN
   
//inputs = strings
//outputs = number that string evaluates to


 console.log(`Test1: for input "1 5 8 * +", expected 41 and got ${calculate('1 5 8 * +')}`);
// console.log(`Test2: for input "1 5 8 + *", expected 13 and got ${calculate('1 5 8 + *')}`);
// console.log(`Test3: for input "100 2 / 25 +", expected 75 and got ${calculate('100 2 / 25 +')}`);
// console.log(`Test4: for input ".5 .5 +", expected 1 and got ${calculate('.5 .5 +')}`);

