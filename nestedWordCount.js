// Given an array of unique words, 
// find the word that contains the greatest number of other words. 
// A word must be at least two letters long.
function nestedWordCount(wordList) {
    // your code here!
    let wordBank = {};
      for(let i = 0; i < wordList.length; i++){
          wordBank[wordList[i]] = 0;
          
          for(let j = 0; j < wordList.length; j++){
              if(wordList[i] !== wordList[j]){
                  if(wordList[i].includes(wordList[j])){
                      wordBank[wordList[i]]++
                  }
              }
          }
      }
          
    let count = 0;
    let result = '';
          for (let key in wordBank) {
              if (wordBank[key] > count) {
              count = wordBank[key]
              result = key
              }
          }
    
          return result
  };
  
  console.log(nestedWordCount(["ant", "anti", "antiparticle", "antiparty", "apart", "art", "arty", "disparted", "impart", "imparted", "interparticle", "interparty", "part", "parted", "party", "tip"]))//===> "antiparty"
// sample inputs for writing tests!:
​
// ["ant", "anti", "antiparticle", "antiparty", "apart", "art", "arty", "disparted", "impart", "imparted", "interparticle", "interparty", "part", "parted", "party", "tip"]
// "antiparty"
​
// ["blue", "back", "up", "and", "going", "javascript", "much", "provides", "book", "series", "new", "many", "complete", "background", "years", "necessary", "those", "limited", "sufficiently", "easy", "toward", "mechanisms", "operators", "function", "types", "including", "first", "sufficiently", "easy", "books", "overview", "unicorn", "bear", "bee", "box", "cat", "gorilla", "giant", "gear", "goal", "home", "ache", "fantastic", "exuberant", "ice", "hollow", "happy", "healthy", "homily", "cold", "hot", "yellow", "orange", "green", "complacent", "super", "monster", "bull", "horse", "pig", "another", "one", "to", "test", "you", "guys", "out", "how", "like", "me", "now", "son"]
// "background"
​
// ["dis", "disintegrate", "disrated", "disrating", "rat", "rate", "rated", "rating"]
// "disrated"
​
// ["gray", "grays", "ray", "rays", "strays"]
// "grays"



  
 