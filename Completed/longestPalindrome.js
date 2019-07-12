function longestPalindrome(s) {
  var maxLength = 0;
  var maxp = '';
  for (var i = 0; i < s.length; i++) {
    var str = s.substring(i, s.length);
    if (str.length <= maxLength) break; //Stop Loop for smaller strings
      for (var j = str.length; j >= 0; j--) {
      var subStr = str.substring(0, j);
      if (subStr.length <= maxLength) break; // Stop loop for smaller strings
      if (isPalindrome(subStr)) {

          maxLength = subStr.length;
          maxp = subStr;

      }
    }
  }
  return maxp;
}

function isPalindrome(string) {
  
  var rev = string.split('').reverse().join('');
  return string == rev;
}



console.log(`Test1: expected "aibohphobia" and got "${longestPalindrome('aibohphobia')}"`);
console.log(`Test2: expected " redivider " and got "${longestPalindrome('aaaa level eye redivider hannah')}"`);
console.log(`Test3: expected "racecar" and got "${longestPalindrome('This palindrome occurs in the last half of the string racecar')}"`);
console.log(`Test4: expected "tattarrattat" and got "${longestPalindrome('There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg')}"`);
console.log(`Test5: expected "a racecar a" and got "${longestPalindrome('My dad is a racecar athlete')}"`);
