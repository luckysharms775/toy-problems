// Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

// It is a comparison sort, meaning that it can sort items of any type for which a “less-than” relation is defined.

// Quicksort uses these steps.

// Choose any element of the array to be the pivot. There are multiple ways of selecting a pivot; explore the options and note their advantages.

// Divide all other elements (except the pivot) into two partitions.

// All elements less than the pivot must be in the first partition.

// All elements greater than the pivot must be in the second partition.

// Recursively apply the above process to the two partitions

// Join the first sorted partition, the pivot, and the second sorted partition.

// The best pivot creates partitions of equal length (or lengths differing by 1). The worst pivot creates an empty partition (for example, if the pivot is the first or last element of a sorted array).

// Extra Credit: Perform the sort in place.


function quicksort (array) {
    var left = [];
    var right = [];
    
    if (array.length <= 1) {
      return array;
    }
    
    const pivot = array.pop();
  
    array.forEach( element => {
      if (element <= pivot) {
        left.push(element);
        
      } else {
        right.push(element)
      }
    })
    
    return  //kept exceeding max call stack
  }


    function createLargeArray() {
        var input = [];
        var sorted;
        var n = 100000;
        for (var i = 0; i < n; i++) {
          var number = Math.floor(Math.random() * n);
          input.push(number);
        };
      
        return input;
      };
      
      const arr = createLargeArray();
      const test7 = arr.slice().sort((a, b) => a - b);
      const test6 = quickSort(arr);
      console.log(`Should handle large array: ${JSON.stringify(test6) === JSON.stringify(test7)}`);




const test1 = quickSort([8,7,3,6,9,2,4,5,1]);
console.log(`Should sort a short array of integers: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test1)}`);

const test2 = quickSort([8,7,3,3,9,2,4,5,1]);
console.log(`Should handle duplicates: expected [1,2,3,3,4,5,7,8,9] and got ${JSON.stringify(test2)}`);

const test3 = quickSort([9,8,7,6,5,4,3,2,1]);
console.log(`Should handle reversely sorted array: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test3)}`);

const test4 = quickSort([]);
console.log(`Should handle empty array: expected [] and got ${JSON.stringify(test4)}`);

const test5 = quickSort([1]);
console.log(`Should handle array with single element: expected [1] and got ${JSON.stringify(test5)}`);