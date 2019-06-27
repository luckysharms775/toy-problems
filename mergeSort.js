// // // // // // // // 


// // // // // // // 1.Initial step: Input array is split into "sorted" sublists
// // // // // // // [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

// // // // // // // 2.Merge step: Adjacent sublists are merged into sorted sublists
// // // // // // // [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

// // // // // // // 3.Repeat merge step:
// // // // // // // [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

// // // // // // // 4.Repeat merge step:
// // // // // // // [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

// // // // // // // 5.Done! Return the sorted array:
// // // // // // // [1,2,3,4,4,7,9]



// // // // // // 1.Split the input array in half
// // // // // //    [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2

// // // // // // 2.Both sides are sorted recursively:
// // // // // //    [4, 7, 4] -> [4, 4, 7]
// // // // // //    [3, 9, 1, 2] -> [1, 2, 3, 9]

// // // // // // 3.Both halves are merged:
// // // // // //    [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]



// // // // // Step 2 might seem a bit mystical - how do we sort both sides? The
// // // // // simple answer is that we use mergesort! After all, mergesort sorts
// // // // // arrays, right? We can test this on [4, 7, 4] by just following the
// // // // // steps above but imagining that [4, 7, 4] is the whole array, which
// // // // // is what happens when you call mergesort on it.

// // // // 1.Split the input array in half
// // // //      [4, 7, 4] -> [4], [7, 4]

// // // //  2.Both sides are sorted recursively:
// // // //     [4] -> [4]
// // // //     [7, 4] -> [4, 7]

// // // //  3.Both halves are merged:
// // // //    [4], [4, 7] -> [4, 4, 7]

// // // I cheated again by going directly from [7, 4] to [4, 7], but that’s
// // // really just:

// // 1.Split the input array in half
// //    [7, 4] -> [7], [4]

// // 2.Both sides are sorted recursively:
// //     [7] -> [7]
// //     [4] -> [4]

// // 3.Both halves are merged:
// //     [7], [4] -> [4, 7]

// As you can see, all the work actually gets done in step 3, the merge
// step. Everything else is just splitting and recursing.

// Mergesort is an optimized sorting algorithm which is a common choice to implement sort
// methods in standard libraries as an alternative to quicksort or heapsort. (For example,
// Firefox’s Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
// Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)

// DO NOT USE Array.sort()!
function mergeSort (arr){
    //need to return the array if there is only one number
      if(arr.length < 2){
        return arr;
      };
    // need to divide the array in half to create midpoint
      var middleArr = Math.floor(arr.length/2);
    
      //slice the first index through middle
      var leftArr = arr.slice(0, middleArr);
      var rightArr = arr.slice(0, middleArr);
    
    //helper function to help sort the sliced arrays
    function mergeHelp (leftArr, rightArr) {
      var mergerArr = [];
      var leftIndex = 0;
      var rightIndex = 0;
    
      while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
            // if leftArr item < rightArray item
            if (leftArr[leftIndex] < rightArr[rightIndex]) {
              // push item to mergerArr and increment
              mergerArr.push(leftArr[leftIndex]);
              leftIndex++;
              continue;
            };
            // right is smaller
            mergerArr.push(rightArr[rightIndex]);
            rightIndex++;
          };
          // concatenate sorted array slices and return the result
          return mergerArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
        };
    
        return mergeHelp(mergeSort(leftArr), mergeSort(rightArr));
    };

    //code is broken somewhere. need to debug
    
    

   


const test1 = mergeSort([8,7,3,6,9,2,4,5,1]);
console.log(`Should sort a short array of integers: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test1)}`);

const test2 = mergeSort([8,7,3,3,9,2,4,5,1]);
console.log(`Should handle duplicates: expected [1,2,3,3,4,5,7,8,9] and got ${JSON.stringify(test2)}`);

const test3 = mergeSort([9,8,7,6,5,4,3,2,1]);
console.log(`Should handle reversely sorted array: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test3)}`);

const test4 = mergeSort([]);
console.log(`Should handle empty array: expected [] and got ${JSON.stringify(test4)}`);

const test5 = mergeSort([1]);
console.log(`Should handle array with single element: expected [1] and got ${JSON.stringify(test5)}`);

function createLargeArray() {
  var input = [];
  var sorted;
  var n = 100000;
  for (var i = 0; i < n; i++) {
    var number = Math.floor(Math.random() * n);
    input.push(number);
  }

  return input;
}

const arr = createLargeArray();
const test7 = arr.slice().sort((a, b) => a - b);
const test6 = mergeSort(arr);
console.log(`Should handle large array: ${JSON.stringify(test6) === JSON.stringify(test7)}`);