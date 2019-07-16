// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return “null” on invalid input.

// You can use this DIGIT_VALUES object to help you!
// var DIGIT_VALUES = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000
// };

// Examples: 
// "LX" => 60
// "IV" => 4
// "horse" => "null"
// "" => 0



function romanNum(str) {  

    var result = 0;
    
    var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

    for( var i = 0; i <= values.length; i++ ) {

      while( str.indexOf(roman[i]) === 0 ) {

        result += values[i];
        //add the matching value to the result
        str = str.replace(roman[i],'');
        //remove the matched Roman letter from the beginning
      }
    }
    return result;
  }
  
  
  console.log(romanNum("XXII")); // returns 22  
  console.log(romanNum("DCCVII")); // returns 707  
