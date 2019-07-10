function isBalanced (str) {
  
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        // if count dips below 0, you know it's unbalanced.
      if (count < 0) {
        return false;
      } else if (str[i] === '(') {
        count++;
      } else if (str[i] === ')') {
        count--;
      }else{
        return false;
      }
    }
    // if count is 0, then all parenthesis are accounted for.
    if (count === 0) {
      return true;
    }
    return false;
// your code here!
};


//isBalanced('(x+y) - (4)');
//isBalanced('(((10)())((?)(:)))');
//isBalanced('[{()}]');
//isBalanced('(50(');

//console.log(`Test1: expected false and got ${isBalanced(')(')}`);
//console.log(`Test2: expected false and got ${isBalanced('()(()()()())((()(()()))')}`);
//console.log(`Test3: expected true and got ${isBalanced('[[[{{{((()))}}}]]]')}`);
//console.log(`Test4: expected true and got ${isBalanced('(((10 ) ()) ((?)(:)))')}`);
// console.log(`Test5: expected true and got ${isBalanced('(x + y) - (4)')}`);
console.log(`Test6: expected false and got ${isBalanced('({)}')}`);
console.log(`Test7: expected false and got ${isBalanced('[]]')}`);
// console.log(`Test8: expected false and got ${isBalanced('(50)(')}`);
// console.log(`Test9: expected true and got ${isBalanced('{}')}`);
console.log(`Test10: expected false and got ${isBalanced('{')}`);
console.log(`Test11: expected false and got ${isBalanced('[]}{()')}`);
// console.log(`Test12: expected false and got ${isBalanced(')))()(((')}`);
console.log(`Test13: expected false and got ${isBalanced('}')}`);
// console.log(`Test14: expected true and got ${isBalanced('[{()}]')}`);
console.log(`Test15: expected false and got ${isBalanced('[{]}')}`);
// console.log(`Test16: expected true and got ${isBalanced('[{}]')}`);