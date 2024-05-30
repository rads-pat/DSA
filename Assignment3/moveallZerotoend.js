// Move All Zeros to End: Given an array of n elements, write a program to move all zeros present in the array to the end without changing the order of non-zero elements.




const arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];

function moveZerosToEnd(arr) {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex++] = arr[i];
    }
  }

  while (nonZeroIndex < arr.length) {
    arr[nonZeroIndex++] = 0;
  }

  return arr;
}

const result = moveZerosToEnd(arr);
console.log(result); // Output: [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0]
