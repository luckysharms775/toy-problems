function longestPalindrome (string) {
    // your code here!
  var palindromes = [];

  string = string.split(' ');

  //console.log(string);
  // find and store the palindromes
  for( var i = 0; i < string.length; i++ ) {
        //use helper function 
      if( findPalindrome(string[i]) === true) {

        palindromes.push(string[i]);
      };
};
  return palindromes;
};
  



function findPalindrome(string){
    if(string.length !== reverseString(string).length){
        return false;
    }
    if(string !== reverseString(string)){
        return false;
    }
    return true;
  }
  
  //helper function for detecting palindrome
  function reverseString(string){
     string = string.split('').reverse().join('');
 
     return string;
  }
  
  
  
  
  console.log(`Test1: expected "aibohphobia" and got "${longestPalindrome('aibohphobia')}"`);
  console.log(`Test2: expected " redivider " and got "${longestPalindrome('aaaa level eye redivider hannah')}"`);
  console.log(`Test3: expected "racecar" and got "${longestPalindrome('This palindrome occurs in the last half of the string racecar')}"`);
  console.log(`Test4: expected "tattarrattat" and got "${longestPalindrome('There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg')}"`);
  console.log(`Test5: expected "a racecar a" and got "${longestPalindrome('My dad is a racecar athlete')}"`);
  