function alphaCount(alphabet, text) {
    let results = [];
    let newAlpha = alphabet.toLowerCase().split("");
    let newText = text.toLowerCase().split("").sort();
    let counter = 0;
    let flag = false;
  
    for (let i = 0; i < newAlpha.length; i += 1) {
      temp = [];
      // console.log(newAlpha[i])
      for (let j = 0; j < newText.length; j += 1) {
          if(newAlpha[i] === newText[j]) {
              counter++;
              if (newAlpha[i] !== newText[j + 1]) {
              temp.push(newAlpha[i], ":", counter);
              results.push(temp.join(""));
              counter = 0;
              break;
            }
          }
      }
    }
    console.log(results.length);
    if (results.length === 0) {
        return "no matches";
    }
    return results.join(",");
  }
  
  
  
   console.log(alphaCount("aBc", "ddccbbaaa"));
   console.log(alphaCount("i984", "ti89")); // i:1,9:1,8:1
   console.log(alphaCount("123", "765"));